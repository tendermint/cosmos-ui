<template>
  <div :class="cssClass">
    <template v-if="body">{{ body }}</template>
    <template v-else>{{ name }} {{ error }}</template>
  </div>
</template>

<script>
export default {
  computed: {
    cssClass() {
      let value = "tm-form-msg"
      if (this.type) {
        value += " tm-form-msg-error"
      } else {
        value += " tm-form-msg-desc"
      }
      return value
    },
    error() {
      let msg = ""
      switch (this.type) {
        case "alphaNum":
          msg = "must contain only alphanumeric characters"
          break
        case "required":
          msg = "is required"
          break
        case "match":
          msg = "must be identical"
          break
        case "exactLength":
          msg = `must be exactly ${this.length} characters`
          break
        case "minLength":
          msg = `must be longer than ${this.min} characters`
          break
        case "maxLength":
          msg = `must be shorter than ${this.max} characters`
          break
        case "length":
          msg = `must be between ${this.min} and ${this.max} characters`
          break
        case "between":
          msg = `must be between ${this.min} and ${this.max}`
          break
        default:
          msg = "must be valid"
          break
      }
      return msg
    }
  },
  props: ["type", "body", "name", "min", "max", "length"]
}
</script>

<style src="./style.css">
</style>
