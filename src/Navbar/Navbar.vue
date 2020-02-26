<template>
  <div>
    <div :class="['container']" :style="style">
      <div class="navbar">
        <div class="logo"></div>
        <div class="menu">
          <div @mouseover="mouseover($event, true)" class="menu__item">Item 1</div>
          <div @mouseover="mouseover($event, true)" class="menu__item">Item 2</div>
          <div @mouseover="mouseover($event, true)" class="menu__item">Item 3</div>
          <div @mouseover="mouseover($event, true)" class="menu__item">Item 4</div>
        </div>
        <div class="cta"></div>
      </div>
      <transition name="dropdown">
        <div ref="dropdown" class="dropdown" @mouseleave="dropdownLeave" v-if="!!dropdownVisible">{{left}}</div>
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
      left: null,
      dropdownVisible: null,
      timer: null,
      dropdownWidth: 500
    }
  },
  computed: {
    style() {
      return {
        "--dropdown-left": this.left + "px",
        "--dropdown-width": this.dropdownWidth + "px"
      }
    }
  },
  methods: {
    mouseover(e) {
      if (e.toElement && (!!e.toElement.classList.contains("menu__item") || !!e.toElement.classList.contains("dropdown"))) {
        this.left = e.target.offsetLeft + e.target.offsetWidth/2 - this.dropdownWidth/2
        this.dropdownVisible = true
      } else {
        this.dropdownVisible = false
      }
    },
    dropdownLeave(e) {
      if (e.toElement && !e.toElement.classList.contains("menu__item")) {
        this.dropdownVisible = false
      }
    }
  }
}
</script>