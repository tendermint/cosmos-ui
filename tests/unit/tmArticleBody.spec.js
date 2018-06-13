import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import TmArticleBody from "@/components/tmArticleBody/tmArticleBody.vue"

describe("TmArticleBody.vue", () => {
  let wrapper
  beforeEach(async () => {
    const content = "content"
    wrapper = shallowMount(TmArticleBody, {
      propsData: { content },
      slots: {
        default: "<div>slot</div>"
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
