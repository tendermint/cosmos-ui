<template lang='pug'>
tm-li-bank-transaction(v-if="bankTx" :transaction="transaction" :address="address")
tm-li-stake-transaction(v-else-if="stakingTx" :transaction="transaction" :candidates="candidates" :validatorURL="validatorURL")
tm-li-transaction(v-else :color="grey" :time="transaction.time" :block="transaction.height")
  span(slot="caption") Unknown Transaction Type
</template>

<script>
import TmLiBankTransaction from "../TmLiBankTransaction/TmLiBankTransaction"
import TmLiStakeTransaction from "../TmLiStakeTransaction/TmLiStakeTransaction"
import TmLiTransaction from "../TmLiTransaction/TmLiTransaction"

export default {
  name: "tm-li-any-transaction",
  components: { TmLiBankTransaction, TmLiStakeTransaction, TmLiTransaction },
  computed: {
    type() {
      return this.transaction.tx.value.msg[0].type
    },
    bankTx() {
      return ["cosmos-sdk/Send"].indexOf(this.type) !== -1
    },
    stakingTx() {
      return (
        ["cosmos-sdk/MsgDelegate", "cosmos-sdk/MsgDelegate"].indexOf(
          this.type
        ) !== -1
      )
    }
  },
  props: {
    transaction: Object,
    address: String,
    candidates: Array,
    validatorURL: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="stylus">
</style>
