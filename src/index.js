import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import TmArticleBody from "./components/tmArticleBody"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmArticleBody
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
  default as TmArticleBody
} from "./components/tmArticleBody/tmArticleBody.vue"
