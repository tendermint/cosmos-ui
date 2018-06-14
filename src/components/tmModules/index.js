import tmModules_ from "./tmModules.vue"
import tmModule_ from "./tmModule.vue"

export const tmModules = function install(Vue) {
  Vue.component("tm-modules", tmModules_)
}

export const tmModule = function install(Vue) {
  Vue.component("tm-module", tmModule_)
}
