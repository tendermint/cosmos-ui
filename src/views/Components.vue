<template>
  <div id="components">
    <section>
      <header>Button (Default)</header>
      <tm-btn value="Button" />
      <tm-btn value="Primary" color="primary" />
      <tm-btn value="Success" color="success" />
      <tm-btn value="Warning" color="warning" />
      <tm-btn value="Danger" color="danger" />
      <tm-btn value="Button Disabled" disabled />
    </section>
    <section>
      <header>Button (Large)</header>
      <tm-btn value="Button" size="lg" />
      <tm-btn value="Primary" color="primary" size="lg" />
      <tm-btn value="Success" color="success" size="lg" />
      <tm-btn value="Warning" color="warning" size="lg" />
      <tm-btn value="Danger" color="danger" size="lg" />
      <tm-btn value="Button Disabled" size="lg" disabled />
    </section>
  </div>
</template>

<script>
import { TmBtn } from "../index.js"

export default {
  name: "home",
  components: {
    TmBtn
  }
}
</script>

<style scoped>
section {
  padding: 0.5rem;
  border-top: 1px solid var(--bc);
}
section > * {
  padding: 0.5rem;
}
section > header {
  font-size: 1.5rem;
  color: var(--bright);
}
</style>
