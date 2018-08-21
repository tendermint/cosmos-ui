<template lang='pug'>
.tm-li-tx
  .tm-li-tx__icon
    img(src="../../assets/cosmos-logo.png" :style="{ borderColor: color }")
  .tm-li-tx__content
    p.tm-li-tx__content__caption
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
      return moment(this.time).format("h:mm a")
    }
  },
  props: ["color", "time", "block"]
}
</script>

<style lang="stylus">
@require '~variables'

.tm-li-tx
  display flex
  align-items center
  height 100%
  font-size m
  margin-bottom 0.5rem
  border 1px solid var(--bc-dim)
  background var(--app-fg)

  &:hover
    background var(--hover-bg)

  b
    font-weight 500

  &__icon
    padding 12px 0 12px 1rem

    img
      max-height 100%
      max-width 52px
      border 2px solid
      border-radius 50%
      display block

  &__content
    display flex
    flex-direction column
    width 100%
    padding 1rem
    font-size m

    &__caption
      font-size lg
      line-height lg
      color var(--bright)

    &__information
      display flex
      width 100%
      font-size 14px
      color var(--dim)
      align-items baseline

      &__details
        padding-top 3px

      &__block
        margin-left auto
</style>
