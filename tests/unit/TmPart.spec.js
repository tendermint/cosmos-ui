import { mount } from "@vue/test-utils"
import { TmPart } from "@/index"

describe("TmPart", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TmPart, { propsData: { title: "Test" } })
  })

  it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  it("only has header if a title is defined", () => {
    wrapper = mount(TmPart, {
      slots: { default: "<div class='custom-main' />" }
    })
    expect(wrapper.find("header").exists()).toBe(false)
    expect(wrapper.find(".custom-main").exists()).toBe(true)
  })

  it("gets title from prop if defined", () => {
    wrapper = mount(TmPart, { propsData: { title: "Test" } })
    expect(wrapper.find(".tm-part-title").text()).toBe("Test")
  })

  it("should use slots", () => {
    wrapper = mount(TmPart, {
      slots: {
        title: "<div class='custom-title' />",
        default: "<div class='custom-main' />",
        menu: "<div class='custom-menu' />"
      }
    })
    expect(wrapper.find(".custom-title").exists()).toBe(true)
    expect(wrapper.find(".custom-menu").exists()).toBe(true)
    expect(wrapper.find(".custom-main").exists()).toBe(true)
  })
})
