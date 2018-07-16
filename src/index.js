import TmBarDiscrete from "./components/TmBarDiscrete"
import TmBlock from "./components/TmBlock"
import TmBlocks from "./components/TmBlocks"
import TmBtn from "./components/TmBtn"
import TmCookieConsent from "./components/TmCookieConsent"
import TmCountdown from "./components/TmCountdown"
import TmDataMsg from "./components/TmDataMsg"
import TmDataEmpty from "./components/TmDataEmpty"
import TmDataLoading from "./components/TmDataLoading"
import TmField from "./components/TmField"
import TmFieldGroup from "./components/TmFieldGroup"
import TmFormGroup from "./components/TmFormGroup"
import TmFormMsg from "./components/TmFormMsg"
import TmFormStruct from "./components/TmFormStruct"
import { TmKeyValue } from "./components/TmKeyValues"
import { TmKeyValues } from "./components/TmKeyValues"
import TmListItem from "./components/TmListItem"
import TmLiTransaction from "./components/TmLiTransaction"
import TmModalError from "./components/TmModalError"
import { TmModule } from "./components/TmModules"
import { TmModules } from "./components/TmModules"
import TmNotifications from "./components/TmNotifications"
import TmPage from "./components/TmPage"
import TmPageFooter from "./components/TmPageFooter"
import TmPageHeader from "./components/TmPageHeader"
import TmPart from "./components/TmPart"
import TmTabBar from "./components/TmTabBar"
import TmTextContainer from "./components/TmTextContainer"
import TmTextMarkdown from "./components/TmTextMarkdown"
import TmToolBar from "./components/TmToolBar"

const TendermintComponents = {
  TmBarDiscrete,
  TmBlock,
  TmBlocks,
  TmBtn,
  TmCookieConsent,
  TmCountdown,
  TmDataMsg,
  TmDataEmpty,
  TmDataLoading,
  TmField,
  TmFieldGroup,
  TmFormGroup,
  TmFormMsg,
  TmFormStruct,
  TmKeyValue,
  TmKeyValues,
  TmListItem,
  TmLiTransaction,
  TmModalError,
  TmModule,
  TmModules,
  TmNotifications,
  TmPage,
  TmPageFooter,
  TmPageHeader,
  TmPart,
  TmTabBar,
  TmTextContainer,
  TmTextMarkdown,
  TmToolBar
}

TendermintComponents.install = Vue =>
  Object.keys(TendermintComponents)
    .filter(component => component !== "install")
    .map(component => TendermintComponents[component])
    .forEach(Vue.use)

export default TendermintComponents

export {
  default as TmBarDiscrete
} from "./components/TmBarDiscrete/TmBarDiscrete.vue"
export { default as TmBlock } from "./components/TmBlock/TmBlock.vue"
export { default as TmBlocks } from "./components/TmBlocks/TmBlocks.vue"
export { default as TmBtn } from "./components/TmBtn/TmBtn.vue"
export {
  default as TmCookieConsent
} from "./components/TmCookieConsent/TmCookieConsent.vue"
export {
  default as TmCountdown
} from "./components/TmCountdown/TmCountdown.vue"
export {
  default as TmDataEmpty
} from "./components/TmDataEmpty/TmDataEmpty.vue"
export { default as TmDataMsg } from "./components/TmDataMsg/TmDataMsg.vue"
export {
  default as TmDataLoading
} from "./components/TmDataLoading/TmDataLoading.vue"
export { default as TmField } from "./components/TmField/TmField.vue"
export {
  default as TmFieldGroup
} from "./components/TmFieldGroup/TmFieldGroup.vue"
export {
  default as TmFormGroup
} from "./components/TmFormGroup/TmFormGroup.vue"
export { default as TmFormMsg } from "./components/TmFormMsg/TmFormMsg.vue"
export {
  default as TmFormStruct
} from "./components/TmFormStruct/TmFormStruct.vue"
export { default as TmKeyValue } from "./components/TmKeyValues/TmKeyValue.vue"
export {
  default as TmKeyValues
} from "./components/TmKeyValues/TmKeyValues.vue"
export { default as TmListItem } from "./components/TmListItem/TmListItem.vue"
export {
  default as TmLiTransaction
} from "./components/TmLiTransaction/TmLiTransaction.vue"
export {
  default as TmModalError
} from "./components/TmModalError/TmModalError.vue"
export { default as TmModule } from "./components/TmModules/TmModule.vue"
export { default as TmModules } from "./components/TmModules/TmModules.vue"
export {
  default as TmNotifications
} from "./components/TmNotifications/TmNotifications.vue"
export { default as TmPage } from "./components/TmPage/TmPage.vue"
export {
  default as TmPageFooter
} from "./components/TmPageFooter/TmPageFooter.vue"
export {
  default as TmPageHeader
} from "./components/TmPageHeader/TmPageHeader.vue"
export { default as TmPart } from "./components/TmPart/TmPart.vue"
export { default as TmTabBar } from "./components/TmTabBar/TmTabBar.vue"
export {
  default as TmTextContainer
} from "./components/TmTextContainer/TmTextContainer.vue"
export {
  default as TmTextMarkdown
} from "./components/TmTextMarkdown/TmTextMarkdown.vue"
export { default as TmToolBar } from "./components/TmToolBar/TmToolBar.vue"
