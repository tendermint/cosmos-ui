<template>
  <div>
    <div :class="['container', `value__${value}`]" @click="$emit('input', !value)">
      <div class="icon">
        <div class="icon__image">
          <slot name="icon"/>
        </div>
      </div>
      <div class="body">
        <div>
          <div class="h1" v-if="$slots.h1">
            <slot name="h1"/>
          </div>
          <div class="p">
            <slot/>
          </div>
        </div>
      </div>
      <div class="checkbox">
        <div class="checkbox__icon">
          <icon-check v-if="value"/>
          <icon-uncheck v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 25% 60% 15%;
  min-height: 7.25rem;
  user-select: none;
  cursor: pointer;
  transition: background-color .25s;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
::v-deep .container:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
::v-deep .value__false.container:hover .checkbox__icon {
  stroke: rgba(255, 255, 255, 0.8);
}
.container:active {
  background-color: rgba(255, 255, 255, 0.1);
}
.value__true.container {
  background-color: #161931
}
.icon {
  grid-column-start: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon__image {
  width: 4rem;
  height: 4rem;
  stroke: rgba(255, 255, 255, 0.5);
  fill: none;
  margin: 1rem;
}
.value__true .icon__image {
  stroke: #66A1FF;
}
::v-deep .container:active .icon__image,
::v-deep .container:active .h1,
::v-deep .container:active .p,
::v-deep .container:active .checkbox {
  opacity: .6;
}
.body {
  grid-column-start: 2;
  display: flex;
  align-items: center;
}
.h1 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin-bottom: .5rem;
}
.p {
  font-size: .875rem;
  line-height: 1.25rem;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
}
.checkbox {
  grid-column-start: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox__icon {
  width: 1.5rem;
  height: 1.5rem;
}
.value__true .checkbox__icon {
  fill: #66A1FF;
}
.value__false .checkbox__icon {
  fill: none;
  stroke: rgba(255, 255, 255, 0.32);
}
</style>

<script>
import IconCheck from "../Icons/IconCheck"
import IconUncheck from "../Icons/IconUncheck"

export default {
  components: {
    IconCheck,
    IconUncheck
  },
  props: {
    theme: {
      type: String,
      default: "light"
    },
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>