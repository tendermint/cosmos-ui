import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmTextContainer } from "@/index"

describe("TmTextContainer.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmTextContainer)
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
