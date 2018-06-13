import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import TmBarDiscrete from "./components/tmBarDiscrete"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmBarDiscrete
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
export {
  default as TmBarDiscrete
} from "./components/tmBarDiscrete/tmBarDiscrete.vue"
