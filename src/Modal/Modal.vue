<template>
  <div>
    <div class="wrapper" v-if="visible">
      <transition name="overlay" @after-leave="close" appear>
        <div class="overlay" v-if="visible && show" :style="{'--overlay-background': overlay}"></div>
      </transition>
      <div class="modal-wrapper" @click.self="show = false" @keydown.esc="close">
        <transition name="modal" appear>
          <div class="modal" v-if="visible && show">
            <slot></slot>
            <button
              :class="['icon-cross', {'icon-cross__dark': button == 'dark'}]"
              @click="show = false"
            >
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4l16 16m0-16L4 20" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: String,
      default: "rgba(0, 0, 0, 0.25)"
    },
    button: {
      type: String,
      default: "light"
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
      this.$emit("input", true);
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.overlay {
  background: var(--overlay-background);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: all;
}

.modal-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  padding-right: 4rem;
  padding-left: 4rem;
}

.modal {
  justify-self: center;
  background: #fff;
  border-radius: 8px;
  position: relative;
  pointer-events: all;
  margin-top: 4rem;
  margin-bottom: 4rem;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
}

.icon-cross {
  position: absolute;
  right: -1.5rem;
  top: -1.5rem;
  padding: 0.5rem;
  background: #eff0f5;
  background-clip: padding-box;
  border-radius: 1000px;
  box-shadow: 0px 12px 48px rgba(22, 25, 49, 0.2);
  border: 1px solid rgba(176, 180, 207, 0.2);
  outline: none;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: box-shadow 0.3s, background 0.3s;
  stroke: #a2a3ad;
}

.icon-cross.icon-cross__dark {
  background: #222;
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.75);
  border: none;
  stroke: #555;
}

.icon-cross.icon-cross__dark:hover,
.icon-cross.icon-cross__dark:focus {
  background: #333;
  box-shadow: none;
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.75);
  border: none;
  stroke: #777;
}

.icon-cross:hover,
.icon-cross:focus {
  background-color: #fff;
  box-shadow: 0px 20px 48px rgba(22, 25, 49, 0.3);
  transition: box-shadow 0.1s, background 0.1s;
}
.icon-cross:active {
  background-color: #eff0f5;
  transition: none;
}

.overlay-enter-active {
  transition: opacity 2s;
}

.overlay-leave-active {
  transition: opacity 0.75s;
}

.overlay-enter {
  opacity: 0;
}

.overlay-enter-to {
  opacity: 1;
}

.overlay-leave {
  opacity: 1;
}

.overlay-leave-to {
  opacity: 0;
}

.modal-enter-active {
  transition: opacity 0.25s, transform 0.75s;
}

.modal-leave-active {
  transition: opacity 0.75s, transform 1s;
}

.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-to {
  opacity: 1;
  transform: scale(1);
}

.modal-leave {
  opacity: 1;
  transform: scale(1);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media screen and (max-width: 900px) {
  .wrapper {
    padding: 0;
  }
  .icon-cross {
    position: fixed;
    box-shadow: 0px 12px 48px rgba(22, 25, 49, 0.2);
    border-radius: 1000px;
    border: 1px solid #fff;
    top: 1rem;
    right: 1rem;
    background-color: #fff;
  }
  .aside {
    margin-top: 3rem;
  }
  .modal {
    width: 100%;
    margin: 0;
    border-radius: 0;
    min-height: 100vh;
  }

  .modal-wrapper {
    display: block;
    padding-left: 0;
    padding-right: 0;
  }
  .container {
    display: block;
    overflow: hidden;
  }
  .content {
    margin-top: 3rem;
  }
  .content__paragraph {
    max-width: initial;
  }
}
</style>