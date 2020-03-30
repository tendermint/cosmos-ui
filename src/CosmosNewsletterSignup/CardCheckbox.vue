<template>
  <div>
    <div class="container">
      <div class="icon">
        <div class="icon__image">
          <slot name="icon"/>
        </div>
      </div>
      <div class="body"></div>
      <div class="checkbox"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 25% 60% 15%;
  min-height: 7.25rem;
}
.icon {
  grid-column-start: 1;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon__image {
  width: 4rem;
  height: 4rem;
  stroke: white;
  fill: none;
  margin: 1rem;
}
.body {
  grid-column-start: 2;
  background: green;
}
.checkbox {
  grid-column-start: 3;
  background: blue;
}
</style>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "light"
    }
  }
}
</script>