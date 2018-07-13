import { mount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmBlock } from "@/index"

describe("TmBlock.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = mount(TmBlock, {
      propsData: {}
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
