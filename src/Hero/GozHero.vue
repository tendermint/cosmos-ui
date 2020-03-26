<template>
  <div class="component__hero__container" v-bind:style="{'background-image': `url(${imgSrc})`, 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center center'}">
    <div class="container">
      <div class="section">
        <img class="section__img" src="https://cosmos-network-npfcgtew9.now.sh/img/goz-logo.7b3a49f5.svg" alt="">
        <div class="section__subtitle">Compete to <b>win 100,000 ATOM</b> by building and running Cosmos Zones.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component__hero__container {
  font-family: var(--ds-font-family, sans-serif);
  position: relative;
}
.component__hero__container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(22,25,49,0) 68.75%, rgba(22,25,49,0.8) 88.02%);
}
.container {
  margin: 0 auto;
  padding: 14rem 0;
  position: relative;
  min-height: 100vh;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section__img {
  height: 7.5rem;
  width: 100%;
  max-width: 65rem;
  position: absolute;
}
.section__subtitle {
  color: var(--white-100, white);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  letter-spacing: -0.01em;
  max-width: 34.4162rem;
  width: 100%;
  position: absolute;
  bottom: 5rem;
}
</style>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "https://cosmos-network-npfcgtew9.now.sh/img/section-gameofzones.bc705fc3.jpg"
    }
  },
};
</script>