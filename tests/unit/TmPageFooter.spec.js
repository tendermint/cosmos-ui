import { mount } from "@vue/test-utils"
import { TmPageFooter } from "@/index"

describe("TmPageFooter", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TmPageFooter)
  })

  it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
