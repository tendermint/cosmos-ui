<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div class="icon">
          <icon-letter-heart class="icon__icon" v-if="state === 'default'"/>
          <icon-paper-plane class="icon__icon icon__icon__active" v-if="state === 'success'"/>
          <icon-error class="icon__icon icon__icon__error" v-if="state === 'error'"/>
        </div>
        <div class="h1" v-if="state === 'success'">
          Thanks! Now check your inbox.
        </div>
        <div class="h1" v-else-if="state === 'error'">
          Uh oh! Something went wrong.
        </div>
        <div class="h1" v-else>
          Stay tuned for GoZ updates
        </div>
        <div class="p" v-if="state === 'success'">
          You should get a confirmation email for each of your selected interests. Open it up and click ‘<strong>Confirm Subscription</strong>’ so we can keep you updated.
        </div>
        <div class="p" v-else-if="state === 'error'">
          Try refreshing the page and submitting your email address again.
        </div>
        <div class="p" v-else>
          More information on the Game of Zones competition will be coming soon. Subscribe to stay updated by email.
        </div>
        <div class="form__wrapper" v-if="state === 'default'">
          <form :action="url" method="POST" target="_blank" rel="noreferrer noopener">
            <div class="form">
              <div class="form__input">
                <input name="CONTACT_EMAIL" v-model="email" class="form__input__input" type="email" placeholder="Your email">
              </div>
              <text-button type="submit" @click.native="submit" :disabled="!emailValid" class="form__button" size="m">
                <div class="form__button__content">
                  Get updates
                  <icon-arrow-right class="form__button__icon"/>
                </div>
              </text-button>
            </div>
            <div class="form__p">
              You can unsubscribe at any time.
            </div>
            <input type="hidden" name="submitType" value="optinCustomView"/>
            <input type="hidden" name="lD" value="16352f88325b24db"/>
            <input type="hidden" name="emailReportId" value=""/>
            <input type="hidden" name="zx" value="129a50c11"/>
            <input type="hidden" name="oldListIds" value=""/>
            <input type="hidden" name="mode" value="OptinCreateView"/>
            <input type="hidden" name="zcld" value="16352f88325b24db"/>
            <input type="hidden" name="zc_Url" value="zcs1.maillist-manage.com"/>
            <input type="hidden" name="new_optin_response_in" value="1"/>
            <input type="hidden" name="duplicate_optin_response_in" value="1"/>
            <input type="hidden" name="zc_formIx" value="4ef47fbb86ab66681d4cb3275283cf70ab16e7ccaa8dd327"/>
            <input type="hidden" name="scriptless" value="yes"/>
            <input type="hidden" name="zcvers" value="2.0"/>
          </form>
        </div>
        <div class="box" v-else-if="state === 'success'">
          <div class="box__h1">
            Don’t see the confirmation email yet?
          </div>
          <div class="box__p">
            It might be in your spam folder. If so, make sure to mark it as “not spam”.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #2e3148;
  color: white;
  font-family: var(--ds-font-family, sans-serif);
  padding: 4rem 1rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 2px 6px rgba(0, 0, 0, 0.05), 0px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: .75rem;
}
.wrapper {
  max-width: 44rem;
  margin-left: auto;
  margin-right: auto;
}
.icon {
  display: flex;
  justify-content: center;
}
.icon__icon {
  stroke: white;
  opacity: .32;
  width: 4rem;
  height: 4rem;
}
.icon__icon.icon__icon__active {
  stroke: #66A1FF;
  opacity: 1;
}
.icon__icon.icon__icon__error {
  stroke: #DD285E;
  opacity: 1;
}
.h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.p {
  text-align: center;
  line-height: 1.25;
  color: rgba(255,255,255,.8);
}
.form {
  margin-top: 3rem;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: 1fr min-content;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
}
.form__input__input {
  background: none;
  border: 1px solid rgba(255,255,255,.32);
  padding: .75rem 1rem;
  font-size: 1rem;
  font-family: var(--ds-font-family, sans-serif);
  line-height: 1.5;
  border-radius: .25rem;
  width: 100%;
  box-sizing: border-box;
  color: white;
}
.form__input__input:focus {
  outline: none;
  border: 1px solid #66A1FF;
}
.form__button__content {
  display: grid;
  white-space: nowrap;
  gap: .75rem;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.form__button__icon {
  fill: white;
  width: 1.5rem;
  height: 1.5rem;
}
.form__input__input::placeholder {
  color: rgba(255,255,255,.51);
}
.form__p {
  text-align: center;
  color: rgba(255,255,255,.51);
  margin-top: 1.5rem;
  font-size: .8125rem;
}
.box {
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2.5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  text-align: center;
  letter-spacing: 0.01em;
}
.box__h1 {
  font-weight: 500;
}
.box__p {
  color: rgba(255,255,255,.8);
}
</style>

<script>
import IconLetterHeart from "./IconLetterHeart"
import IconArrowRight from "./IconArrowRight"
import IconPaperPlane from "./IconPaperPlane"
import IconError from "./IconError"
import Button from "../Button/Button"

export default {
  components: {
    IconLetterHeart,
    IconArrowRight,
    IconPaperPlane,
    IconError,
    "text-button": Button
  },
  data: function() {
    return {
      email: null,
      state: "default",
      url: "https://zcs1.maillist-manage.com/campaigns/weboptin.zc"
    }
  },
  computed: {
    emailValid() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email))
    }
  },
  methods: {
    submit() {
      this.state = 'success'
    }
  },
}
</script>