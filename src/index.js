import TmField from "./components/TmField"
import TmNotifications from "./components/TmNotifications"
import TmCountdown from "./components/TmCountdown"

import { TmKeyValues } from "./components/TmKeyValues"
import { TmKeyValue } from "./components/TmKeyValues"

import { TmModules } from "./components/TmModules"
import { TmModule } from "./components/TmModules"

import TmPart from "./components/TmPart"
import TmPage from "./components/TmPage"
import TmPageHeader from "./components/TmPageHeader"
import TmPageFooter from "./components/TmPageFooter"
import TmFormStruct from "./components/TmFormStruct"
import TmFormGroup from "./components/TmFormGroup"
import TmFieldGroup from "./components/TmFieldGroup"
import TmDataMsg from "./components/TmDataMsg"
import TmFormMsg from "./components/TmFormMsg"
import TmBarDiscrete from "./components/TmBarDiscrete"
import TmListItem from "./components/TmListItem"
import TmBtn from "./components/TmBtn"
import TmTabBar from "./components/TmTabBar"
import TmToolBar from "./components/TmToolBar"
import TmCookieConsent from "./components/TmCookieConsent"

const TendermintComponents = {
  TmField,
  TmPart,
  TmPage,
  TmPageHeader,
  TmPageFooter,
  TmNotifications,
  TmCountdown,
  TmKeyValue,
  TmKeyValues,
  TmModule,
  TmModules,
  TmFormStruct,
  TmFormGroup,
  TmFieldGroup,
  TmDataMsg,
  TmFormMsg,
  TmBarDiscrete,
  TmListItem,
  TmBtn,
  TmTabBar,
  TmToolBar,
  TmCookieConsent
}

TendermintComponents.install = Vue =>
  Object.keys(TendermintComponents)
    .filter(component => component !== "install")
    .map(component => TendermintComponents[component])
    .forEach(Vue.use)

export default TendermintComponents

export { default as TmField } from "./components/TmField/TmField.vue"
export { default as TmPart } from "./components/TmPart/TmPart.vue"
export { default as TmPage } from "./components/TmPage/TmPage.vue"
export {
  default as TmPageHeader
} from "./components/TmPageHeader/TmPageHeader.vue"
export {
  default as TmPageFooter
} from "./components/TmPageFooter/TmPageFooter.vue"
export {
  default as TmNotifications
} from "./components/TmNotifications/TmNotifications.vue"
export {
  default as TmCountdown
} from "./components/TmCountdown/TmCountdown.vue"

export {
  default as TmKeyValues
} from "./components/TmKeyValues/TmKeyValues.vue"
export { default as TmKeyValue } from "./components/TmKeyValues/TmKeyValue.vue"

export { default as TmModules } from "./components/TmModules/TmModules.vue"
export { default as TmModule } from "./components/TmModules/TmModule.vue"

export {
  default as TmFormStruct
} from "./components/TmFormStruct/TmFormStruct.vue"
export {
  default as TmFormGroup
} from "./components/TmFormGroup/TmFormGroup.vue"
export {
  default as TmFieldGroup
} from "./components/TmFieldGroup/TmFieldGroup.vue"
export { default as TmDataMsg } from "./components/TmDataMsg/TmDataMsg.vue"
export { default as TmFormMsg } from "./components/TmFormMsg/TmFormMsg.vue"
export {
  default as TmBarDiscrete
} from "./components/TmBarDiscrete/TmBarDiscrete.vue"
export { default as TmToolBar } from "./components/TmToolBar/TmToolBar.vue"
export { default as TmTabBar } from "./components/TmTabBar/TmTabBar.vue"
export { default as TmBtn } from "./components/TmBtn/TmBtn.vue"
export { default as TmListItem } from "./components/TmListItem/TmListItem.vue"
export {
  default as TmCookieConsent
} from "./components/TmCookieConsent/TmCookieConsent.vue"
