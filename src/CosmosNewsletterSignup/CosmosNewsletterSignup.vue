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
          <div class="page">
            <div class="h1">Stay tuned for more</div>
            <div class="p1">Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.</div>
            <div class="email__form">
              <div class="email__form__input">
                <input class="email__form__input__input" type="text" placeholder="Your email">
              </div>
              <div class="email__form__button">
                <ds-button size="m" :disabled="true">
                  Sign up
                </ds-button>
              </div>
            </div>
          </div>
          <!-- <div class="page">
            <div class="h2">What are you interested in?</div>
            <div class="buttons">
              <div class="buttons__button"></div>
            </div>
          </div>
          <div class="page">
            <div class="h1">Almost there…</div>
            <div class="p1">You should get a confirmation email for each of your selected interests. Open it up and click ‘Confirm Subscription’ so we can keep you updated.</div>
            <div class="p2">Don’t see the confirmation email yet? It might be in your spam folder. If so, make sure to mark it as “not spam”.</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  padding-right: 1rem;
}
.h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  color: white;
  margin-bottom: 1.5rem;
}
.p1 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
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
  width: 100%;
  background: rgba(255,255,255,.1);
  border: none;
  border-radius: .25rem;
  color: white;
  font-size: 1rem;
  padding: .75rem 1rem;
  line-height: 1.5;
  height: auto;
}
.email__form__input__input:focus {
  box-shadow: inset 0 0 0 1.5px #66A1FF;
  background-color: #161931;
}
.email__form__input__input::-webkit-input-placeholder,
.email__form__input__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
</style>

<script>
import GraphicsPlanes from "./GraphicsPlanes"
import GraphicsMail from "./GraphicsMail"
import Button from "../Button/Button"

export default {
  components: {
    GraphicsPlanes,
    GraphicsMail,
    "ds-button": Button
  }
}
</script>