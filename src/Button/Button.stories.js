import Button from "./Button.vue";
import IconPlus from "./IconPlus.vue";
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
};

export const normal = () => ({
  components: { 'cosmos-button': Button, IconPlus },
  props: {
    label: {
      default: text("Label", "Button")
    },
    type: {
      default: select(
        "Type",
        ["contained", "outlined", "text"],
        "contained"
      )
    },
    size: {
      default: select(
        "Size",
        ["small", "medium", "large"],
        "medium"
      )
    },
    width: {
      default: text("Width", "")
    },
  },
  methods: {
    click(e) {
      console.log(e)
    }
  },
  template: `
    <div>
      <h1>Button</h1>
      <div style="display: grid; justify-items: flex-start; justify-content: flex-start; grid-auto-flow: rows; grid-gap: 1rem;">
        <cosmos-button v-bind="{label, type, size, width}"></cosmos-button>
        <cosmos-button v-bind="{label, type, size, width}">
          <template v-slot:iconLeft>
            <icon-plus/>
          </template>
        </cosmos-button>
        <cosmos-button v-bind="{label, type, size, width}">
          <template v-slot:iconRight>
            <icon-plus/>
          </template>
        </cosmos-button>
      </div>
    </div>

  `
});
