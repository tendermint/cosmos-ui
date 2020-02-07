<template>
  <div>
    <div class="card" :style="cardStyle">
      <div v-if="overline" class="overline">
        {{overline}}
      </div>
      <div v-if="title" class="title">
        {{title}}
      </div>
      <div :class="['body', `body__truncate__${!!(shouldTruncate)}`]" ref="body">
        <slot/>
        <div class="body__more" @click="expand" v-if="shouldTruncate">read more</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: block;
  padding: calc(var(--card-size) - 4px) var(--card-size);
  font-family: var(--ds-font-family, sans-serif);
  border-radius: 0.5rem;
  position: relative;
  background: white;
}
.card:before {
  border-radius: 0.5rem;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  box-shadow: var(--ds-elevation-2);
}
.title {
  font-size: var(--card-title-font-size, 1rem);
  font-weight: 500;
  line-height: var(--card-title-line-height, 1.5em);
  color: #161931;
  margin-bottom: var(--card-title-margin-bottom, .25em);
}
.overline {
  font-size: .75rem;
  text-transform: uppercase;
  color: #67697a;
  letter-spacing: 0.2em;
  margin-bottom: .3em;
}
.body {
  color: rgba(22, 25, 49, 0.65);
  font-size: var(--card-body-font-size, 14px);
  line-height: var(--card-body-line-height, 1.5em);
  letter-spacing: 0.01em;
  overflow: hidden;
  position: relative;
  transition: max-height cubic-bezier(0.785, 0.135, 0.15, 0.86) .5s;
}
.body__truncate__true {
  max-height: calc(var(--card-body-max-height));
}
.body__more {
  position: absolute;
  bottom: 0;
  right: 0;
  background: white;
  color: var(--ds-color-primary, blue);
  cursor: pointer;
}
.body__more::before {
  content: "";
  background-image: linear-gradient(to right, rgba(0,0,0,0), white 80%);
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  top: 0;
}
</style>

<script>
export default {
  props: {
    overline: {
      type: String,
      default: "Overline"
    },
    title: {
      type: String,
      default: "Title"
    },
    size: {
      type: String,
      default: "16px"
    },
  },
  data: function() {
    return {
      bodyHeight: null,
      lineHeight: null,
      shouldTruncate: null,
      maxHeight: null,
      bodyCollapsed: null
    }
  },
  mounted() {
    this.bodyHeight = this.$refs.body.getBoundingClientRect().height
    this.lineHeight = parseInt(getComputedStyle(this.$refs.body)['line-height'])
    this.shouldTruncate = this.bodyHeight >= 4 * this.lineHeight
    this.maxHeight = this.lineHeight * 3
  },
  methods: {
    expand() {
      this.maxHeight = this.bodyHeight
    }
  },
  computed: {
    cardStyle() {
      const keywords = {
        "small": "16px",
        "medium": "24px",
        "large": "32px"
      }
      const size = parseInt(keywords[this.size] || this.size)
      return {
        "--card-size": size + 'px',
        "--card-title-font-size": size <= 18 ? "16px" : "20px",
        "--card-title-line-height": size <= 18 ? "24px" : "28px",
        "--card-title-margin-bottom": size <= 18 && "4px" || size <= 24 && "8px" || "12px",
        "--card-body-font-size": size <= 18 ? "13px" : "14px",
        "--card-body-line-height": size <= 18 ? "18px" : "20px",
        "--card-body-line-height-actual": this.lineHeight + 'px',
        "--card-body-max-height": this.maxHeight + 'px'
      }
    }
  }
}
</script>