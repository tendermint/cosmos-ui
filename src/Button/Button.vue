<template>
  <button :style="{'--button-props-width': width}" :class="buttonClassList">
    <div class="icon" v-if="$slots.iconLeft">
      <slot name="iconLeft"/>
    </div>
    <div class="label">
      {{label}}
    </div>
    <div class="icon" v-if="$slots.iconRight">
      <slot name="iconRight"/>
    </div>
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
  font-family: var(--ds-font-family, sans-serif);
  font-weight: 500;
  border-radius: 0.25rem;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
}

.button__type__contained .icon {
  fill: var(--ds-color-primary-alt, white);
}

.button__type__outlined .icon svg {
  fill: var(--ds-color-primary, black);
}

.button__type__text .icon {
  fill: var(--ds-color-primary, black);
}

.button__type__text:hover {
  background: rgba(140, 145, 177, .08);
}

.button__size__small.button__icon__left__false {
  padding-left: 1rem;
}

.button__type__text.button__size__small.button__icon__left__false {
  margin-left: -1rem;
}

.button__size__medium.button__icon__left__false {
  padding-left: 1.25rem;
}

.button__type__text.button__size__medium.button__icon__left__false {
  margin-left: -1.25rem;
}

.button__size__large.button__icon__left__false {
  padding-left: 27px;
}

.button__type__text.button__size__large.button__icon__left__false {
  margin-left: -27px;
}

.button__size__small.button__icon__right__false {
  padding-right: 1rem;
}

.button__size__medium.button__icon__right__false {
  padding-right: 1.25rem;
}

.button__size__large.button__icon__right__false {
  padding-right: 27px;
}

.button__size__small .label {
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.button__size__medium .label {
  padding-top: .875rem;
  padding-bottom: .875rem;
}

.button__size__large .label {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.button__fixed__true {
  width: var(--button-props-width);
  justify-content: center;
}

.button__type__contained {
  background-color: var(--ds-color-primary, black);
  color: var(--ds-color-primary-alt, white);
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
  line-height: 1rem;
}

.button__size__small .icon {
  height: 1rem;
  width: 1rem;
  padding: .5rem;
}

.button__size__medium .icon {
  height: 1.5rem;
  width: 1.5rem;
  padding: .75rem;
}

.button__size__large .icon {
  height: 2rem;
  width: 2rem;
  padding: 1rem;
}

.button__size__medium {
  font-size: 1rem;
  line-height: 1.25rem;
}

.button__size__large {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
</style>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
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
  },
  computed: {
    buttonClassList() {
      return [
        'button',
        `button__type__${this.type}`,
        `button__size__${this.size}`,
        `button__fixed__${!!(this.width)}`,
        `button__icon__left__${!!(this.$slots.iconLeft)}`,
        `button__icon__right__${!!(this.$slots.iconRight)}`
      ]
    }
  }
}
</script>