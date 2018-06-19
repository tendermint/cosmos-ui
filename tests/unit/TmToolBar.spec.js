import setup from "../../../helpers/vuex-setup"
import TmToolBar from "@/index"

describe("TmToolBar", () => {
  let wrapper, instance
  let { mount } = setup()

  beforeEach(() => {
    instance = mount(TmToolBar)
    wrapper = instance.wrapper
  })

  it("has the expected html structure", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
