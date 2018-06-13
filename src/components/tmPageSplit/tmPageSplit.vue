<template>
  <div class="tm-page-split">
    <div class="tm-page-split-header">
      <slot name="header"></slot>
    </div>
    <div class="tm-page-split-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-page-split"
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.tm-page-split
   min-height 75vh
   display flex
   flex-flow column nowrap

.tm-page-split-main
   flex 1
   background app-bg

@media screen and (min-width: 1024px)
   .tm-page-split
      flex-flow row nowrap
      align-items stretch
   .tm-page-split-header
      flex 0 0 33.3vw
      margin-bottom 0
      border-bottom none
   .tm-page-split-main
      flex 0 0 66.7vw

@media screen and (min-width: 1280px)
   .tm-page-split-header
      flex 0 0 25vw
   .tm-page-split-main
      flex 0 0 75vw
</style>
