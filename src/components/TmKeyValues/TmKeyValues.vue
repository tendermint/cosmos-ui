<template>
  <div class="tm-kvs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tm-kvs"
}
</script>

<style lang="stylus">

.tm-kvs
  display flex
  flex-flow column
  justify-content center

  padding 0.5rem 0
  background #fff

  .tm-kv
    flex 1

@media screen and (min-width: 414px)
  .tm-kvs
    padding 0.75rem 0

@media screen and (min-width: 768px)
  .tm-kvs
    padding 1rem 0
</style>
