<template lang="pug">
.tm-cookie-consent
</template>

<script>
// eslint-disable-next-line
require("cookieconsent")
export default {
  name: "tm-cookie-consent",
  methods: {
    initCookieConsent() {
      window.cookieconsent.initialise({
        theme: "edgeless"
      })
    }
  },
  mounted() {
    window.addEventListener("load", () => this.initCookieConsent())
  }
}
</script>

<style lang="stylus">
@import '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css'
@import '~variables'

.cc-window
  font-family sans
  background var(--app-fg)
  background app-fg

.cc-message
  color var(--txt)
  color txt

.cc-btn
  color var(--bright)
  color bright
  border-color var(--link)
  border-color link
  background var(--link)
  background link
  font-size 1rem
  font-weight 500
</style>
