<template>
  <div>
    <button @click="visible = !visible">Open sidebar</button>
    <modal-sheet v-bind="{visible, ...modalProps}" v-if="visible" @visible="visible = $event">
      <section-search :query="query" @query="query = $event" :site="site"/>
    </modal-sheet>
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue"
import SectionSearch from "./SectionSearch.vue"
import { default as site } from "./site.js"

export default {
  components: {
    SectionSearch,
    "modal-sheet": Modal
  },
  data: function() {
    return {
      visible: false,
      query: null,
      modalProps: {
        backgroundColor: 'transparent',
        boxShadow: '0 0 50px rgba(0,0,0,.1)',
        side: "left",
        maxWidth: "400px",
        width: "100%"
      },
      site
    }
  }
}
</script>