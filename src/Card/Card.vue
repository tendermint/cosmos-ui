<template>
  <div>
    <div class="card" :style="cardStyle">
      <div v-if="overline" class="overline">
        {{overline}}
      </div>
      <div v-if="title" class="title">
        {{title}}
      </div>
      <div class="body">
        <slot/>
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
  box-shadow: var(--ds-elevation-6);
}
.title {
  font-size: var(--card-title-font-size, 1rem);
  font-weight: 500;
  line-height: var(--card-title-line-height, 1.5em);
  color: #161931;
}
.overline {
  font-size: .75rem;
  text-transform: uppercase;
  color: #67697a;
  letter-spacing: 0.2em;
}
.body {
  color: rgba(22, 25, 49, 0.65);
  font-size: var(--card-body-font-size, 14px);
  line-height: var(--card-body-line-height, 1.5em);
  letter-spacing: 0.01em;
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
        "--card-body-font-size": size <= 18 ? "13px" : "14px",
        "--card-body-line-height": size <= 18 ? "18px" : "20px"
      }
    }
  }
}
</script>