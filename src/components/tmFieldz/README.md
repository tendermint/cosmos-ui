# vue-field

Flexible input, textarea, and select component for Vue 2.

## Usage

```vue
<template>
  <field v-model="email" placeholder="Enter your email"></field>
</template>

<script>
  import { Field } from '@tendermint/ui'
  export default {
    components: {
      Field
    },
    data () {
      return {
        email: ''
      }
    }
  }
</script>

<style>
  .ni-field {
    width: 320px;
  }
</style>
```

## Props

```
value=""
// The value of the field field, also can be used with v-model
// Options: Any valid string

placeholder=""
// The field field placeholder
// Options: Any valid string

size=""
// Chanage the size of the field field
// Options: "lg", "sm"

required
// Self-explanatory

theme="tendermint"
// Adds a custom field field theme
// Options: "tendermint"

type="text"
// Input field type (mainly used for HTML forms)
// Options: "text", "email", "tel", "num", "password", "textarea"
```
