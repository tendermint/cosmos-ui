import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmPageHeader } from "@/index"

describe("TmPageHeader.vue", () => {
  let wrapper
  beforeEach(async () => {
    const title = "Title"
    const subtitle = "Subtitle"
    wrapper = shallowMount(TmPageHeader, {
      propsData: { title, subtitle },
      slots: {
        default: "<div>slot</div>"
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
