import CosmosNewsletterSignup from "./CosmosNewsletterSignup.vue";
import IbcNewsletterSignup from "./IbcNewsletterSignup.vue";
import IconIbc from "../Icons/IconIbc";
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: "NewsletterSignup",
  component: CosmosNewsletterSignup,
  decorators: [withKnobs]
};

export const cosmos = () => ({
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
      <cosmos-newsletter-signup v-bind="{fullscreen}">
        <template v-slot:h1>
          Sign up for Cosmos updates
        </template>
        <template v-slot:p1>
          Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.
        </template>
      </cosmos-newsletter-signup>
    </div>
  `
});

export const ibc = () => ({
  props: {
    fullscreen: {
      default: boolean("fullscreen", false)
    }
  },
  components: {
    IbcNewsletterSignup,
    IconIbc
  },
  template: `
    <div>
      <ibc-newsletter-signup v-bind="{fullscreen}">
        <template v-slot:icon>
          <icon-ibc/>
        </template>
        <template v-slot:h1>
          Sign up for IBC updates
        </template>
        <template v-slot:p1>
          Get engineering, development and ecosystem updates on IBC (Inter-Blockchain Communciation protocol) - straight to your inbox.
        </template>
      </ibc-newsletter-signup>
    </div>
  `
});