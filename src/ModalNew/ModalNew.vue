<template>
  <div v-if="open">
    <div class="overlay"></div>
    <div class="modal__container"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend">
      <div :class="['modal', `modal__${position}`]" :style="modalStyle" @transitionend="transitionend">
        <div>startX: {{startX}}</div>
        <div>startY: {{startY}}</div>
        <div>currentX: {{currentX}}</div>
        <div>currentY: {{currentY}}</div>
        <div>transformX: {{transformX}}</div>
        <slot/>
        <button @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  background-color: rgba(0,0,0,.25);
  top: 0;
  left: 0;
  right: 0;
  bottom: -20%;
}

.modal__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal {
  position: absolute;
  background: white;
  width: 200px;
  transition: var(--modal-transition);
  transform: translateX(var(--modal-transform-x))
}

.modal__center {
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.modal__left {
  left: 0;
  top: 0;
  bottom: 0;
}

.modal__right {
  right: 0;
  top: 0;
  bottom: 0;
}

.modal__top {
  left: 0;
  top: 0;
  width: 100vw;
}

.modal__bottom {
  left: 0;
  width: 100vw;
  bottom: 0;
}
</style>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "center"
    }
  },
  watch: {
    open(isOpened) {
      if (isOpened) {
        this.currentX = null
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.removeProperty('overflow');
      }
    }
  },
  data: function() {
    return {
      startX: null,
      startY: null,
      currentX: null,
      currentY: null,
      modalTransition: true,
    }
  },
  computed: {
    modalStyle() {
      return {
        '--modal-transform-x': this.transformX + 'px',
        '--modal-transition': this.modalTransition ? 'transform .25s' : 'none'
      }
    },
    transformX() {
      const delta = this.currentX - this.startX
      if (this.position === "left") {
        return delta < 0 ? delta : 0
      }
      if (this.position === "right") {
        return delta > 0 ? delta : 0
      }
    }
  },
  methods: {
    touchstart(e) {
      this.startX = e.touches[0].pageX
      this.startY = e.touches[0].pageY
      this.currentX = e.touches[0].pageX
      this.currentY = e.touches[0].pageY
      this.modalTransition = false
    },
    touchmove(e) {
      this.currentX = e.touches[0].pageX
      this.currentY = e.touches[0].pageY
    },
    touchend(e) {
      this.startX = null
      this.startY = null
      this.currentX = null
      this.currentY = null
      this.modalTransition = true
    },
    close() {
      this.startX = 0
      this.currentX = 200
    },
    transitionend() {
      if (this.currentX === 200) this.$emit("open", false)
    }
  }
}
</script>