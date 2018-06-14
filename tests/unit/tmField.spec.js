import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmField } from "@/index"

describe("TmField.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmField)
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
