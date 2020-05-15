import CosmosNewsletterSignup from "./CosmosNewsletterSignup.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "NewsletterSignup",
  component: CosmosNewsletterSignup,
  decorators: [withKnobs],
};

export const cosmos = () => ({
  props: {
    fullscreen: {
      default: text("fullscreen", "100vh"),
    },
  },
  data() {
    return {
      value: {
        h1: "Sign up for Cosmos updates",
        h2:
          "Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.",
        topics: [
          {
            h1: "Tools & technology",
            h2:
              "Engineering and development updates on Cosmos SDK, Tendermint, IBC and more.",
            zcld: "16352f8832a25ec1",
            zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbf4ad4b279730a79d",
            svg: "/icon-window-code.svg",
          },
          {
            h1: "Ecosystem & community",
            h2:
              "General news and updates from the Cosmos ecosystem and community.",
            zcld: "16352f8832a25f5b",
            zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbcd58b642c14f9e39",
            svg: "/icon-network.svg",
          },
        ],
      },
    };
  },
  components: {
    CosmosNewsletterSignup,
  },
  template: `
    <div>
      <cosmos-newsletter-signup v-bind="{...value, fullscreen}"/>
    </div>
  `,
});

export const ibc = () => ({
  props: {
    fullscreen: {
      default: boolean("fullscreen", false),
    },
  },
  components: {
    CosmosNewsletterSignup,
  },
  data() {
    return {
      value: {
        h1: "Sign up for IBC updates",
        h2:
          "Get engineering, development and ecosystem updates on IBC (Inter-Blockchain Communciation protocol) - straight to your inbox.",
        zcld: "16352f88328053f9",
        zc_formIx: "4ef47fbb86ab6668b78ce576d7aa791940fbf6cd35f5c50c",
        svg: "/icon-ibc.svg",
        background:
          'url("/img/bg-tile-stars.svg") repeat, linear-gradient(137.58deg, #161931 9.49%, #2D1731 91.06%)',
      },
    };
  },
  template: `
    <div>
      <cosmos-newsletter-signup v-bind="{...value, fullscreen}"/>
    </div>
  `,
});

export const tools = () => ({
  props: {
    fullscreen: {
      default: boolean("fullscreen", false),
    },
  },
  components: {
    CosmosNewsletterSignup,
  },
  data() {
    return {
      value: {
        h1: "Get Cosmos tools & technology updates",
        h2:
          "Get engineering and development updates on Cosmos SDK, Tendermint Core, IBC and more - straight to your inbox.",
        zcld: "16352f8832a25ec1",
        zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbf4ad4b279730a79d",
        svg: "/icon-terminal-window.svg",
      },
    };
  },
  template: `
    <div>
      <cosmos-newsletter-signup v-bind="{...value, fullscreen}"/>
    </div>
  `,
});
