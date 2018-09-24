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
        description: {
          moniker: "cool validator"
        }
      },
      {
        owner: "cosmosvaladdr157mg9hnhchfrqvk3enrvmvj29yhmlwf759xrgw",
        description: {
          moniker: "Kentucky val"
        }
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

  it("should show redelegations", () => {
    wrapper.setProps({
      transaction: transactions[5]
    })
    expect(wrapper.vm.redelegation).toBe(true)
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
