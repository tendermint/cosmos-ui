<template>
  <div>
    <div :style="{'--button-props-width': width}" :class="['button', `button__type__${type}`, `button__size__${size}`, `button__fixed__${!!(width)}`]">
      {{label}}
      <!-- <component class="button__icon" size="1000" v-if="icon" :is="iconComponent"/> -->
    </div>
  </div>
</template>

<style scoped>
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

/* .button__icon {
  display: block;
  height: 1.5em;
  width: 1.5em;
} */
</style>

<script>
export default {
  // computed: {
  //   iconComponent() {
  //     const titleCase = (string) => {
  //         return string.charAt(0).toUpperCase() + string.slice(1);
  //     }
  //     return () => import(`vue-feather-icons/icons/${titleCase(this.icon)}Icon.js`)
  //   }
  // },
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
    // icon: {
    //   type: String
    // },
  }
}
</script>