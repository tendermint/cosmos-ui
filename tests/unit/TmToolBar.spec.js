import { mount } from "@vue/test-utils"
import { TmToolBar } from "@/index"

describe("TmToolBar", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TmToolBar)
  })

  it("has the expected html structure", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
