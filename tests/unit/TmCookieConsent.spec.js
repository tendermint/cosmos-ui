import { shallowMount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmCookieConsent } from "@/index"

describe("TmCookieConsent.vue", () => {
  let wrapper
  beforeEach(async () => {
    const value = "button"
    wrapper = shallowMount(TmCookieConsent, {
      propsData: { value }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
