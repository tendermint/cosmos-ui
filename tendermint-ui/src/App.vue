<template>
  <div id="app">
    <h2>Button with "value" prop</h2>
    <TmBtn value="Button"/>

    <h2>Button with "icon" prop</h2>
    <TmBtn value="Button" icon="info"/>

    <h2>Button with "icon" and "icon-pos" props</h2>
    <TmBtn value="Button" icon="info" icon-pos="right"/>
  </div>
</template>

<script>
import TmBtn from "./components/TmBtn/TmBtn.vue"

export default {
  name: "app",
  components: {
    TmBtn
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 650px;
  margin: 60px auto;
  text-align: left;
}
</style>
