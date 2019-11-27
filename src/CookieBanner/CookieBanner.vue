<template>
  <transition name="fade" appear>
    <div class="banner-wrapper" v-if="visible && show">
      <div class="wrapper" v-if="visible && show">
        <slot></slot>
        <span class="icon-cross" @click="show = false">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4l16 16m0-16L4 20" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.banner-wrapper {
  box-sizing: border-box;
  box-shadow: rgba(196, 196, 196, 0.25) 0rem 0.0625rem 0.25rem;
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3000;
  white-space: nowrap;
  width: 100%;
  max-width: 26.8125rem;
  background: rgb(255, 255, 255);
  border-width: 0.0625rem;
  border-style: solid;
  border-color: rgb(217, 217, 217);
  border-image: initial;
  border-radius: 3.4375rem;
  padding: 0.625rem 0.9375rem 0.75rem 1.4375rem;
}

.wrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.icon-cross {
  position: absolute;
  right: -1.4rem;
  top: -1.4rem;
  padding: 0.5rem;
  background: #eff0f5;
  background-clip: padding-box;
  border-radius: 1000px;
  box-shadow: 0px 12px 48px rgba(22, 25, 49, 0.2);
  border: 1px solid rgba(176, 180, 207, 0.2);
  outline: none;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: box-shadow 0.3s, background 0.3s;
  stroke: #a2a3ad;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>