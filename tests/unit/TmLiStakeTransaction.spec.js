import { mount } from "@vue/test-utils"
import { TmLiStakeTransaction } from "@/index"
import transactions from "../../assets/txs.js"

describe("TmLiStakeTransaction", () => {
  let wrapper
  let propsData = {
    transaction: transactions[3],
    validators: [
      {
        owner: "cosmosvaladdr15ky9du8a2wlstz6fpx3p4mqpjyrm5ctqzh8yqw",
        moniker: "cool validator"
      }
    ],
    validatorURL: "/validator"
  }

  beforeEach(() => {
    wrapper = mount(TmLiStakeTransaction, { propsData })
  })

  it("should show delegations", () => {
    expect(wrapper.vm.delegation).toBe(true)
    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  it("should show unbondings", () => {
    wrapper.setProps({
      transaction: transactions[4]
    })
    expect(wrapper.vm.unbonding).toBe(true)
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
