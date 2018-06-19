import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmKeyValues } from "@/index"
import { TmKeyValue } from "@/index"

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
