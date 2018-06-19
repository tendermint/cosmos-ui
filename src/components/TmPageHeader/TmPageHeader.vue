<template>
<header class="tm-page-header" :class="headerClass">
  <div class="tm-page-header-container">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle" v-if="subtitle" v-html="subtitle"></p>
    <slot></slot>
  </div>
</header>
</template>

<script>
export default {
  name: "tm-page-header",
  computed: {
    headerClass() {
      let v = ""
      switch (this.type) {
        case "center":
          v += "tm-page-header-center"
          break
        case "split":
          v += "tm-page-header-split"
          break
        default:
          v += "tm-page-header-default"
      }
      if (this.theme === "tendermint") {
        v += " tm-page-header-theme-tendermint"
      }
      return v
    }
  },
  props: ["title", "subtitle", "type", "theme"]
}
</script>

<style lang="stylus">
@require '~variables'

.tm-page-header
  position relative
  border-bottom 1px dotted bc

  .tm-page-header-container
    padding 1.25rem
    max-width 48rem
    display flex
    flex-flow column nowrap

  .title
    font-size 2em
    line-height 1
    color bright
    font-weight 600

  .subtitle
    color dim
    margin-top 0.75em
    font-size 1em
    font-weight 400
    line-height 1.25

    strong
      font-weight 500

  &.tm-page-header-default
    .tm-page-header-container
      align-items flex-start

  &.tm-page-header-center
    .tm-page-header-container
      align-items center
      justify-content center
      align-content center
      text-align center

  &.tm-page-header-theme-tendermint
    background hsl(210, 70%, 13%)
    .title
      color hsl(210, 70%, 90%)
    .subtitle
      color hsl(210, 70%, 50%)
      strong
        font-weight 500
        color hsl(210, 70%, 60%)
      a
        color hsl(210, 70%, 70%)
        border-bottom-color hsl(210, 70%, 50%)
        &:hover
          color #fff

@media screen and (min-width: 360px)
  .tm-page-header
    .tm-page-header-container
      padding 1.5rem

@media screen and (min-width: 768px)
  .tm-page-header
    .tm-page-header-container
      padding 3rem

@media screen and (min-width: 1024px)
  .tm-page-header
    &.tm-page-header-split
      border-bottom none
      .tm-page-header-container
        padding 3em
        text-align left
      .title
        font-size 2rem
      .subtitle
        font-size 1rem
        letter-spacing 0.02em
