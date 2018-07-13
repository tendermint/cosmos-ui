import { mount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmModalError } from "@/index"

describe("TmModalError", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TmModalError)
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("has an icon", () => {
    expect(
      wrapper
        .find(".tm-modal-error__icon i.material-icons")
        .text()
        .trim()
    ).toBe("error_outline")
  })

  it("shows an icon if specified", () => {
    wrapper = mount(TmModalError, {
      propsData: { icon: "icon-x" }
    })
    expect(
      wrapper
        .find(".tm-modal-error__icon i.material-icons")
        .text()
        .trim()
    ).toBe("icon-x")
  })

  it("has a title", () => {
    expect(
      wrapper
        .find(".tm-modal-error__title")
        .text()
        .trim()
    ).toBe("This application ran into an error")
  })

  it("shows a title if specified", () => {
    wrapper = mount(TmModalError, {
      propsData: { title: "title-x" }
    })
    expect(
      wrapper
        .find(".tm-modal-error__title")
        .text()
        .trim()
    ).toBe("title-x")
  })

  it("has a body", () => {
    expect(
      wrapper
        .find(".tm-modal-error__body")
        .text()
        .trim()
    ).toContain("This application has encountered a critical error.")
  })

  it("shows a body if specified", () => {
    wrapper = mount(TmModalError, {
      propsData: { body: "body-x" }
    })
    expect(
      wrapper
        .find(".tm-modal-error__body")
        .text()
        .trim()
    ).toBe("body-x")
  })

  it("has a actionable button", () => {
    wrapper
      .findAll(".tm-modal-error__btn")
      .at(0)
      .trigger("click")
  })
})
