import { mount } from "@vue/test-utils"
import { TmTabBar } from "@/index"

describe("TmTabBar", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TmTabBar, { slots: { default: "<div>slot</div>" } })
  })

  it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
