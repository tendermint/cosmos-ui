import { shallowMount } from "@vue/test-utils"
import { TmLiTransaction } from "@/index"
import transactions from "../../assets/txs.js"

describe("TmLiTransaction", () => {
  let wrapper
  let propsData = {
    devMode: true,
    transaction: transactions[0],
    address: "tb1d4u5zerywfjhxuc9nudvw"
  }

  beforeEach(() => {
    wrapper = shallowMount(TmLiTransaction, { propsData })
  })

  it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  it("should show incoming transactions", () => {
    expect(wrapper.find(".tm-li-tx").classes()).toContain("tm-li-tx-received")
  })

  it("should show outgoing transactions", () => {
    wrapper.setProps({
      transaction: transactions[1],
      address: "tb1d4u5zerywfjhxuc9nudvw"
    })
    expect(wrapper.find(".tm-li-tx").classes()).toContain("tm-li-tx-sent")
  })

  it("should show all coins of the transaction", () => {
    wrapper.setProps({
      transaction: transactions[2],
      address: "tb1d4u5zerywfjhxuc9nudvw"
    })
    expect(wrapper.vm.$el).toMatchSnapshot()

    expect(wrapper.findAll(".tx-coin").length).toBe(3)
    expect(
      wrapper
        .findAll(".tx-coin")
        .at(2)
        .html()
        .toLowerCase()
    ).toContain("mattcoins")
    expect(
      wrapper
        .findAll(".tx-coin")
        .at(2)
        .html()
    ).toContain("42")
  })
})
