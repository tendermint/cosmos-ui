<template>
  <div>
    <transition name="overlay" appear>
      <div class="overlay"
           ref="overlay"
           :style="{'background-color': backgroundColor || 'rgba(0, 0, 0, 0.35)'}"
           v-if="visible && visibleLocal"
           @click="close"
           @touchstart="touchstart"
           @touchmove="touchmove"
           @touchend="touchend">
      </div>
    </transition>
    <transition :name="`sidebar__${side}`" @after-leave="emitVisible()" appear>
      <div :class="['sidebar', `sidebar__side__${side}`]"
           ref="sidebar"
           v-if="visible && visibleLocal"
           :style="style"
           @click.self="sidebarClick"
           @touchstart="touchstart"
           @touchmove="touchmove"
           @touchend="touchend">
        <!-- @slot Contents of the sidebar. -->
        <div @scroll="detectScrolling" ref="content" :class="[`sidebar__content`, `sidebar__content__side__${side}`, `sidebar__fullscreen__${!!(fullscreen)}`]">
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
.sidebar {
  position: fixed;
  overflow-y: hidden;
  transform: translateX(var(--translate-x-component-internal)) translateY(var(--translate-y-component-internal));
  -webkit-overflow-scrolling: touch;
}
.sidebar.sidebar__side__left {
  top: 0;
  left: 0;
  right: initial;
  width: var(--sidebar-width, 300px);
  max-width: var(--sidebar-width, 75%);
  height: var(--sidebar-height, 100%);
  max-height: var(--sidebar-max-height, 100%);
  box-shadow: var(--sidebar-box-shadow);
}
.sidebar.sidebar__side__right {
  top: 0;
  left: initial;
  right: 0;
  width: var(--sidebar-width, 300px);
  max-width: var(--sidebar-width, 75%);
  height: var(--sidebar-height, 100%);
  max-height: var(--sidebar-max-height, 100%);
  box-shadow: var(--sidebar-box-shadow);
}
.sidebar.sidebar__side__bottom {
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: initial;
  overflow-y: scroll;
  width: var(--sidebar-width, 100%);
  max-width: var(--sidebar-width, 100%);
  height: 100%;
}
.sidebar.sidebar__side__center {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  overflow-y: scroll;
  pointer-events: all;
  height: 100vh;
  transform: translateX(0);
}
.sidebar__content {
  background: white;
  position: absolute;
  pointer-events: all;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}

.sidebar__content.sidebar__content__side__bottom {
  margin-top: var(--sidebar-top);
  overflow-y: hidden;
  height: auto;
  box-shadow: var(--sidebar-box-shadow);
}

.sidebar__content.sidebar__content__side__center {
  pointer-events: all;
  position: absolute;
  width: var(--sidebar-width, 600px);
  max-width: var(--sidebar-max-width, 100%);
  height: var(--sidebar-height, auto);
  max-height: var(--sidebar-max-height, none);
  top: var(--sidebar-top);
  /* top: 50%; */
  transform: translateX(-50%);
  /* transform: translateX(-50%) translateY(-50%); */
  left: 50%;
  border-radius: var(--sidebar-border-radius);
  box-shadow: var(--sidebar-box-shadow);
  /* box-sizing: border-box; */
}

.sidebar__content.sidebar__content__side__center.sidebar__fullscreen__true {
  top: 0;
  bottom: 0;
}

.overlay-enter-active {
  transition: all .25s ease-in;
}
.overlay-enter {
  opacity: 0;
}
.overlay-enter-to {
  opacity: 1;
}
.overlay-leave-active {
  transition: all .25s;
}
.overlay-leave {
  opacity: 1;
}
.overlay-leave-to {
  opacity: 0;
}
.sidebar__left-enter-active,
.sidebar__right-enter-active,
.sidebar__bottom-enter-active,
.sidebar__center-enter-active,
.sidebar__left-leave-active,
.sidebar__right-leave-active,
.sidebar__bottom-leave-active,
.sidebar__center-leave-active {
  transition: all .5s;
}
.sidebar__left-enter,
.sidebar__left-leave-to {
  transform: translateX(-100%);
}
.sidebar__right-enter,
.sidebar__right-leave-to {
  transform: translateX(100%)
}
.sidebar__left-enter-to,
.sidebar__left-leave
.sidebar__right-enter-to,
.sidebar__right-leave {
  transform: translateX(0)
}
.sidebar__bottom-enter,
.sidebar__bottom-leave-to {
  transform: translateY(100%)
}
.sidebar__bottom-enter-to,
.sidebar__bottom-leave {
  transform: translateY(0)
}
.sidebar__center-enter, .sidebar__center-leave-to {
  opacity: 0;
  transform: scale(.95)
}
.sidebar__center-enter-to, .sidebar__center-leave {
  opacity: 1;
  transform: scale(1);
}
</style>

<script>
/**
 * `Sidebar` is a sheet that transitions on top of the main content and allows
 * displaying auxiliary information, such as table of contents or global navigation.
 */
export default {
  props: {
    /**
     * Toggles visibility of the component.
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Width of the sidebar.
     */
    width: {
      type: String,
    },
    /**
     * Maximum width of the sidebar.
     */
    maxWidth: {
      type: String,
    },
    /**
     * Height of the sidebar.
     */
    height: {
      type: String,
    },
    /**
     * Maximum height of the sidebar.
     */
    maxHeight: {
      type: String,
    },
    /**
     * `left` | `right` | `bottom`
     */
    side: {
      type: String,
      default: "left"
    },
    /**
     * CSS `background-color` of the overlay.
     */
    backgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.35)'
    },
    /**
     * CSS `box-shadow` of the sidebar sheet.
     */
    boxShadow: {
      type: String,
      default: "none"
    }
  },
  data: function() {
    return {
      visibleLocal: true,
      startX: null,
      startY: null,
      currentX: null,
      currentY: null,
      translateX: null,
      translateY: null,
      isScrolling: null,
      sheetTop: null,
      fullscreen: null,
    };
  },
  watch: {
    visible(newValue, oldValue) {
      if (newValue) {
        const sidebar = this.$refs.sidebar;
        if (sidebar) {
          sidebar.addEventListener("transitionend", () => {
            sidebar.style.transition = "";
          });
        }
        this.visibleLocal = true;
      }
    }
  },
  computed: {
    deltaX() {
      return this.currentX - this.startX
    },
    deltaY() {
      return this.currentY - this.startY
    },
    style() {
      const
        width = this.fullscreen ? "100%" : this.width,
        maxWidth = this.fullscreen ? "100%" : this.maxWidth,
        height = this.fullscreen ? "100%" : this.height,
        maxHeight = this.fullscreen ? "100%" : this.maxHeight,
        borderRadius = this.fullscreen ? "none" : ".5rem"
      return {
        "--sidebar-max-width": maxWidth,
        "--sidebar-width": width,
        "--sidebar-max-height": maxHeight,
        "--sidebar-height": height,
        "--sidebar-box-shadow": this.boxShadow,
        "--sidebar-border-radius": borderRadius,
        "--sidebar-top": this.sheetTop + 'px',
        "--translate-x-component-internal": `${this.translateX || 0}px`,
        "--translate-y-component-internal": `${this.translateY || 0}px`
      };
    }
  },
  mounted() {
    this.sheetCenterPosition()
    window.addEventListener("resize", this.sheetCenterPosition)
    document.querySelector("body").style.overflow = "hidden"
    if (this.side === "center") {
      if (window.innerWidth < this.$refs.content.getBoundingClientRect().width) {
        this.fullscreen = true
      }
    }
  },
  methods: {
    sheetCenterPosition() {
      if (this.side === "center") {
        const
          content = this.$refs.content.getBoundingClientRect().height,
          height = window.innerHeight
        this.sheetTop = content > height - 40 ? 20 : (height - content) / 2
      }
      if (this.side === "bottom" && this.$refs.content) {
        const
          content = this.$refs.content.getBoundingClientRect().height,
          height = window.innerHeight
        this.sheetTop = content > height ? 0 : height - content
      }
    },
    sidebarClick(e) {
      if (this.side === "center") this.visibleLocal = null;
      if (this.side === 'bottom') this.visibleLocal = null
    },
    detectScrolling(e) {
      this.isScrolling = true
    },
    emitVisible() {
      document.querySelector("body").style.overflow = ""
      /**
       * Sends `false` when closing the sidebar.
       * @type {Event}
       */
      this.$emit('visible', false)
    },
    close(e) {
      this.visibleLocal = null;
      if (this.$refs["overlay"]) {
        this.$refs["overlay"].style["pointer-events"] = "none";
        if (e.clientX && e.clientY) {
          const doc = document.elementFromPoint(e.clientX, e.clientY);
          if (doc && doc.click) doc.click();
        }
      }
    },
    touchstart(e) {
      const sidebar = this.$refs.sidebar
      const content = this.$refs.content
      if (sidebar) sidebar.style.transition = ""
      this.currentX = this.startX = e.changedTouches[0].clientX;
      this.currentY = this.startY = e.changedTouches[0].clientY;
    },
    touchmove(e) {
      this.currentX = e.changedTouches[0].clientX;
      this.currentY = e.changedTouches[0].clientY;
      if (this.side === "left" && !this.isScrolling) {
        this.translateX = this.deltaX > 0 ? 0 : this.deltaX
      }
      if (this.side === "right" && !this.isScrolling) {
        this.translateX = this.deltaX < 0 ? 0 : this.deltaX
      }
    },
    touchend(e) {
      const
        overThresholdX = Math.abs(this.deltaX * 100 / window.screen.width) > 25,
        overThresholdUp = this.deltaY < -100,
        overThresholdDown = this.deltaY > 100,
        sidebar = this.$refs.sidebar
      if (this.side === "left") {
        this.translateX = this.deltaX > 0 ? 0 : this.deltaX
      } else if (this.side === "right") {
        this.translateX = this.deltaX < 0 ? 0 : this.deltaX
      }
      if (overThresholdX && !this.isScrolling && (this.side === "left" || this.side === "right")) {
        this.close(e)
      } else {
        if (sidebar) sidebar.style.transition = "all .5s";
      }
      this.startX = null;
      this.startY = null;
      this.currentX = null;
      this.currentY = null;
      this.translateX = null;
      this.isScrolling = null;
    },
  }
};
</script> 