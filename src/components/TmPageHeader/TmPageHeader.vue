<template lang='pug'>
header.tm-page-header
  .tm-page-header-container
    .tm-page-header-text
      .tm-page-header-title
        slot(name='title')
      .tm-page-header-subtitle
        slot(name='subtitle')
    menu.tm-page-header-menu
      slot(name="menu")
</template>

<script>
export default { name: "tm-page-header" }
</script>

<style lang="stylus">
@require '~variables'

.tm-page-header
  -webkit-app-region drag

.tm-page-header-title
  font-size xl
  > div
    display inline-block

.tm-page-header-container
  min-height 4.22rem
  border-bottom px solid var(--bc)
  display flex

.tm-page-header-text
  flex 1
  display flex
  min-width 0 // fix truncation
  padding 11px 0 0 1rem
  align-items: center

  i.material-icons
    font-size 1.375 * x
    padding-right 0.375rem

  > div
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

  h2
    font-size xl
    font-weight 500
    color var(--bright)

@media screen and (min-width: 1024px)
  .tm-page-header
    border-bottom-color var(--bc)

  .tm-page-header-container
    display flex

  .tm-page-header-menu
    display flex
    align-items center
</style>
