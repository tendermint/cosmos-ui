import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
// import TmKeyValues from "@/components/tmKeyValues/tmKeyValues.vue"
// import TmKeyValue from "@/components/tmKeyValues/tmKeyValue.vue"
import { TmKeyValues } from "@/index.js"
import { TmKeyValue } from "@/index.js"

describe("TmKeyValues.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmKeyValues, {
      slots: { default: "<div>slot</div>" }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
describe("TmKeyValue.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmKeyValue, {
      slots: { key: "<div>key</div>", value: "<div>value</div>" }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
