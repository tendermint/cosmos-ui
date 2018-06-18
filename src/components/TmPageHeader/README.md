# tm-page-header

Page header component for Vue 2.

## Usage

    <template>
      <tm-page-header title="Cool Article" subtitle="Why you should read this now."></btn>
    </template>

    <script>
    import { TmPageHeader } from '@tendermint/ui'
      export default {
        components: {
          TmPageHeader
        }
      }
    </script>

    <style>
      .tm-page-header {
        background: #f00;
      }
    </style>

## Props

    title=""
    // The label of the button
    // Options: Any valid string

    subtitle=""
    // If you're using FontAwesome, places an icon to the left of the label
    // Options: Any valid string

    theme="tendermint"
    // Adds a custom button theme
    // Options: "tendermint"

    type="default
    // Page header alignment type
    // Options: "default", "center", "split"
