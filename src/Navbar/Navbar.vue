<template>
  <div>
    <div :class="['container']" ref="container" :style="style">
      <div class="navbar">
        <div class="logo"></div>
        <div class="menu">
          <div class="menu__item"
               tabindex="0"
               v-for="item in items"
               :key="item"
               @focus="itemActivate($event, item)"
               @blur="itemDeselect({delay: 250})"
               @touchstart="itemClick($event, item)"
               @mouseover="itemActivate($event, item)"
               @mouseleave="itemDeselect({delay: 250})">
            {{item}}
          </div>
        </div>
        <div class="cta"></div>
      </div>
      <transition name="dropdown">
        <div class="dropdown"
             :tabindex="dropdown.tabindex"
             @click="dropdownClick($event)"
             @blur="dropdownBlur()"
             @focus="itemSelect(selected)"
             @mouseover="itemSelect(selected)"
             @mouseleave="itemDeselect({delay: 250})"
             v-show="!!dropdown.visible && selected">
          <slot name="dropdown"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  overflow-x: hidden;
  box-sizing: border-box;
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
  box-sizing: border-box;
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
    },
    selected: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {
      dropdown: {
        left: null,
        visible: null,
        timer: null,
        width: 700,
        tabindex: null
      },
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
    dropdownClick(e) {
      this.dropdown.tabindex = 0
      this.$nextTick(() => {
        e.target.focus()
      })
    },
    dropdownBlur() {
      this.$nextTick(() => {
        this.dropdown.tabindex = null
      })
    },
    itemClick(e, item) {
      if (this.selected === item) {
        this.itemDeselect()
      } else {
        this.itemActivate(e, item)
      }
    },
    itemActivate(e, item) {
      this.itemSelect(item)
      this.itemPosition(e)
    },
    itemPosition(e) {
      let
        width = this.dropdown.width,
        left = e.target.offsetLeft + e.target.offsetWidth/2 - width/2
      const
        containerWidth = this.$refs.container.offsetWidth,
        overflow = this.dropdown.width > containerWidth,
        overflowRight = (left + this.dropdown.width) > containerWidth,
        overflowLeft = left < 0
      if (overflow) {
        width = this.$refs.container.offsetWidth
        left = 0
      }
      if (!overflow && overflowRight) {
        left -= Math.abs(containerWidth - left - this.dropdown.width)
      }
      if (!overflow && overflowLeft) {
        left = 0
      }
      this.dropdown.left = left
      this.dropdown.width = width
    },
    itemSelect(item) {
      if (item) this.$emit("selected", item)
      this.dropdown.visible = true
      clearTimeout(this.dropdown.timer)
    },
    itemDeselect({delay}={delay: 0}) {
      this.dropdown.timer = setTimeout(() => {
        this.dropdown.visible = false
        this.$emit("selected", null)
      }, delay)
    },
  }
}
</script>