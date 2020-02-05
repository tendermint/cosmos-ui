import Button from "./Button.vue";
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
};

export const normal = () => ({
  components: { 'cosmos-button': Button },
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
    }
  },
  methods: {
    click(e) {
      console.log(e)
    }
  },
  template: `
    <div>
      <h1>Button</h1>
      <cosmos-button v-bind="{label, type, size, width}"/>
    </div>
  `
});
