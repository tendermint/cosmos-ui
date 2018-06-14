import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmBarDiscrete } from "@/index"

describe("TmBarDiscrete.vue", () => {
  let wrapper
  beforeEach(async () => {
    const nodes = ["asdf", "sadf"]
    const active = 0
    const clickFn = function(e) {
      return e
    }
    wrapper = shallowMount(TmBarDiscrete, {
      propsData: { nodes, active, clickFn }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
