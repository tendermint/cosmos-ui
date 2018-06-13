import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import { TmModule } from "./components/tmModules"
import { TmModules } from "./components/tmModules"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmModule,
  TmModules
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
export { default as TmModule } from "./components/tmModules/tmModule.vue"
export { default as TmModules } from "./components/tmModules/tmModules.vue"
