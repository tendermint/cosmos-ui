<template>
  <modal-sheet :visible="true">

  </modal-sheet>
</template>

<script>
import Modal from "../Modal/Modal.vue"
import SectionSearch from "./SectionSearch.vue"

export default {
  components: {
    SectionSearch,
    "modal-sheet": Modal
  }
}
</script>