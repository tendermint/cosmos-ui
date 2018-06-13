# tm-page-split

Header and content split page component for Vue 2.

## Usage

    <template>
      <tm-page-split>
        <header>Just a cool header!</header>
        <div class="body">Just some body text.</div>
      </tm-page-split>
    </template>

    <script>
      import { TmPageSplit } from '@tendermint/ui'
      export default {
        components: {
          TmPageSplit
        }
      }
    </script>

    <style>
      .tm-page-split {
        background: #f00;
      }
    </style>
