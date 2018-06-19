# tm-form-msg

Form input errors and descriptions for Vue 2.

## Usage

    <template>
      <tm-form-msg name="Display Name" type="required" v-if="!$v.fields.displayName.required"></tm-form-msg>
      <tm-form-msg name="Display Name" type="length" min="2" max="20" v-if="!$v.fields.displayName.menLength || !$v.fields.displayName.maxLength"></tm-form-msg>
    </template>

    <script>
    import { TmFormMsg } from '@tendermint/ui'
      export default {
        components: {
          TmFormMsg
        }
      }
    </script>

    <style>
      .tm-form-msg {
        font-size 1.25rem;
      }
    </style>

## Props

TODO! For now, read the `./src/index.vue` file.
