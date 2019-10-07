<template>
  <div style="display: inline-block; position: relative;">
    <button class="term" tabindex="0" @click="select">
      <slot></slot>
    </button>
    <div class="tooltip" ref="tooltip" tabindex="1" v-html="definition"></div>
  </div>
</template>

<style scoped>
button {
  background: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  padding: 0;
}

.term {
  cursor: pointer;
}

.term:active {
  outline: none;
}

.tooltip {
  min-width: 300px;
  position: absolute;
  left: 0;
  background: white;
  font-size: 0.75rem;
  line-height: 1.5;
  padding: 0.75em 1em;
  box-shadow: 0 0.25em 1.5em rgba(0, 0, 0, 0.15);
  border-radius: 0.5em;
  opacity: 0;
  pointer-events: none;
  outline: none;
  transition: all 0.1s ease-in;
  transform: translateY(-1em);
}

.tooltip:focus {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}
</style>

<script>
import dict from "./dict.json";
import MarkdownIt from "markdown-it";

export default {
  props: {
    value: {
      type: String
    }
  },
  computed: {
    definition() {
      return new MarkdownIt().render(dict[this.value]);
    }
  },
  methods: {
    select() {
      this.$refs.tooltip.focus();
    }
  }
};
</script>