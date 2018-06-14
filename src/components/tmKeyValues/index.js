import tmKeyValues_ from "./tmKeyValues.vue"
import tmKeyValue_ from "./tmKeyValue.vue"

export const tmKeyValues = function install(Vue) {
  Vue.component("tm-key-values", tmKeyValues_)
}

export const tmKeyValue = function install(Vue) {
  Vue.component("tm-key-value", tmKeyValue_)
}
