import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import TmCountdown from "@/components/tmCountdown/tmCountdown.vue"

describe("TmCountdown.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmCountdown, {
      propsData: { units: "short", date: "February 28, 2020" }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
