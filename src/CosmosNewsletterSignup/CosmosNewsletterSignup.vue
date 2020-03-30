<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div class="image">
          <div class="image__img">
            <graphics-mail/>
          </div>
        </div>
        <div class="text">
          <transition name="forwards">
            <div class="page" v-if="step === 0" key="1">
              <div>
                <div class="h1">Stay tuned for more</div>
                <div class="p1">Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.</div>
                <div class="email__form">
                  <div class="email__form__input">
                    <input class="email__form__input__input" type="text" placeholder="Your email">
                  </div>
                  <ds-button @click.native="actionSubmit">
                    Sign up
                    <template v-slot:right>
                      <icon-arrow-right/>
                    </template>
                  </ds-button>
                </div>
                <div class="p2">
                  You can unsubscribe at any time. <a href="https://cosmos.network/privacy" target="_blank">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div class="page" v-else-if="step === 1" key="2">
              <div>
                <ds-button size="s" backgroundColor="rgba(0,0,0,0)" type="text" @click.native="actionBack">
                  <template v-slot:left>
                    <icon-chevron-left/>
                  </template>
                  Back
                </ds-button>
                <div class="h2">What are you interested in?</div>
                <div class="buttons">
                  <div class="buttons__button"></div>
                </div>
              </div>
            </div>
            <div class="page" v-else-if="step === 2" key="3">
              <div class="h1">Almost there…</div>
              <div class="p1">You should get a confirmation email for each of your selected interests. Open it up and click ‘Confirm Subscription’ so we can keep you updated.</div>
              <div class="p2">Don’t see the confirmation email yet? It might be in your spam folder. If so, make sure to mark it as “not spam”.</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #66A1FF;
}
.container {
  background: url("./BackgroundStars.svg") repeat, linear-gradient(145.11deg, #202854 9.49%, #171B39 91.06%);
  font-family: var(--ds-font-family, sans-serif);
  color: white;
  position: relative;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  grid-template-areas: "image form";
  min-height: 411px;
  align-items: center;
}
.image {
  grid-column-start: 1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.image__img {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-85%, -50%);
}
.text {
  grid-column-start: 2;
  max-width: 36rem;
  position: relative;
  width: 100%;
  height: 100%;
}
.page {
  box-sizing: border-box;
  padding-right: 1rem;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  color: white;
  margin-bottom: 1.5rem;
}
.h2 {
  font-size: 2rem;
  color: white;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 2.5rem;
}
.p1 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
}
.p2 {
  font-size: .875rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.125rem;
}
.email__form {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr min-content;
  gap: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}
.email__form__input__input {
  outline: none;
  width: 100%;
  background: rgba(255,255,255,.1);
  border: none;
  border-radius: .25rem;
  color: white;
  font-size: 1rem;
  padding: .75rem 1rem;
  line-height: 1.5;
  height: auto;
  box-sizing: border-box;
}
.email__form__input__input:focus {
  box-shadow: inset 0 0 0 1.5px #66A1FF;
  background-color: #161931;
}
.email__form__input__input::-webkit-input-placeholder,
.email__form__input__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.forwards-enter-active,
.forwards-leave-active,
.backwards-enter-active,
.backwards-leave-active {
  transition: all .5s;
}
.forwards-enter {
  opacity: 0;
  transform: translateY(20px);
}
.forwards-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.forwards-leave {
  opacity: 1;
  transform: translateY(0);
}
.forwards-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<script>
import GraphicsPlanes from "./GraphicsPlanes"
import GraphicsMail from "./GraphicsMail"
import DsButton from "./DsButton"
import IconArrowRight from "../Icons/IconArrowRight"
import IconChevronLeft from "../Icons/IconChevronLeft"

export default {
  props: {
    banner: {
      type: Boolean,
      default: true
    }
  },
  components: {
    GraphicsPlanes,
    GraphicsMail,
    DsButton,
    IconArrowRight,
    IconChevronLeft
  },
  data: function() {
    return {
      step: 0,
      transition: "forwards"
    }
  },
  methods: {
    actionSubmit() {
      this.transition = "forwards"
      this.step += 1
    },
    actionBack() {
      this.transition = "backwards"
      this.step -= 1
    }
  }
}
</script>