import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmCountdown } from "@/index.js"

describe("TmCountdown.vue", () => {
  let wrapper
  beforeEach(async () => {
    const fixednow = 1528894703
    wrapper = shallowMount(TmCountdown, {
      propsData: {
        fixednow,
        units: "short",
        date: "February 28, 2020"
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
