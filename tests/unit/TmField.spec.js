import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import TmField from "@/components/TmField"

describe("TmField.vue", () => {
  let wrapper
  beforeEach(async () => {
    const value = "placeholder"
    wrapper = shallowMount(TmField, {
      propsData: { value }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
