<template>
  <div class="section-intro">
    <div class="container">
      <div class="intro">
        <div class="text" v-if="this.$slots['text']">
          <slot name="text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: var(--primary-light);
  text-decoration: none;
}
.section-intro {
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-self: center;
  color: var(--dark-txt);
  background: var(--grey-14);
}
.container {
  display: flex;
  flex-direction: column;
  align-self: center;
}
.intro {
  max-width: 44rem;
  width: 100%;
  align-self: center;
  margin: 0rem 6rem;
}
.text {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--white-80);
}
</style>