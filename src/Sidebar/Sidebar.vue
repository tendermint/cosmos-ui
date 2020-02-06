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
    <transition name="sidebar" @after-leave="emitVisible()" appear>
      <div :class="['sidebar']"
           ref="sidebar"
           v-if="visible && visibleLocal"
           :style="style"
           @touchstart="touchstart"
           @touchmove="touchmove"
           @touchend="touchend">
        <!-- @slot Contents of the sidebar. -->
        <slot/>
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
  top: 0;
  height: 100vh;
  background: white;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  transform: translateX(var(--translate-x-component-internal)) translateY(var(--translate-y-component-internal));
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
.sidebar-enter-active {
  transition: all .25s;
}
.sidebar-enter {
  transform: translateX(var(--sidebar-transform-x-component-internal)) translateY(var(--sidebar-transform-y-component-internal));
}
.sidebar-enter-to {
  transform: translateX(0);
}
.sidebar-leave-active {
  transition: all .5s;
}
.sidebar-leave {
  transform: translateX(0);
}
.sidebar-leave-to {
  transform: translateX(var(--sidebar-transform-x-component-internal)) translateY(var(--sidebar-transform-y-component-internal));
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
      default: "300px"
    },
    /**
     * Maximum width of the sidebar.
     */
    maxWidth: {
      type: String,
      default: "75vw"
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
    fullscreenY() {
      return this.translateY === -200
    },
    deltaX() {
      return this.currentX - this.startX
    },
    deltaY() {
      return this.currentY - this.startY
    },
    style() {
      return {
        "box-shadow":
          this.boxShadow || "none",
        "top":
          this.side === "right" && "0" ||
          this.side === "left" && "0" ||
          this.side === "bottom" && "200px",
        "left":
          this.side === "right" && "initial" ||
          this.side === "left" && "0" ||
          this.side === "bottom" && "0",
        "right":
          this.side === "right" && "0" ||
          this.side === "left" && "initial" ||
          this.side === "bottom" && "0",
        "width": 
          this.side === "bottom" && "100vw" ||
          this.width || "300px",
        "max-width":
          this.side === "bottom" && "initial" ||
          this.maxWidth || "75vw",
        "--sidebar-transform-x-component-internal":
          this.side === "right" && "100%" ||
          this.side === "left" && "-100%" ||
          this.side === "bottom" && "0",
        "--sidebar-transform-y-component-internal":
          this.side === "right" && "0" ||
          this.side === "left" && "0" ||
          this.side === "bottom" && "100%",
        "--translate-x-component-internal": `${this.translateX || 0}px`,
        "--translate-y-component-internal": `${this.translateY || 0}px`
      };
    }
  },
  mounted() {
    document.querySelector("body").style.overflow = "hidden"
  },
  methods: {
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
      this.$refs.sidebar.style.transition = ""
      this.startX = e.changedTouches[0].clientX;
      this.startY = e.changedTouches[0].clientY;
      if (this.side === "bottom" && !this.fullscreenY) {
        this.$refs.sidebar.style.overflowY = "hidden"
      }
    },
    touchmove(e) {
      if (this.fullscreenY) return
      this.currentX = e.changedTouches[0].clientX;
      this.currentY = e.changedTouches[0].clientY;
      if (this.side === "left") {
        this.translateX = this.deltaX > 0 ? 0 : this.deltaX
      } else if (this.side === "right") {
        this.translateX = this.deltaX < 0 ? 0 : this.deltaX
      } else if (this.side === "bottom") {
        this.translateY = this.deltaY < -200 ? -200 : this.deltaY
      }
    },
    touchend(e) {
      const overThresholdX = Math.abs(this.deltaX * 100 / window.screen.width) > 25
      const overThresholdY = this.deltaY < -100
      if (this.side === "left") {
        this.translateX = this.deltaX > 0 ? 0 : this.deltaX
      } else if (this.side === "right") {
        this.translateX = this.deltaX < 0 ? 0 : this.deltaX
      } else if (this.side === "bottom") {
        this.$refs.sidebar.style.overflowY = ""
      }
      if (overThresholdX && (this.side === "left" || this.side === "right")) {
        this.close(e)
      } else {
        this.$refs.sidebar.style.transition = "transform .5s";
      }
      if (this.side === "bottom") {
        if (overThresholdY) {
          this.translateY = -200
          this.$refs.sidebar.style.overflowY = "scroll"
        } else {
          this.translateY = null;
        }
      }
      this.startX = null;
      this.startY = null;
      this.currentX = null;
      this.currentY = null;
      this.translateX = null;
    },
  }
};
</script> 