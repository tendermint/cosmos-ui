import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmBtn } from "@/index"

describe("TmBtn.vue", () => {
  let wrapper
  beforeEach(async () => {
    const value = "button"
    wrapper = shallowMount(TmBtn, {
      propsData: { value }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
