# @tendermint/ui

Vue components for front end projects. This project is in alpha.

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

## Development
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Run your end-to-end tests
```
yarn run test:e2e
```
## Testing

We use Prettier to lint all of our JS and Vue files. We use Jest to unit test our components.

```bash
yarn lint
yarn test
```
