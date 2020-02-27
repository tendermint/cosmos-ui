<template>
  <div>
    <div :class="['container']" :style="style">
      <div class="navbar">
        <div class="logo"></div>
        <div class="menu">
          <div @mouseover="mouseover($event, true, 'menu')" @mouseleave="mouseover($event, false, 'menu')" class="menu__item">Item 1</div>
          <div @mouseover="mouseover($event, true, 'menu')" @mouseleave="mouseover($event, false, 'menu')" class="menu__item">Item 2</div>
          <div @mouseover="mouseover($event, true, 'menu')" @mouseleave="mouseover($event, false, 'menu')" class="menu__item">Item 3</div>
          <div @mouseover="mouseover($event, true, 'menu')" @mouseleave="mouseover($event, false, 'menu')" class="menu__item">Item 4</div>
        </div>
        <div class="cta"></div>
      </div>
      <transition name="dropdown">
        <div @mouseover="mouseover($event, true, 'dropdown')" @mouseleave="mouseover($event, false, 'dropdown')" class="dropdown" v-if="!!dropdownVisible">{{dropdownLeft}}</div>
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
  data: function() {
    return {
      dropdownLeft: null,
      dropdownVisible: null,
      dropdownTimer: null,
      dropdownWidth: 500
    }
  },
  computed: {
    style() {
      return {
        "--dropdown-left": this.dropdownLeft + "px",
        "--dropdown-width": this.dropdownWidth + "px"
      }
    }
  },
  methods: {
    mouseover(e, entering, target) {
      const leaving = !entering
      if (entering) {
        if (target === 'menu') {
          this.dropdownLeft = e.target.offsetLeft + e.target.offsetWidth/2 - this.dropdownWidth/2
        }
        this.dropdownVisible = true
        clearTimeout(this.timer)
      }
      if (leaving) {
        this.timer = setTimeout(() => {
          this.dropdownVisible = false
        }, 500)
      }
    },
  }
}
</script>