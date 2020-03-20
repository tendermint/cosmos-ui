<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="h1">Join the discussion</div>
        <div class="p">Get involved in the Game of Zones Riot chat room.</div>
        <div class="footer">
          <text-button tag="a" href="https://discord.gg/cr7N47p" target="_blank" size="l">
            <div class="button">
              Discuss GoZ
              <icon-arrow-right class="button__icon"/>
            </div>
          </text-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding-left: 1rem;
  padding-right: 1rem;
}
.container {
  background-color: var(--grey-23);
  font-family: var(--ds-font-family, sans-serif);
  padding: 4rem 1rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 2px 6px rgba(0, 0, 0, 0.05), 0px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: .75rem;
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
}
.h1 {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.25rem;
  text-align: center;
  letter-spacing: -0.04em;
  color: var(--white-100);
  margin-bottom: 2rem;
}
.p {
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  color: var(--white-80);
}
.footer {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
.button {
  display: grid;
  white-space: nowrap;
  gap: .75rem;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: var(--white-100);
}
.button__icon {
  width: 2rem;
  height: 2rem;
  fill: var(--white-100);
}
@media screen and (max-width: 600px) {
  .container {
    padding: 3rem 1rem;
  }
  .h1 {
    font-size: 1.5rem;
  }
  .p {
    font-size: 1.05rem;
  }
  .button__size__l {
    font-size: 1.05rem;
  }
  .footer {
    margin-top: 2rem;
  }
}
</style>

<script>
import Button from "../Button/Button"
import IconArrowRight from "./IconArrowRight"

export default {
  components: {
    IconArrowRight,
    "text-button": Button
  }
}
</script>