<template>
  <div>
    <div class="row">
      <component :is="`icon-${logo}`" class="icon"/>
      <div class="details">
        <div class="title">
          <div class="h1">{{title}}</div>
          <div class="h2">{{repo}}</div>
        </div>
        <div class="indicator" v-if="progress">
          <div class="progress" :style="{'--progress-bar-width': `${progress}%`}">
            <div class="progress__bar"></div>
          </div>
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
  grid-column-start: 1;
  width: 4rem;
  height: 4rem;
  fill: white;
  opacity: .32;
  padding: 1.5rem 3rem;
}
.details {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  grid-column-start: 2;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;
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
.indicator {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.progress {
  position: relative;
  height: .25rem;
  width: 7rem;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: .75rem;
  border-radius: .5rem;
}
.progress__bar {
  height: 100%;
  width: var(--progress-bar-width, 0);
  background: #5BC75B;
  border-radius: inherit;
}
@media screen and (max-width: 500px) {
  .icon {
    display: none;
  }
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
      type: [String, Number],
      default: "0"
    }
  },
}
</script>