# @tendermint/ui

Vue components for front end projects. This project is in early alpha.

## Install

```bash
yarn add @tendermint/ui
```

## Use

In another Vue component:

```vue
<template>
  <tm-field value="Hello World" />
</template>

<script>
import { TmField } from "@tendermint/ui"
export default {
  name: "Parent Component",
  components: {
    TmField
  }
}
</script>
```

## Test

We use Prettier to lint all of our JS and Vue files. We use Jest to unit test our components.

```bash
yarn lint
yarn test
```

## Components List

View the `./src/components` directory. More details coming soon.
