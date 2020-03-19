<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div class="icon">
          <div>
            <icon-letter-heart class="icon__icon"/>
          </div>
        </div>
        <div class="h1">
          Stay tuned for GoZ updates
        </div>
        <div class="p">
          More information on the Game of Zones competition will be coming soon. Subscribe to stay updated by email.
        </div>
        <div class="form__wrapper">
          <div class="form">
            <div class="form__input">
              <input class="form__input__input" type="text" placeholder="Your email">
            </div>
            <text-button class="form__button" size="m">
              <div class="form__button__content">
                Get updates
                <icon-arrow-right class="form__button__icon"/>
              </div>
            </text-button>
          </div>
          <div class="form__p">
            You can unsubscribe at any time.
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
</style>

<script>
import IconLetterHeart from "./IconLetterHeart"
import IconArrowRight from "./IconArrowRight"
import Button from "../Button/Button"

export default {
  components: {
    IconLetterHeart,
    IconArrowRight,
    "text-button": Button
  }
}
</script>