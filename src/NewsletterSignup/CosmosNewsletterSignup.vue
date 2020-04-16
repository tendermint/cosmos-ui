<template>
  <div>
    <div class="container" :style="{'--page-min-height': pageMinHeight, 'background': `url(${backgroundImage}) repeat, ${backgroundGradient}`}">
      <div class="wrapper">
        <div class="image">
          <div class="image__img" v-if="step === 2">
            <graphics-mail/>
          </div>
          <div class="image__img" v-else>
            <graphics-planes/>
          </div>
        </div>
        <div class="text">
          <transition-group class="page__container" :name="transition" @before-enter="setHeight">
            <div class="page" v-show="step === 0" ref="step0" key="step0">
              <div class="page__wrapper">
                <div class="icon" v-if="this.$slots['icon']">
                  <div class="icon">
                    <slot name="icon"/>
                  </div>
                </div>
                <label for="newsletter_email" class="h1" v-if="this.$slots['h1']">
                  <slot name="h1"/>
                </label>
                <div class="p1" v-if="this.$slots['p1']">
                  <slot name="p1"/>
                </div>
                <div class="email__form">
                  <div class="email__form__input">
                    <input @keypress.enter="actionSubmitEmail" id="newsletter_email" v-model="email" class="email__form__input__input" type="text" placeholder="Your email">
                  </div>
                  <ds-button class="email__form__button" size="block" @click="actionSubmitEmail" :disabled="emailInvalid">
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
            <div class="page" v-show="step === 1" ref="step1" key="step1">
              <div class="page__wrapper">
                <ds-button size="s" color="#66A1FF" backgroundColor="rgba(0,0,0,0)" type="text" @click.native="actionGoBackwards">
                  <template v-slot:left>
                    <icon-chevron-left/>
                  </template>
                  Back
                </ds-button>
                <div class="h2">What are you interested in?</div>
                <div class="card-checkbox-list">
                  <card-checkbox v-model="subscriptions.tools" theme="dark">
                    <template v-slot:icon>
                      <icon-window-code/>
                    </template>
                    <template v-slot:h1>
                      Tools & technology
                    </template>
                    Engineering and development updates on Cosmos SDK, Tendermint, IBC and more.
                  </card-checkbox>
                  <card-checkbox v-model="subscriptions.ecosystem" theme="dark">
                    <template v-slot:icon>
                      <icon-network/>
                    </template>
                    <template v-slot:h1>
                      Ecosystem & community
                    </template>
                    General news and updates from the Cosmos ecosystem and community.
                  </card-checkbox>
                </div>
                <ds-button size="block" @click="actionSubscribe" :disabled="!(subscriptions.tools || subscriptions.ecosystem)">
                  Get updates
                </ds-button>
              </div>
            </div>
            <div class="page" v-show="step === 2" ref="step2" key="step2">
              <div class="page__wrapper">
                <div class="h1">Almost there…</div>
                <div class="p1">You should get a confirmation email for each of your selected interests. Open it up and click ‘<strong>Confirm Subscription</strong>’ so we can keep you updated.</div>
                <div class="h3">Don’t see the confirmation email yet?</div>
                <div class="p2">It might be in your spam folder. If so, make sure to mark it as “not spam”.</div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #66A1FF;
  text-decoration: none;
}
.container {
  font-family: var(--ds-font-family, sans-serif);
  color: white;
  position: relative;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  align-items: center;
}
.image {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.image__img {
  position: absolute;
  left: 16%;
  width: 100%;
}
.text {
  max-width: 36rem;
  position: relative;
  width: 100%;
  overflow-y: hidden;
  transition: min-height .5s ease-in-out;
  height: 100%;
  min-height: var(--page-min-height);
}
.page {
  box-sizing: border-box;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.page__wrapper {
  width: 100%;
}
.page__container {
  display: flex;
  align-items: center;
  height: 100%;
}
.icon {
  width: 4rem;
  height: 4rem;
  margin: 1.5rem 0;
  color: var(--white-51);
}
.h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  color: var(--white-100);
  margin-bottom: 1.5rem;
  display: block;
}
.h2 {
  font-size: 2rem;
  color: white;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.h3 {
  font-size: .875rem;
  font-weight: 500;
  color: rgba(255,255,255,.8);
  text-transform: none;
  margin: initial;
  letter-spacing: initial;
  line-height: 1.25rem;
}
.p1 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
  margin-bottom: 2rem;
}
.p2 {
  font-size: .875rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.25rem;
}
.email__form {
  display: grid;
  grid-gap: 0.625rem;
  grid-template-columns: minmax(auto, 1fr) 8.9375rem;
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
  transition: all .15s;
  backdrop-filter: blur(10px);
  font-family: var(--ds-font-family, sans-serif);
  font-weight: 400;
  margin: 0;
}
.email__form__input__input:hover {
  background-color: rgba(255,255,255,0.13);
}
.email__form__input__input:focus {
  box-shadow: inset 0 0 0 1.5px #66A1FF;
  background-color: rgba(0,0,0,0.2);
}
.email__form__input__input::-webkit-input-placeholder,
.email__form__input__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  transition: color .15s;
}
.email__form__input__input:hover:not(:focus)::-webkit-input-placeholder,
.email__form__input__input:hover:not(:focus)::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.card-checkbox-list {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
}
.forwards-enter-active,
.forwards-leave-active,
.backwards-enter-active,
.backwards-leave-active {
  transition: all .5s ease-in-out;
  position: absolute;
}
.forwards-enter {
  opacity: 0;
  transform: translateY(50px);
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
  transform: translateY(-50px);
}
.backwards-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.backwards-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.backwards-leave {
  opacity: 1;
  transform: translateY(0);
}
.backwards-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
@media screen and (max-width: 719px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
  .image {
    position: unset;
  }
  .image__img {
    top: 20%;
    left: 5%;
    transform: translate(-5%, -35%);
  }
  .text {
    max-width: unset;
  }
  .page {
    padding-top: 15rem;
  }
  .h1, .p1, .p2, .h3 {
    text-align: center;
  }
}
@media screen and (max-width: 425px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .image__img {
    top: 15%;
  }
  .email__form {
    display: block;
    width: 100%;
  }
  .email__form__button {
    margin-top: 1rem;
  }
}
</style>

<script>
import GraphicsPlanes from "./GraphicsPlanes"
import GraphicsMail from "./GraphicsMail"
import DsButton from "./DsButton"
import IconArrowRight from "../Icons/IconArrowRight"
import IconChevronLeft from "../Icons/IconChevronLeft"
import IconWindowCode from "../Icons/IconWindowCode"
import IconNetwork from "../Icons/IconNetwork"
import IconIbc from "../Icons/IconIbc"
import CardCheckbox from "./CardCheckbox"
import querystring from "querystring"

export default {
  props: {
    banner: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    backgroundImage: {
      type: String,
      default: "https://cosmos-ui.netlify.com/static/media/BackgroundStars.d8924548.svg"
    },
    backgroundGradient: {
      type: String,
      default: "linear-gradient(145.11deg, #202854 9.49%, #171B39 91.06%)"
    },
  },
  watch: {
    fullscreen() {
      this.setHeight(`step${this.step}`)
    }
  },
  components: {
    GraphicsPlanes,
    GraphicsMail,
    DsButton,
    IconArrowRight,
    IconChevronLeft,
    IconWindowCode,
    IconNetwork,
    IconIbc,
    CardCheckbox
  },
  data: function() {
    return {
      step: 0,
      transition: "forwards",
      pageMinHeight: null,
      email: null,
      subscriptions: {
        tools: false,
        ecosystem: false
      },
      url: "https://zcs1.maillist-manage.com/campaigns/weboptin.zc",
      commonFormData: {
        "zc_trackCode": "ZCFORMVIEW",
        "viewFrom": "URL_ACTION",
        "submitType": "optinCustomView",
        "emailReportId": "",
        "zx": "129a50c11",
        "zcvers": "3.0",
        "oldListIds": "",
        "mode": "OptinCreateView",
        "zctd": "",
        "scriptless": "yes"
      },
      toolsFormData: {
        lD: "16352f8832a25ec1",
        zcld: "16352f8832a25ec1",
        zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbf4ad4b279730a79d"
      },
      ecosystemFormData: {
        lD: "16352f8832a25f5b",
        zcld: "16352f8832a25f5b",
        zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbcd58b642c14f9e39"
      },
      ibcFormData: {
        lD: "16352f88328053f9",
        zcld: "16352f88328053f9",
        zc_formIx: "4ef47fbb86ab6668b78ce576d7aa791940fbf6cd35f5c50c"
      }
    }
  },
  mounted() {
    this.setHeight(`step${this.step}`)
  },
  computed: {
    emailInvalid() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(String(this.email))
    }
  },
  methods: {
    actionSubmitEmail() {
      if (!this.emailInvalid) this.actionGoForwards()
    },
    actionSubscribe() {
      if (this.subscriptions.tools) this.subscribe(this.toolsFormData)
      if (this.subscriptions.ecosystem) this.subscribe(this.ecosystemFormData)
      this.actionGoForwards()
    },
    setHeight(el) {
      this.$nextTick(() => {
        const isString = s => (typeof s === 'string' || s instanceof String)
        const page = isString(el) ? this.$refs[el] : el
        const height = this.fullscreen ? "800px" : page.getBoundingClientRect().height + "px"
        this.pageMinHeight = height
      })
    },
    actionGoForwards() {
      this.transition = "forwards"
      this.step += 1
    },
    actionGoBackwards() {
      this.transition = "backwards"
      this.step -= 1
    },
    async subscribe(body) {
      const options = {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: querystring.stringify({
          "CONTACT_EMAIL": this.email,
          ...this.commonFormData,
          ...body
        })
      }
      fetch(this.url, options)
    }
  }
}
</script>
