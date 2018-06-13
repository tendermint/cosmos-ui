import TmField from "./components/tmField"
import TmListItem from "./components/TmListItem"
import TmBtn from "./components/TmBtn"
const TendermintComponents = {
  TmField,
  TmListItem,
  TmBtn
}

TendermintComponents.install = Vue =>
  Object.keys(TendermintComponents)
    .filter(component => component !== "install")
    .map(component => TendermintComponents[component])
    .forEach(Vue.use)

export default TendermintComponents

export { default as TmField } from "./components/tmField/tmField.vue"
export { default as TmBtn } from "./components/TmBtn/TmBtn.vue"
export { default as TmListItem } from "./components/TmListItem/TmListItem.vue"
