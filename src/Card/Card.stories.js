import Card from "./Card.vue";
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs]
};

export const normal = () => ({
  components: { Card },
  template: `
    <div>
      <card/>
    </div>
  `
});
