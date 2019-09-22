import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Tooltip from './Tooltip.vue';

storiesOf('Tooltip', module)
  .add('Default', () => ({
    components: { Tooltip },
    template: '<span>This is an example of <tooltip value="blockchain">blockchain</tooltip> and <tooltip value="consensus-algorithm">consensus algorithm</tooltip><span>.',
    methods: { log: action('clicked text button') },
  }))