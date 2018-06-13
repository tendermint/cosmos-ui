import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import { TmKeyValues } from "./components/tmKeyValues"
import { TmKeyValue } from "./components/tmKeyValues"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmKeyValue,
  TmKeyValues
}

TendermintComponents.install = Vue =>
  Object.keys(TendermintComponents)
    .filter(component => component !== "install")
    .map(component => TendermintComponents[component])
    .forEach(Vue.use)

export default TendermintComponents

export {
  default as TmHelloWorld
} from "./components/tmHelloWorld/tmHelloWorld.vue"
export { default as TmField } from "./components/tmField/tmField.vue"
export { default as TmKeyValue } from "./components/TmKeyValues/TmKeyValue.vue"
export {
  default as TmKeyValues
} from "./components/TmKeyValues/TmKeyValues.vue"
