<template>
  <div :class="cssClass">
    <div class="tm-module-container">
      <slot name="overlay"></slot>
      <header class="tm-module-header">
        <div class="tm-module-title"><slot name="title"></slot></div>
        <div class="tm-module-menu"><slot name="menu"></slot></div>
      </header>
      <main class="tm-module-main">
        <slot></slot>
      </main>
      <footer class="tm-module-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cssClass() {
      let base = "tm-module"
      if (this.size) base += " tm-module-" + this.size
      return base
    }
  },
  props: ["size"]
}
</script>

<style lang="stylus">
.tm-module
  padding 0.25rem
  display flex

.tm-module-container
  flex 1
  background #fff
  box-shadow hsla(0,0,0,0.1) 0 1px 3px
  position relative

.tm-module-header
  display flex
  align-items center
  border-bottom 1px solid hsl(0,0,95%)
  height 2rem

.tm-module-footer
  > div
    display flex
    justify-content center
    align-items center

    padding 0 1rem
    border-top 1px solid hsl(0,0,95%)
    height 2rem
    background hsl(0,0%,98%)
    font-size 0.75rem
    color #666


.tm-module-title
  flex 1
  font-size 0.875rem
  padding 0 0.75rem
  font-weight 500

  white-space nowrap
  text-overflow ellipsis
  overflow hidden
  color #000

.tm-module-menu
  display flex
  padding 0 0.5rem

  .pb-label
    color #666
  a
    font-size 0.75rem
    padding 0 0.25rem
    cursor pointer
    color hsl(208,100%,45%)

.tm-module-main
  flex 1
  min-height 4.75rem
  .tm-kvs
    padding 0 !important

@media screen and (min-width: 768px)
  .tm-module-main
    font-size 1rem
    min-height 6.5rem
</style>
