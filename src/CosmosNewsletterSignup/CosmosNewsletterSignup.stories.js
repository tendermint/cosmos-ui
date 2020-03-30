import CosmosNewsletterSignup from "./CosmosNewsletterSignup.vue";
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: "CosmosNewsletterSignup",
  component: CosmosNewsletterSignup,
  decorators: [withKnobs]
};

export const normal = () => ({
  props: {
    fullscreen: {
      default: boolean("fullscreen", false)
    }
  },
  components: {
    CosmosNewsletterSignup
  },
  template: `
    <div>
      <cosmos-newsletter-signup v-bind="{fullscreen}"/>
    </div>
  `
});