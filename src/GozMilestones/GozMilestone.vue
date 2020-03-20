<template>
  <div>
    <div class="container">
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
  </div>
</template>

<style scoped>
.container {
  margin-left: 2rem;
  margin-right: 2rem;
  overflow-wrap: anywhere;
}
.row {
  color: var(--white-100);
  font-family: var(--ds-font-family, sans-serif);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content 1fr;
}
.icon {
  grid-column-start: 1;
  width: 4rem;
  height: 4rem;
  fill: var(--white-100);
  opacity: .32;
  padding: 1.5rem 3rem;
}
.details {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  grid-column-start: 2;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--white-10);
}
.h1 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 28px;
  letter-spacing: -0.01em;
}
.h2 {
  line-height: 24px;
  color: var(--white-51);
}
.h3 {
  font-size: .875rem;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: var(--white-80);
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
  background: var(--white-20);
  margin-bottom: .75rem;
  border-radius: .5rem;
}
.progress__bar {
  height: 100%;
  width: var(--progress-bar-width, 0);
  background: var(--success);
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