<template>
  <div>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
}
</style>