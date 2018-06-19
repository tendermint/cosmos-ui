<template lang="pug">
.tm-tab-bar
  .tm-tab-bar-container: slot
</template>

<script>
export default { name: "tm-tab-bar" }
</script>

<style lang="stylus">
@require '~variables'

.tm-tab-bar-container
  display flex
  align-items center

  background var(--app-fg)
  border-bottom px solid var(--bc)

  a
    height 2rem - px
    display block
    padding 0 1rem

    display flex
    align-items center
    justify-content center

    border-right px solid var(--bc)

    font-size sm
    color var(--link)

    &:last-of-type
      border-right none

    &.router-link-active
      color var(--bright)
      background var(--app-bg)

    i.material-icons
      font-size xl
</style>
