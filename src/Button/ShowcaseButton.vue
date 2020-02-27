<template>
  <div>
    <div class="row">
      <btn size="xs">Button</btn>
      <btn size="s">Button</btn>
      <btn size="m">Button</btn>
      <btn size="l">Button</btn>
      <btn size="xl">Button</btn>
    </div>
    <div class="row">
      <btn size="xs" background="regular">Button</btn>
      <btn size="s" background="regular">Button</btn>
      <btn size="m" background="regular">Button</btn>
      <btn size="l" background="regular">Button</btn>
      <btn size="xl" background="regular">Button</btn>
    </div>
    <div class="row">
      <btn size="xs" background="danger">Button</btn>
      <btn size="s" background="danger">Button</btn>
      <btn size="m" background="danger">Button</btn>
      <btn size="l" background="danger">Button</btn>
      <btn size="xl" background="danger">Button</btn>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
</style>

<script>
import Button from "./Button.vue"

export default {
  components: { btn: Button },
}
</script>