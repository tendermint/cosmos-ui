<template lang="pug">
.tm-tool-bar
  .tm-tool-bar-container
    .main: slot
</template>

<script>
export default {
  name: "tm-tool-bar"
}
</script>

<style lang="stylus">
@require '~variables'

.tm-tool-bar-container
  display flex

  .main
    flex 1
    display flex
    align-items center

  a, i.material-icons
    display flex
    align-items center
    justify-content center

  a
    padding 1rem

    user-select none
    cursor pointer

    display flex
    align-items center
    justify-content center
    position relative

    i
      color var(--txt)

    i
      font-size lg

    &.router-link-active
      i
        color var(--bright)

    &:hover:not([disabled])
      background var(--app-fg)
      i
        color var(--bright)

    &[disabled]
      cursor default
      i
        color var(--dim)

@media screen and (max-width: 1023px)
  .tm-tool-bar
    z-index z(toolBar)
    position fixed
    bottom 0
    left 0
    right 0

  .tm-tool-bar-container
    background var(--app-bg-alpha)
    height 3rem + px
    border-top px solid var(--bc)

  .tm-page
    padding-bottom 3rem

@media screen and (min-width: 1024px)
  .tm-tool-bar-container
    .main
      justify-content flex-end
    a
      margin-top 0.7rem
</style>
