import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmTextMarkdown } from "@/index"

describe("TmTextMarkdown.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = shallowMount(TmTextMarkdown)
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
