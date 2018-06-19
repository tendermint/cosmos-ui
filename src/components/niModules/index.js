import tmModules_ from "./TmModules.vue"
import tmModule_ from "./TmModule.vue"

export const TmModules = function install(Vue) {
  Vue.component("tm-modules", tmModules_)
}

export const TmModule = function install(Vue) {
  Vue.component("tm-module", tmModule_)
}
