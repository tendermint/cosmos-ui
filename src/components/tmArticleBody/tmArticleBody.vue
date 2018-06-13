<template>
  <div class="tm-article-body">
    <div class="tm-article-body-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-article-body",
  props: ["content"]
}
</script>

<style lang="stylus">
@require '~@/styles/variables.styl'

.tm-article-body
  background app-bg
  hr
    border none
    border-top 1px solid bc
    background transparent
    height 0
    margin 0
    padding 0

  a
    color link
    overflow-wrap break-word
    word-wrap break-word
    -ms-word-break break-all
    word-break break-all
    word-break break-word
    &:hover
      text-decoration underline

  strong
    font-weight bold

  em
    font-style italic

  code
    font-family mono
    margin-bottom 1.5rem
    font-size 0.875rem
    background app-fg
    font-weight bold
    padding 0 0.25rem
    overflow-wrap break-word
    word-wrap break-word
    -ms-word-break break-all
    word-break break-all
    word-break break-word
  pre
    margin-left -1rem
    margin-right -1rem
    overflow-x scroll
    padding 0.375rem 0.5rem
    line-height 1.125
    background app-fg
    color txt
    & + figcaption
      font-size 0.875rem
      margin-top -1.5rem
      background app-fg
      border 1px solid #eee
      border-top none
      padding 0.5rem
      color txt
      margin-bottom 1.5rem
    code
      margin-bottom 0
      font-weight normal
      background app-fg
      color txt
      padding 0
  p
    &:empty
      display none
    img
      margin-bottom 0
  .youtube
    display block
    margin-bottom 1.5em
  .left
    float left !important
    padding-right 2.5em !important
  .right
    float right !important
    padding-left 2.5em !important
  img
    max-width 100%
  h1
    margin-top 1.5rem
  ul
    li
      list-style square
      margin-bottom 0.25em
  ol
    li
      list-style decimal
  table
    border 1px solid #ddd
    border-collapse collapse
    width 100%
    th
      font-weight 600
      background app-fg
      color dim
  blockquote
    padding 0.75rem 1rem
    background app-fg
    position relative
    color txt
    & + h2
      margin-top 1.5rem

.tm-article-body-container
  max-width 48rem
  padding 1rem
  margin-left auto
  margin-right auto
  font-family sans
  font-size 1rem
  line-height 1.5
  font-weight 400
  color txt

.tm-article-body p,
.tm-article-body hr,
.tm-article-body ul,
.tm-article-body ol,
.tm-article-body table,
.tm-article-body pre,
.tm-article-body figcaption,
.tm-article-body blockquote,
.tm-article-body img,
.tm-article-body .btn
  margin-bottom 1.5em

.tm-article-body p code:before,
.tm-article-body p code:after
  letter-spacing -0.375em
  content "\00a0"

.tm-article-body .left,
.tm-article-body .right
  margin-bottom 2.5em !important

.tm-article-body h1,
.tm-article-body h2,
.tm-article-body h3,
.tm-article-body h4,
.tm-article-body h5,
.tm-article-body h6
  position relative
  line-height 1.05
  margin 1.5rem 0 0.75rem

.tm-article-body h1:first-child,
.tm-article-body h2:first-child,
.tm-article-body h3:first-child,
.tm-article-body h4:first-child,
.tm-article-body h5:first-child,
.tm-article-body h6:first-child
  margin-top 0

.tm-article-body ul,
.tm-article-body ol
  padding-left 1.5em

.tm-article-body ul ul,
.tm-article-body ul ol,
.tm-article-body ol ul,
.tm-article-body ol ol
  margin-bottom 0
  padding-top 0.25em

.tm-article-body li p + ul,
.tm-article-body li p + ol
  margin-top -1.5em

.tm-article-body li p + ul:last-child,
.tm-article-body li p + ol:last-child
  margin-bottom 1.5em

.tm-article-body table td,
.tm-article-body table th
  border 1px solid #e0e0e0
  padding 0.25em 0.5em

.tm-article-body blockquote p,
.tm-article-body blockquote ul,
.tm-article-body blockquote ol
  margin-bottom 0.75rem

.tm-article-body blockquote p:last-child,
.tm-article-body blockquote ul:last-child,
.tm-article-body blockquote ol:last-child
  margin-bottom 0

@media screen and (min-width: 360px)
  .tm-article-body-container
    padding 1.125rem
  .tm-article-body
    pre
      margin-left -1.125rem
      margin-right -1.125rem

@media screen and (min-width: 414px)
  .tm-article-body-container
    padding 1.25rem
  .tm-article-body
    pre
      margin-left -1.25rem
      margin-right -1.25rem

@media screen and (min-width: 540px)
  .tm-article-body-container
    padding 1.5rem
  .tm-article-body
    pre
      margin-left -1.5rem
      margin-right -1.5rem

@media screen and (min-width: 768px)
  .tm-article-body-container
    padding 3rem 3rem 1.5rem
  .tm-article-body
    pre
      margin-left 0
      margin-right 0
    iframe
      &.iframe-video
        max-width 48rem
        max-height 27rem

@media screen and (min-width: 768px)
  .tm-article-body h1,
  .tm-article-body h2,
  .tm-article-body h3,
  .tm-article-body h4,
  .tm-article-body h5,
  .tm-article-body h6
    margin 3rem 0 1.5rem
</style>
