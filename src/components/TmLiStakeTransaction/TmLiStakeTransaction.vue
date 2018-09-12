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
        b {{transaction.balance.amount}}
        span &nbsp;{{transaction.balance.denom.toUpperCase()}}S
      template(v-else)
        b {{tx.shares_amount}}
        span &nbsp;Shares
      template(v-if="timeDiff")
        span &nbsp;- {{timeDiff}}
    div(slot="details")
      | From&nbsp;
      router-link(:to="this.validatorURL + '/' + tx.validator_addr") {{moniker(tx.validator_addr)}}
    div(slot="action")
      tm-btn(v-if="state !== 'ended'" value="Claim" color="primary" :disabled="state === 'locked'" @click.native="$emit('end-unbonding')")
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
* undelegation tx need a preprocessing, where shares are translated into transaction.balance: {amount, denom}
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
      // only show time diff if still waiting to be terminated
      if (this.state !== "locked") return ""

      return this.transaction.unbondingDelegation
        ? moment(this.transaction.unbondingDelegation.min_time).toNow()
        : ""
    },
    // state needs to be calculated by a wrapping application
    // unbonding requires state to be 'locked', 'ready', 'ended'
    state() {
      if (!this.transaction.unbondingDelegation) return "ended"
      if (
        moment(this.transaction.unbondingDelegation.min_time).valueOf() -
          moment().valueOf() <=
        0
      )
        return "ready"
      return "locked"
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
    }
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
