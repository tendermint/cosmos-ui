import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmFormMsg } from "@/index"

describe("TmFormMsg.vue", () => {
  let wrapper
  beforeEach(async () => {
    const type = "required"
    const name = "test"
    wrapper = shallowMount(TmFormMsg, {
      propsData: { type, name }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
