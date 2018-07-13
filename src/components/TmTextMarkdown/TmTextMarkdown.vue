<template lang="pug">
.tm-text-markdown(v-html="markdown(text)")
</template>

<script>
import { Base64 } from "js-base64"
import axios from "axios"
import MarkdownIt from "markdown-it"
import MarkdownItAnchor from "markdown-it-anchor"
// import scrollTo from "scroll-to"
export default {
  name: "tm-text-markdown",
  data: () => ({
    text: "## Loading...\nLoading..."
  }),
  watch: {
    url() {
      this.query()
    }
  },
  methods: {
    async query() {
      if (!this.url) return
      try {
        let response = await axios.get(this.url)
        this.text = Base64.decode(response.data.content)
      } catch (error) {
        // console.error(error)
      }
    },
    markdown(text) {
      let md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      }).use(MarkdownItAnchor)
      return md.render(text)
    } /* ,
    scrollToIt(e) {
      e.preventDefault()

      let scrollSpeed = 666
      let el = document.querySelector(e.target.getAttribute("href"))
      let y

      if (el.id === "#page-top") {
        y = 0
      } else {
        y = el.offsetTop - 48 - 16
      }

      scrollTo(0, y, { duration: scrollSpeed })
    }*/
  },
  mounted() {
    this.query()
    /*
    await this.$nextTick()
    let inlineLinks = this.$el.querySelectorAll("[href^='#']")
    Array.from(inlineLinks).forEach(link => {
      link.addEventListener("click", event => this.scrollToIt(event))
    })
    */
  },
  props: ["url"]
}
</script>

<style lang="stylus">
.tm-text-markdown
  h1:first-child
    display none
  h2:nth-child(2)
    margin-top 0
</style>
