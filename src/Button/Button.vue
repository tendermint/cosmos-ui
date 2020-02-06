<template>
  <button :style="{'--button-props-width': width}" :class="['button', `button__type__${type}`, `button__size__${size}`, `button__fixed__${!!(width)}`]">
    {{label}}
  </button>
</template>

<style scoped>
button {
  border: none;
  font-family: initial;
  font-size: initial;
  margin: 0;
  padding: 0;
}

.button {
  line-height: 1.25em;
  display: inline-flex;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-family: var(--ds-font-family), sans-serif;
  font-weight: 500;
  border-radius: 0.25rem;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
}

.button__fixed__true {
  width: var(--button-props-width);
  justify-content: center;
}

.button__type__contained {
  background-color: var(--ds-color-primary, black);
  color: white;
}

.button__type__outlined {
  box-shadow: inset 0 0 0 2px var(--ds-color-primary, black);
  color: var(--ds-color-primary, black);
}

.button__type__text {
  color: var(--ds-color-primary, black);
}

.button__size__small {
  font-size: 0.8125rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1rem;
}

.button__size__medium {
  font-size: 1rem;
  padding-top: 0.8125rem;
  padding-bottom: 0.8125rem;
  line-height: 1.25rem;
}

.button__size__large {
  font-size: 1.25rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  line-height: 1.5rem;
}

.button__size__small.button__type__contained, .button__size__small.button__type__outlined {
  padding-left: 1rem;
  padding-right: 1rem;
}

.button__size__medium.button__type__contained, .button__size__medium.button__type__outlined {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.button__size__large.button__type__contained, .button__size__large.button__type__outlined {
  padding-left: 1.6875rem;
  padding-right: 1.6875rem;
}
</style>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Button"
    },
    /**
     * "contained" | "outlined" | "text"
     */
    type: {
      type: String,
      default: "contained"
    },
    /**
     * "small" | "medium" | "large"
     */
    size: {
      type: String,
      default: "medium"
    },
    /**
     * CSS width value for fixed-sized (or 100%) buttons
     */
    width: {
      type: String,
    }
  }
}
</script>