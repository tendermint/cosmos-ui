<template lang="pug">
.tm-modal-error__wrapper
  .tm-modal-error
    .tm-modal-error__icon: i.material-icons {{ errorIcon }}
    .tm-modal-error__title {{ errorTitle }}
    .tm-modal-error__body {{ errorBody }}
    .tm-modal-error__footer
      tm-btn.tm-modal-error__btn(
        size="lg"
        :icon="errorBtnIcon"
        color="primary"
        :value="errorBtnValue"
        type="anchor"
        :href="errorBtnUrl")
</template>

<script>
import TmBtn from "../TmBtn/TmBtn.vue"
export default {
  name: "tm-modal-error",
  components: { TmBtn },
  computed: {
    errorIcon() {
      if (this.icon) return this.icon
      else return "error_outline"
    },
    errorTitle() {
      if (this.title) return this.title
      else return "This application ran into an error"
    },
    errorBody() {
      if (this.body) return this.body
      else return "This application has encountered a critical error."
    },
    errorBtnIcon() {
      if (this.btnIcon) return this.btnIcon
      else return "bug_report"
    },
    errorBtnValue() {
      if (this.btnValue) return this.btnValue
      else return "Community Chat"
    },
    errorBtnUrl() {
      if (this.btnValue) return this.btnUrl
      else return "https://riot.im/app/#/room/#cosmos:matrix.org"
    }
  },
  props: ["icon", "title", "body", "btn-icon", "btn-value", "btn-url"]
}
</script>

<style lang="stylus">
@import '~variables'

.tm-modal-error__wrapper
  position absolute
  top 0
  left 0

  z-index z(modalError)
  background var(--app-bg)
  width 100vw
  height 100vh
  max-width 100%

  display flex
  align-items center
  justify-content center

.tm-modal-error
  padding 1.5rem
  max-width 40rem

.tm-modal-error__icon
  position fixed
  top 0
  left 0
  z-index z(below)
  i.material-icons
    font-size 25vw + 25vh
    line-height 1
    color var(--bc-dim)

.tm-modal-error__title
  font-size h1
  font-weight 500
  line-height 1
  margin-bottom 1.5rem

.tm-modal-error__body
  font-size lg
  color var(--dim)
  margin-bottom 3rem

.tm-modal-error__footer
  .tm-btn
    width 100%
    margin-right 1.5rem
    margin-bottom 1rem
    max-width 14rem
    &:last-child
      margin-bottom 0

@media screen and (min-width: 768px)
  .tm-modal-error__icon i.material-icons
    font-size 20vw + 20vh

  .tm-modal-error__body
    margin-bottom 4.5rem

  .tm-modal-error__footer
    min-width: 31rem

  .tm-modal-error__footer .tm-btn
      margin-bottom 0
</style>
