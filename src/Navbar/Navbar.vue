<template>
  <div>
    <div :class="['container']" :style="style">
      <div class="navbar">
        <div class="logo"></div>
        <div class="menu">
          <div class="menu__item"
               tabindex="0"
               v-for="item in items"
               :key="item"
               @focus="focus($event, item)"
               @mouseover="mouseover($event, true, 'menu', item)"
               @mouseleave="mouseover($event, false, 'menu')">
            {{item}}
          </div>
        </div>
        <div class="cta"></div>
      </div>
      <transition name="dropdown">
        <div @mouseover="mouseover($event, true, 'dropdown')" @mouseleave="mouseover($event, false, 'dropdown')" class="dropdown" v-if="!!dropdown.visible">
          <slot name="dropdown"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  overflow-x: hidden;
}
.navbar {
  background: red;
  height: 50px;
  position: relative;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-areas: "logo menu cta";
  justify-content: space-between;
  overflow: hidden;
}
.logo {
  background: green;
  grid-area: logo;
}
.menu {
  background: yellow;
  display: grid;
  grid-auto-flow: column;
  grid-area: menu;
}
.menu__item {
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cta {
  background: blue;
  grid-area: cta;
}
.dropdown {
  width: var(--dropdown-width);
  height: var(--dropdown-width);
  background: cyan;
  position: absolute;
  transform: translateX(var(--dropdown-left));
  transition: transform .35s ease-in-out;
}
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity .35s;
}
.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
}
.dropdown-leave, .dropdown-enter-to {
  opacity: 1;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      dropdown: {
        left: null,
        visible: null,
        timer: null,
        width: 500
      }
    }
  },
  computed: {
    style() {
      return {
        "--dropdown-left": this.dropdown.left + "px",
        "--dropdown-width": this.dropdown.width + "px"
      }
    }
  },
  methods: {
    focus(e, item) {
      console.log(e, item)
      this.dropdown.left = e.target.offsetLeft + e.target.offsetWidth/2 - this.dropdown.width/2
      this.dropdown.visible = true
      clearTimeout(this.dropdown.timer)
    },
    mouseover(e, entering, target, item) {
      const leaving = !entering
      if (entering) {
        if (item) this.$emit("selected", item)
        if (target === 'menu') {
          this.dropdown.left = e.target.offsetLeft + e.target.offsetWidth/2 - this.dropdown.width/2
        }
        this.dropdown.visible = true
        clearTimeout(this.dropdown.timer)
      }
      if (leaving) {
        this.dropdown.timer = setTimeout(() => {
          this.dropdown.visible = false
          this.$emit("selected", null)
        }, 250)
      }
    },
  }
}
</script>