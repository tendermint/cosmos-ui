import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button :handle-click="log">Hello Button</my-button>',
    methods: { log: action('clicked text button') },
  }))
  .add('with emoji', () => ({
    components: { MyButton },
    template: '<my-button :handle-click="log">🚀 🌌</my-button>',
    methods: { log: action('clicked emoji button') },
  }));