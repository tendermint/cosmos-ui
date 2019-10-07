<template>
  <div>
    <div class="overlay" @click.self="close" ref="overlay" tabindex="0" @keydown.esc="close">
      <div class="modal">
        <button class="icon-cross" @click="close">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l16 16m0-16L4 20" stroke="#A2A3AD" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loaded: null
    };
  },
  methods: {
    close() {
      this.$emit("input", true);
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 5000;
  background: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  padding-top: 4rem;
  justify-content: center;
  overflow: scroll;
  -webkit-overflow-scrolling: auto;
  padding-left: 3rem;
  padding-right: 3rem;
}
.modal {
  width: 100%;
  max-width: 960px;
  margin: 0 2rem 4rem;
  background: #fff;
  border-radius: 8px;
  position: relative;
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
@media screen and (max-width: 900px) {
  .overlay {
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
s