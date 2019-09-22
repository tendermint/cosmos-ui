import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Button from './Button.vue';

storiesOf('Button', module)
  .add('Default', () => ({
    components: { Button },
    template: '<button :handle-click="log">Hello Button</button>',
    methods: { log: action('clicked text button') },
  }))