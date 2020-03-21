<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="icon__wrapper" v-if="$slots.icon">
          <div class="icon">
            <slot name="icon"/>
          </div>
        </div>
        <div class="details">
          <div class="title">
            <a :href="url" target="_blank" rel="noreferrer noopener" class="h1">
              <slot name="h1"/>
            </a>
            <div class="h2">
              <slot name="h2"/>
            </div>
            <div class="body">
              <slot name="body"/>
            </div>
          </div>
          <div class="indicator">
            <div v-if="progress">
              <div class="progress" :style="{'--progress-bar-width': `${progress}%`}">
                <div class="progress__bar"></div>
              </div>
              <div class="h3">{{progress}}% complete</div>
            </div>
            <a class="aside__icon__wrapper" v-else-if="url" :href="url" target="_blank" rel="noreferrer noopener">
              <icon-chevron class="aside__icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  overflow-wrap: anywhere;
}
.row {
  color: var(--white-100);
  font-family: var(--ds-font-family, sans-serif);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content 1fr;
}
.icon__wrapper {
  display: flex;
  align-items: center;
}
.icon {
  grid-column-start: 1;
  width: 4rem;
  height: 4rem;
  fill: var(--white-100);
  opacity: .32;
  margin: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.h1 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--white-100);
  display: block;
  text-decoration: none;
}
.h2 {
  font-size: var(--ds-body2-font-size, .875rem);
  line-height: var(--ds-body2-line-height, 1.25rem);
  line-height: 24px;
  color: var(--white-51);
  margin-bottom: .75rem;
}
.body {
  line-height: var(--ds-body1-line-height, 1.5rem);
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
.aside__icon__wrapper {
  padding: 1rem .75rem;
}
.aside__icon__wrapper:hover .aside__icon {
  transform: translateX(.25rem);
  stroke: rgba(255,255,255,.75);
}
.aside__icon {
  height: 1rem;
  width: auto;
  display: block;
  stroke: rgba(255,255,255,.32);
  transition: all .25s;
}
@media screen and (max-width: 600px) {
  .icon {
    display: none;
  }
}
</style>

<script>
import IconChevron from "./../Icons/IconChevron"

export default {
  components: {
    IconChevron
  },
  props: {
    progress: {
      type: [String, Number]
    },
    url: {
      type: String
    }
  },
}
</script>