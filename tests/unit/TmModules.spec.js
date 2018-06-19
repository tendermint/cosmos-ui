import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmModules } from "@/index"
import { TmModule } from "@/index"

describe("TmModules.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmModules, {
      slots: { default: "<div>slot</div>" }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
describe("TmModule.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmModule, {
      slots: {
        title: "<div>title</div>",
        menu: "<div>menu</div>",
        default: "<div>default</div>",
        footer: "<div>footer</div>"
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
