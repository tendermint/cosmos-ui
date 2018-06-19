import { mount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmNotifications } from "@/index"

describe("TmNotifications.vue", () => {
  let wrapper
  beforeEach(async () => {
    const notifications = [
      {
        body: "asdf"
      },
      {
        body: "sadf"
      }
    ]
    wrapper = mount(TmNotifications, {
      propsData: { notifications }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
