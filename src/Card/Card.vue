<template>
  <div>
    <div class="card">
      <div class="overline">
        {{overline}}
      </div>
      <div class="title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: inline-block;
  box-shadow: var(--ds-elevation-1);
  padding: 1rem;
}
</style>

<script>
export default {
  props: {
    overline: {
      type: String,
      default: "Overline"
    },
    title: {
      type: String,
      default: "Title"
    },
    padding: {
      type: String,
      default: "24px"
    }
  }
}
</script>