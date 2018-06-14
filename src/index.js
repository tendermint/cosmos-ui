import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import TmPageHeader from "./components/tmPageHeader"
import TmNotifications from "./components/tmNotifications"
import TmCountdown from "./components/tmCountdown"
import { TmKeyValues } from "./components/tmKeyValues"
import { TmKeyValue } from "./components/tmKeyValues"
import { TmModule } from "./components/tmModules"
import { TmModules } from "./components/tmModules"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmPageHeader,
  TmNotifications,
  TmCountdown,
  TmKeyValue,
  TmKeyValues,
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
export {
  default as TmPageHeader
} from "./components/tmPageHeader/tmPageHeader.vue"
export {
  default as TmNotifications
} from "./components/tmNotifications/tmNotifications.vue"
export {
  default as TmCountdown
} from "./components/tmCountdown/tmCountdown.vue"
export { default as TmKeyValue } from "./components/TmKeyValues/TmKeyValue.vue"
export {
  default as TmKeyValues
} from "./components/TmKeyValues/TmKeyValues.vue"
export { default as TmModule } from "./components/tmModules/tmModule.vue"
export { default as TmModules } from "./components/tmModules/tmModules.vue"
