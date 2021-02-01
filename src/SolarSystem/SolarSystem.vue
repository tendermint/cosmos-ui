<template>
  <div>
    <div class="container">
      <div v-for="c in 8" :key="c" class="star__container" :style="{'--delay': `${5 * random()}s`}">
        <div v-for="s in 100" :key="s" class="star" :style="{...randomColor(), '--pos-x': `${100 * random()}%`, '--pos-y': `${100 * random()}%`}"></div>
      </div>
      <div class="system">
        <div class="sun__container">
          <div class="sun">
            <solar-hex class="planet__hex" />
            <svg class="planet__logo" width="100%" height="100%" viewBox="0 0 718 681" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M490.978 279.716C449.164 263.231 404.133 254.621 358.654 254.621C263.067 254.621 173.157 292.148 105.489 360.287C38.1141 428.126 0.682105 518.24 0.0797784 614.029L0 626.892L11.177 633.249C65.0453 663.899 125.964 680.024 187.695 680.024C189.392 680.024 191.103 680.012 192.804 679.986C246.615 679.211 299.851 666.272 348.113 642.391C332.895 633.878 318.312 624.292 304.448 613.723C220.326 646.863 124.987 642.778 44.3029 601.271C52.1511 433.178 190.545 298.531 358.654 298.531C405.41 298.531 451.594 308.874 493.304 328.528C493.84 312.255 493.068 295.945 490.978 279.716Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M717.227 611.043C715.946 491.953 657.955 383.299 561.288 317.112C561.36 334.539 560.195 351.955 557.802 369.268C626.491 425.353 668.366 507.94 672.948 598.421C524.779 674.769 339.995 621.3 255.822 475.405C233.088 435.995 219.148 391.933 215.052 346.911C200.751 354.709 187.093 363.681 174.199 373.74C180.998 417.068 195.773 459.144 217.822 497.36C265.703 580.352 342.681 639.853 434.57 664.895C465.745 673.394 497.443 677.597 528.966 677.597C590.385 677.597 651.148 661.638 706.13 630.368L717.362 623.975L717.227 611.043Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M371.328 6.50071L360.245 0L349.16 6.49074C294.394 38.5412 248.894 84.4933 217.577 139.375C190.534 186.772 174.539 239.866 170.787 294.061C185.78 285.149 201.398 277.313 217.547 270.617C231.459 181.278 283.412 100.535 360.225 51.1934C501.303 141.904 547.698 329.982 462.958 476.861C440.009 516.64 408.63 551.032 371.456 577.438C385.341 585.905 399.921 593.256 415.071 599.403C449.437 571.54 478.694 537.408 500.958 498.817C599.897 327.327 541.743 106.476 371.328 6.50071Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M360.026 381.22C339.814 381.22 323.373 397.674 323.373 417.899C323.373 438.124 339.814 454.578 360.026 454.578C380.237 454.578 396.682 438.124 396.682 417.899C396.682 397.674 380.237 381.22 360.026 381.22ZM360.026 498.488C315.619 498.488 279.495 462.338 279.495 417.899C279.495 373.462 315.619 337.31 360.026 337.31C404.432 337.31 440.56 373.462 440.56 417.899C440.56 462.338 404.432 498.488 360.026 498.488Z"/>
            </svg>
          </div>
        </div>
        <div v-for="s in 3" :key="s" class="orbit__container" :style="{'--orbit-width': `${300 * s + 300}px`, '--orbit-random': random() * 100 + 'deg', '--orbit-duration': random() * 2 + 2 + 's'}">
          <div class="orbit">
            <div v-for="i in 3" :key="i" :style="{'--planet-offset': i * 360 / 3 + 'deg'}" class="planet__container">
              <div class="connection">
                <div class="connection__arrow">
                  <div class="connection__arrow__item"></div>
                </div>
                <div class="connection__container" :style="{'background-image': connectionGradient}"></div>
              </div>
              <div class="planet">
                <div class="planet__content">
                  <div class="planet__content__wrapper">
                    <div class="planet__block">
                      <solar-hex class="planet__hex"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.star__container {
  animation: flicker 2s infinite alternate-reverse;
  animation-delay: var(--delay);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sun {
  box-shadow: 0 0 200px 100px rgba(0,122,255,.1), 0 0 20px -3px rgba(0,122,255,.35), inset 0 0 20px -3px rgba(0,122,255,.35);
  border: 2px solid rgba(0,122,255,.65);
  width: 200px;
  border-radius: 50%;
  height: 200px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: radial-gradient(#0a27ff,#000c69);
  display: flex;
  align-items: center;
  justify-content: center;
}

.star {
  width: 3px;
  height: 3px;
  transform: rotate(45deg);
  background: rgba(var(--r), var(--g), var(--b), .5);
  position: absolute;
  left: var(--pos-x);
  top: var(--pos-y);
}

.container {
  color: white;
  background: #020727;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  animation: start 5s ease-in;
}

.canvas__stars {
  position: absolute;
  top: 0;
  left: 0;
}

.system {
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  pointer-events: none;
}

@keyframes start {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.container:hover .system {
  transform: translate(-50%, -50%) scale(1);
}

.connection {
  width: calc(var(--orbit-width) / 2);
  position: absolute;
  transform: translate(-100%, -50%);
  left: 0;
  top: 0;
}

.connection__container {
  z-index: -1000;
  box-shadow: 0 0 10px 1px rgba(0,122,255,1), inset 0 0 10px 0 rgba(0,122,255,.75);
  width: 100%;
  height: 2px;
  position: relative;
  background-position: 0px;
  animation: connection 7s infinite linear;
  background-color: rgba(255,255,255,.3);
}

.connection__arrow {
  width: 100%;
  position: absolute;
  transform: translate(0%, -50%)
}

.connection__arrow__item {
  width: 10px;
  height: 5px;
  border-radius: 50%;
  background: white;
  animation: var(--orbit-duration) arrow infinite cubic-bezier(0.455, 0.03, 0.515, 0.955) alternate;
  box-shadow: 0 0 20px 10px rgba(255,255,255,.5);
}

@keyframes arrow {
  from {
    opacity: .5;
    transform: translateX(0) scaleY(0) scalex(1)
  }

  to {
    opacity: 1;
    transform: translateX(calc(var(--orbit-width) / 2)) scaleY(1) scalex(3)
  }
}

@keyframes connection {
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: var(--orbit-width)
  }
}

.orbit__container {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(var(--orbit-random));
  position: absolute;
  transform-origin: center center;
}

.orbit {
  border-radius: 50%;
  border: 2px solid rgba(0,122,255,.35);
  width: var(--orbit-width);
  height: var(--orbit-width);
  box-shadow: 0 0 20px -3px rgba(0,122,255,.35), inset 0 0 20px -3px rgba(0,122,255,.35);
  transform-origin: center;
  animation: rotation 120s linear infinite;
}

.planet__container {
  transform-origin: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: rotate(calc(var(--planet-offset)));
}

.planet {
  z-index: 1000;
  width: 140px;
  height: 140px;
  background: linear-gradient(to bottom, rgb(6, 16, 87), rgb(13, 28, 148));
  box-shadow: 0 0 20px 5px rgba(0,122,255,.35), 0 0 10px 5px #020727, inset 0 0 20px -3px rgba(0,122,255,.35);
  border: 2px solid rgba(0,122,255,.65);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% - var(--orbit-width) / 2), -50%) rotate(calc(-1 * var(--planet-offset)));
  pointer-events: all;
}

.planet__content {
  width: 100%;
  height: 100%;
  transform-origin: center;
  animation: rotation 120s linear reverse infinite;
}

.planet__content__wrapper {
  width: 100%;
  height: 100%;
  transform: rotate(calc(-1 * var(--orbit-random)));
  position: relative;
}

.planet__block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}

.planet__hex {
  width: 75%;
  height: 75%;
  fill: rgba(0,122,255,1);
}

.planet__logo {
  position: absolute;
  width: 27px;
  fill: rgb(16, 177, 16);
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
}

@keyframes flicker {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

<script>
import SolarHex from "./SolarHex.vue"

export default {
  components: { SolarHex },
  computed: {
    connectionGradient() {
      return `linear-gradient(to left, ${Array(100).fill().map(Math.random).map(n => n > .5 ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0)')})`
    }
  },
  methods: {
    random() {
      return Math.random()
    },
    randomColor() {
      const rand = Math.random()
      return {
        '--r': rand > .75 ? 255 : Math.random() * 255,
        '--g': rand > .75 ? 255 : Math.random() * 255,
        '--b': rand > .75 ? 255: Math.random() * 255,
      }
    },
  }
}
</script>