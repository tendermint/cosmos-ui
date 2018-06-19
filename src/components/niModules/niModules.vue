<template>
  <div class="tm-modules">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tm-modules"
}
</script>

<style lang="stylus">
.tm-modules
  max-width 1024px
  margin 0 auto
  padding 0.25rem

  .tm-module
    flex 1 1 100%
    padding 0.25rem

  display flex
  flex-flow row wrap

@media screen and (min-width: 768px)
  .tm-modules
    padding 0.333rem

    .tm-module
      padding 0.333rem

      &.tm-module-sm
        flex 1 1 50%

@media screen and (min-width: 1024px)
  .tm-modules
    padding 0.375rem

    .tm-module
      padding 0.375rem
</style>
