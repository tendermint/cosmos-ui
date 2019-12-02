<template>
  <div>
    <transition name="overlay" appear>
      <div class="overlay" ref="overlay" v-if="visible && visibleLocal" @click="close" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"></div>
    </transition>
    <transition name="sidebar" @after-leave="$emit('visible', false)" appear>
      <div class="sidebar" ref="sidebar" v-if="visible && visibleLocal" :style="{'--translate-x': `-${this.touchMoveX}%`}">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  max-width: 75vw;
  height: 100vh;
  background: white;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  transform: translateX(var(--translate-x));
}

.overlay-enter-active {
  transition: all 1s;
}

.overlay-enter {
  opacity: 0;
}

.overlay-enter-to {
  opacity: 1;
}

.overlay-leave-active {
  transition: all 1s;
}

.overlay-leave {
  opacity: 1;
}

.overlay-leave-to {
  opacity: 0;
}

.sidebar-enter-active {
  transition: all 1s;
}

.sidebar-enter {
  transform: translateX(-100%);
}

.sidebar-enter-to {
  transform: translateX(0);
}

.sidebar-leave-active {
  transition: all 1s;
}

.sidebar-leave {
  transform: translateX(0);
}

.sidebar-leave-to {
  transform: translateX(-100%);
}
</style>

<script>
export default {
  props: ["visible"],
  data: function() {
    return {
      visibleLocal: true,
      touchStartX: null,
      touchMoveX: 0,
      touchEndX: null
    };
  },
  mounted() {
    document.querySelector("body").style.overflowY = "hidden";
    this.$refs.sidebar.addEventListener("transitionend", () => {
      this.$refs.sidebar.style.transition = "";
    });
  },
  destroyed() {
    document.querySelector("body").style.overflowY = "";
  },
  methods: {
    close(e) {
      this.visibleLocal = null;
      const overlay = this.$refs["overlay"];
      if (overlay) {
        overlay.style["pointer-events"] = "none";
        document.elementFromPoint(e.clientX, e.clientY).click();
      }
    },
    touchstart(e) {
      this.touchStartX = e.changedTouches[0].clientX;
    },
    touchend(e) {
      if (this.touchMoveX > 25) {
        this.$refs.sidebar.style.transition = "";
        this.visibleLocal = null;
      } else if (this.touchMoveX == 0) {
        this.$refs.sidebar.style.transition = "";
      } else {
        this.$refs.sidebar.style.transition = "transform .2s";
        this.touchMoveX = 0;
      }
    },
    touchmove(e) {
      const move = e.changedTouches[0].clientX;
      const width = window.screen.width;
      const sidebar = this.$refs.sidebar.getBoundingClientRect().width;
      const delta = ((this.touchStartX - move) * 100) / width;
      this.touchMoveX = delta;
    }
  }
};
</script>