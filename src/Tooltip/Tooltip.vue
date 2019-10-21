<template>
  <div style="display: inline-block; position: relative;" ref="container">
    <button class="term" tabindex="0" @click="select" ref="term">
      <slot></slot>
    </button>
    <div class="tooltip" ref="tooltip" :style="[...getPosition]" tabindex="1" v-html="definition" @focus="setPosition($event)"></div>
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
  z-index: 1000000;
  box-sizing: border-box;
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
  data: function() {
    return {
      left: true
    };
  },
  mounted() {
    window.addEventListener("resize", this.setPosition);
    this.setPosition();
  },
  computed: {
    definition() {
      return new MarkdownIt().render(dict[this.value]);
    },
    getPosition() {
      return {
        left: this.left ? 0 : "initial",
        right: !this.left ? 0 : "initial"
      };
    }
  },
  methods: {
    select() {
      this.$refs.tooltip.focus();
    },
    setPosition(e) {
      const screenWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      const elementX = this.$refs.container.getBoundingClientRect().left;
      this.left = !(elementX + 300 > screenWidth);
    }
  }
};
</script>