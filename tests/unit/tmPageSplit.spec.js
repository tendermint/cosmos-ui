import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmPageSplit } from "@/index"

describe("TmPageSplit.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmPageSplit, {
      slots: {
        default: "<div>slot</div>"
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
