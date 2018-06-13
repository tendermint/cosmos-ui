<template>
  <div class="tm-kv">
    <div class="tm-kv-container">
      <div class="tm-kv-value"><slot name="value"></slot></div>
      <div class="tm-kv-key"><slot name="key"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-kv"
}
</script>

<style lang="stylus">

.tm-kv
  display flex
  flex-flow column no-wrap
  align-items center
  justify-content center
  padding 1rem

.tm-kv-value
.tm-kv-key
  display flex
  justify-content center

.tm-kv-value
  font-size 1.25rem
  line-height 1
  margin-bottom 0.75rem
  font-weight 400

.tm-kv-key
  color #999
  font-size 0.75rem
  font-weight 400
  line-height 1

@media screen and (min-width: 414px)
  .tm-kv
    padding 0.75rem 1rem

@media screen and (min-width: 768px)
  .tm-kv
    padding 1.5rem
    
  .tm-kv-value
    font-size 1.5rem
    margin-bottom 1rem

  .tm-kv-key
    font-size 1rem
    font-weight 300
</style>
