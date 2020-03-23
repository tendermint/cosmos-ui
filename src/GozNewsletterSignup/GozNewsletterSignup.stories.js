import GozNewsletterSignup from "./GozNewsletterSignup"
import { text } from '@storybook/addon-knobs';

export default {
  title: "GozNewsletterSignup",
  component: GozNewsletterSignup
}

export const normal = () => ({
  components: { GozNewsletterSignup },
  props: {
    imgSrc: {
      default: text("Image URL", "/pattern.png")
    },
  },
  template: `
    <goz-newsletter-signup v-bind="{ imgSrc }" />
  `
})