import SeriesSignup from "./SeriesSignup"
import { text } from '@storybook/addon-knobs';

export default {
  title: "SeriesSignup",
  component: SeriesSignup
}

export const normal = () => ({
  components: { SeriesSignup },
  props: {
    imgSrc: {
      default: text("Image URL", "/pattern.png")
    },
  },
  template: `
    <series-signup v-bind="{ imgSrc }" />
  `
})