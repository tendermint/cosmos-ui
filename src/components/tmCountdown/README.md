# vue-countdown

Countdown component for Vue 2.

## Usage

    <template>
      <tm-countdown date="February 28, 2017"></tm-countdown>
    </template>

    <script>
      import { TmCountdown } from '@tendermint/ui'
      export default {
        components: {
          TmCountdown
        }
      }
    </script>

    <style>
      .tm-countdown {
        width: 320px;
      }
    </style>

## Parameters

    <tm-countdown units="short"></tm-countdown>
    // for D, H, M, S labels instead of Days, Hours, Minutes, Seconds
