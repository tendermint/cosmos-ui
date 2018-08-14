<template lang='pug'>
.tm-li-tx
  .tm-li-tx__icon
    img(src="~assets/cosmos-logo.png" :style="{ borderColor: color }")
  .tm-li-tx__content
    h1.tm-li-tx__content__caption
      slot(name="caption")
    .tm-li-tx__content__information
      .tm-li-tx__content__information__details
        slot(name="details")
      .tm-li-tx__content__information__block
        a(:href="'https://explorecosmos.network/blocks/' + block") Block \#{{block}}&nbsp;
        | @ {{date}}
</template>

<script>
import moment from "moment"

export default {
  name: "tm-li-transaction",
  computed: {
    date() {
      return moment(this.time).format("H:mm")
    }
  },
  props: ["color", "time", "block"]
}
</script>

<style lang="stylus">
@require '~variables'

.tm-li-tx
  display flex
  font-size sm
  border 1px solid var(--bc)
  height 4rem
  margin-bottom 1rem
  background var(--app-bg) !important

  &__icon
    padding 0.3rem 0.3rem 0.3rem 0.8rem

    img
      max-height 100%
      border 1px solid
      border-radius 50%

  &__content
    display flex
    flex-direction column
    width 100%
    padding 0.7rem 0.5rem
    font-size sm

    &__caption
      font-size m
      line-height m
      margin-bottom 9px

    &__information
      display flex
      width 100%

      *
        display inline-block

      &__block
        margin-left auto
        margin-right 1rem
</style>
