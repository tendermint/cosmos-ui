<template>
  <div>
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
</template>

<style scoped>
.container {
  background-color: #2E3148;
  color: white;
  font-family: var(--ds-font-family, sans-serif);
  padding: 4rem 1rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 2px 6px rgba(0, 0, 0, 0.05), 0px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: .75rem;
  font-family: var(--ds-font-family, sans-serif);
}
.h1 {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.25rem;
  text-align: center;
  letter-spacing: -0.04em;
  color: #FFFFFF;
  margin-bottom: 2rem;
}
.p {
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
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
}
.button__icon {
  width: 2rem;
  height: 2rem;
  fill: white;
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