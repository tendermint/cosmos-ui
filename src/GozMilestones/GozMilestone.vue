<template>
  <div>
    <div class="row">
      <component :is="`icon-${logo}`" class="icon"/>
      <div class="details">
        <div class="title">
          <div class="h1">{{title}}</div>
          <div class="h2">{{repo}}</div>
        </div>
        <div class="indicator">
          <div class="progress"></div>
          <div class="h3">{{progress}}% complete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  color: white;
  font-family: var(--ds-font-family, sans-serif);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content 1fr;
}
.icon {
  width: 4rem;
  height: 4rem;
  fill: white;
  opacity: .32;
  padding: 1.5rem 3rem;
}
.details {
  margin-left: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.h1 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 28px;
  letter-spacing: -0.01em;
}
.h2 {
  line-height: 24px;
  color: rgba(255, 255, 255, 0.51);
}
.h3 {
  font-size: .875rem;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
}
</style>

<script>
import IconSdk from "./IconSdk"
import IconIbc from "./IconIbc"

export default {
  components: {
    IconSdk,
    IconIbc
  },
  props: {
    logo: {
      type: String,
      default: "sdk"
    },
    title: {
      type: String,
      default: "Title"
    },
    repo: {
      type: String,
      default: "Subtitle"
    },
    progress: {
      type: String,
      default: "0"
    }
  },
}
</script>