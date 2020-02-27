<template>
  <button :class="[`button__size__${size}`, `button__style__${buttonStyle}`]">
    <slot/>
  </button>
</template>

<style scoped>
button {
  border: none;
  font-family: var(--ds-font-family, sans-serif);
  font-size: initial;
  margin: 0;
  padding: 0;
  background: rgb(80, 100, 251);
  color: white;
  padding: .85em 1.15em;
  border-radius: .35em;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: all .25s;
  text-align: center;
}
.button__size__xs {
  font-size: .75rem;
}
.button__size__s {
  font-size: .875rem;
}
.button__size__m {
  font-size: 1rem;
}
.button__size__l {
  font-size: 1.25rem;
}
.button__size__xl {
  font-size: 1.5rem;
}
.button__style__regular {
  background: white;
  color: rgba(0,0,0,.875);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.05);
}
.button__style__regular:focus {
  box-shadow: inset 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.05), 0 0 0 4px rgba(0, 89, 255, 0.2), 0 0 0 1px rgba(0, 89, 255, 0.2);
}
.button__style__regular:hover {
  color: rgba(0,0,0,.5)
}
.button__style__danger {
  color: white;
  background: rgb(224, 36, 36);
}
.button__style__danger:focus {
  box-shadow: 0 0 0 4px rgb(224, 36, 36, .2)
}
.button__style__danger:hover {
  background: rgba(224, 36, 36, .85);
}
</style>

<script>
export default {
  props: {
    size: {
      /**
       * `xs` | `s` | `m` | `l` | `xl`
       */
      type: String,
      default: "m"
    },
    /**
     * CSS color of `regular` | `danger`
     */
    background: {
      type: String,
      default: "rgb(80, 100, 251)"
    },
  },
  computed: {
    buttonStyle() {
      const
        styles = ['regular', 'danger'],
        exists = styles.indexOf(this.background)
      if (exists >= 0) {
        return styles[exists]
      }
    }
  }
}
</script>