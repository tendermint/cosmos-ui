<template>
  <div class="section-content">
    <div class="container">
      <div class="content">
        <div class="icon" v-if="this.$slots['icon']">
          <div class="icon__icon">
            <slot name="icon"/>
          </div>
        </div>
        <div class="title" v-if="this.$slots['title']">
          <slot name="title"/>
        </div>
        <div class="subtitle" v-if="this.$slots['subtitle']">
          <slot name="subtitle"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-content {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-self: center;
  color: white;
  background: #161931;
  font-family: var(--ds-font-family, sans-serif);
}
.container {
  display: flex;
  flex-direction: column;
  padding: 0rem;
  max-width: 44rem;
  width: 100%;
  align-self: center;
}
.icon {
  stroke: #BA3FD9;
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
}
.icon__icon {
  max-width: 4rem;
  max-height: 4rem;
}
.content {
  align-self: center;
  margin: 0rem 6rem;
  display: contents;
}
.title {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.25rem;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 2rem 0 2rem 0;
}
.subtitle {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgba(255,255,255,0.8);
}
/* .section-content .container .content .notes {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgba(255,255,255,0.8);
}
.section-content .container .content .notes ul {
  list-style-type: disc;
}
.section-content .container .content .notes ul li {
  margin-bottom: 1.25rem;
}
.section-content .container .content .notes ul ul {
  list-style-type: none;
}
.section-content .container .content .notes ul ul li {
  margin: 1.25rem auto 1.25rem auto;
}
.section-content .container .content .notes ul li.note {
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
} */
</style>