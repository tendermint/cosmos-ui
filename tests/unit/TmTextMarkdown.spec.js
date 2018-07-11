import { shallowMount } from "@vue/test-utils"
import { TmTextMarkdown } from "@/index"
jest.mock("axios", () => ({
  get: url =>
    url &&
    Promise.resolve({
      data: {
        content: global.btoa(`## hello!

\`code\`

[link](https://google.com)`)
      }
    })
}))
describe("TmTextMarkdown.vue", () => {
  let wrapper

  beforeEach(async () => {
    wrapper = shallowMount(TmTextMarkdown)
  })

  it("has the expected html structure", async () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
    wrapper.setProps({
      url: "https://google.com"
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
