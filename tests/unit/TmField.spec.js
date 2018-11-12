import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmField } from "@/index"

describe("TmField.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmField)
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("trims number values", () => {
    const wrapper = shallowMount(TmField, { propsData: { type: `number` } })
    wrapper.vm.updateValue(`42 `)
    expect(wrapper.emittedByOrder()).toEqual([{ args: [42], name: "input" }])
  })
})
