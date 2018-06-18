import { mount } from "@vue/test-utils"
import { TmPage } from "@/index"

describe("TmPage", () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TmPage, {
      propsData: {
        title: "Title",
        subtitle: "Subtitle",
        icon: "hello_icon"
      }
      // stubs: { "tm-page-header": "<tm-page-header />" }
    })
  })

  it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
