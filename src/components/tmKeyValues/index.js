import tmKeyValues_ from "./TmKeyValues.vue"
import tmKeyValue_ from "./TmKeyValue.vue"

export const TmKeyValues = function install(Vue) {
  Vue.component("tm-key-values", tmKeyValues_)
}

export const TmKeyValue = function install(Vue) {
  Vue.component("tm-key-value", tmKeyValue_)
}
