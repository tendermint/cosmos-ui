import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import TmPageSplit from "./components/tmPageSplit"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmPageSplit
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
  default as TmPageSplit
} from "./components/tmPageSplit/tmPageSplit.vue"
