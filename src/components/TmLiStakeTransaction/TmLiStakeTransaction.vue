<template lang='pug'>
tm-li-transaction(:color="color" :time="transaction.time" :block="transaction.height")
  template(v-if="delegation")
    div(slot="caption")
      | Delegated&nbsp;
      b {{tx.delegation.amount}}
      span &nbsp;{{tx.delegation.denom.toUpperCase()}}S
    div(slot="details")
      | To&nbsp;
      router-link(:to="this.validatorURL + '/' + tx.validator_addr") {{moniker(tx.validator_addr)}}
  template(v-if="unbonding")
    div(slot="caption")
      | Unbonded&nbsp;
      template(v-if="transaction.undelegation")
        b {{transaction.undelegation.amount}}
        span &nbsp;{{transaction.undelegation.denom.toUpperCase()}}S
      template(v-else)
        b {{tx.shares}}
        span &nbsp;Shares
      template(v-if="transaction.time")
        span &nbsp;- {{timeDiff}}
    div(slot="details")
      | From&nbsp;
      router-link(:to="this.validatorURL + '/' + tx.validator_addr") {{moniker(tx.validator_addr)}}
    div(slot="action")
      tm-btn(:value="state === 'ended' ? 'Fulfilled' : 'Claim'" :color="state === 'ended' ? 'secondary' : 'primary'" :disabled="state === 'locked' || state === 'ended'" @click.native="$emit('end-unbonding')")
  template(v-if="endUnbonding")
    div(slot="caption")
      | Ended Unbonding&nbsp;
    div(slot="details")
      | From&nbsp;
      router-link(:to="this.validatorURL + '/' + tx.validator_addr") {{moniker(tx.validator_addr)}}
</template>

<script>
import TmLiTransaction from "../TmLiTransaction/TmLiTransaction"
import colors from "../TmLiTransaction/tranaction-colors.js"
import moment from "moment"
import TmBtn from "../TmBtn/TmBtn.vue"

/*
* undelegation tx need a preprocessing, where shares are translated into tx.undelegation: {amount, denom}
*/

export default {
  name: "tm-li-stake-transaction",
  components: { TmLiTransaction, TmBtn },
  computed: {
    tx() {
      return this.transaction.tx.value.msg[0].value
    },
    type() {
      return this.transaction.tx.value.msg[0].type
    },
    delegation() {
      return this.type === "cosmos-sdk/MsgDelegate"
    },
    unbonding() {
      return this.type === "cosmos-sdk/BeginUnbonding"
    },
    endUnbonding() {
      return this.type === "cosmos-sdk/CompleteUnbonding"
    },
    timeDiff() {
      return this.transaction.time
        ? moment(
            moment(this.transaction.time).valueOf() +
              parseInt(this.unbonding_time)
          ).fromNow()
        : ""
    },
    // state needs to be calculated by a wrapping application
    // unbonding requires state to be 'locked', 'ready', 'ended'
    state() {
      return this.transaction.state
    },
    color() {
      if (this.delegation) return colors.stake.bonded
      if (this.unbonding) return colors.stake.unbonded
      if (this.endUnbonding) return colors.stake.unbonded
    }
  },
  methods: {
    moniker(candidateAddr) {
      let validator = this.validators.find(c => c.owner === candidateAddr)
      return (validator && validator.description.moniker) || candidateAddr
    }
  },
  props: {
    transaction: Object,
    validators: Array,
    validatorURL: {
      type: String,
      default: ""
    },
    unbonding_time: String
  }
}
</script>

<style lang="stylus">
@require '~variables'

.tm-li-tx
  display flex
  font-size sm

  .tx-icon
    padding 0 0.5rem
    background var(--app-fg)
    display flex
    align-items center
    justify-content center

  .tx-container
    flex-direction column
    flex-wrap nowrap
    padding 0.5rem 0
    margin 0.5rem 0
    display flex
    width 100%
    min-width 0 // fix text-overflow

  .tx-element
    padding 0 2rem 0 1.5rem
    line-height 1.5rem

  .tx-coin
    .value
      flex 0 0 100%
      font-size sm
      color var(--dim)

      &:before
        content ''
        display inline

    .key
      font-weight 500
      font-size m

    .value, .key
      line-height 1.5rem

  .tx-address
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    color var(--dim)
    font-size sm

  &.tm-li-tx-sent
    .tx-coin .value
      &:before
        content '-'

  &.tm-li-tx-received
    .tx-icon
      background var(--app-fg)

    .tx-coin .value
      color success

      &:before
        content '+'

  &:hover
    cursor pointer

@media screen and (min-width: 700px)
  .tm-li-tx
    font-size 0.875rem

    .tx-container
      flex-direction row

      .tx-coins
        flex 0 0 9rem
        padding 0
        min-width 0

        .tx-coin
          padding 0 1.5rem 0

          .key
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
</style>
