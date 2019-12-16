<template>
  <div v-if="visited">
    <transition name="fade" appear>
      <div class="banner-wrapper" v-if="show">
        <div class="wrapper">
          <div class="message">By using this website, you agree to our <a href="https://www.cookiesandyou.com" target="_blank" rel="noopener" style="color: #505FFF;">Cookie Policy</a>.</div>
          <span class="icon-cross" @click="close">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66669 1.66669L12.3334 12.3334M12.3334 1.66669L1.66664 12.3334"
                stroke="#A2A3AD"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import * as Cookie from 'tiny-cookie'

export default {
  props: {
    storageName: {
      type: String,
      default: 'cookie-consent-accepted'
    },
    cookieOptions: {
      type: Object,
      default: () => ({ expires: '1M' })
    },
  },
  data: function() {
    return {
      show: true,
      visited: true
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init() {
      this.checkCookieStatus();
    },
    checkCookieStatus() {
      if (Cookie.get(this.storageName, false)) {
        this.visited = false
      } else this.visited = true;
    },
    setCookieStatus() {
      Cookie.set(this.storageName, true, this.cookieOptions);
    },
    close() {
      this.show = false;
      this.setCookieStatus();
    },
  }
};
</script>

<style scoped>
.banner-wrapper {
  box-sizing: border-box;
  box-shadow: 0px 24px 40px rgba(22, 25, 49, 0.1),
    0px 10px 16px rgba(22, 25, 49, 0.08), 0px 1px 0px rgba(22, 25, 49, 0.05);
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3000;
  white-space: nowrap;
  width: 100%;
  max-width: 26.8125rem;
  background: #ffffff;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 3.4375rem;
  padding: 0.75rem 1.4375rem 0.75rem 1.4375rem;
}

.wrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.icon-cross {
  background-clip: padding-box;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 435px) {
  .banner-wrapper {
    bottom: 0;
    width: 100%;
    white-space: normal;
    border-radius: unset;
  }

  .message {
    font-size: 0.95rem;
  }
}
</style>
