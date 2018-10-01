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
        },
        tokens: "100000",
        delegator_shares: "100000"
      },
      {
        owner: "cosmosvaladdr157mg9hnhchfrqvk3enrvmvj29yhmlwf759xrgw",
        description: {
          moniker: "Kentucky val"
        },
        tokens: "100",
        delegator_shares: "20"
      }
    ],
    validatorURL: "/validator",
    bondingDenom: "stake",
    sharesToTokens: undefined
  }

  beforeEach(() => {
    wrapper = mount(TmLiStakeTransaction, { propsData })
  })

  describe(`delegations`, () => {
    it("should show delegations", () => {
      expect(wrapper.vm.delegation).toBe(true)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

  describe(`unbonding delegations`, () => {
    it("should show unbondings by displaying the given token amount", () => {
      wrapper.setProps({
        transaction: transactions[4],
        sharesToTokens: "100"
      })
      expect(wrapper.vm.unbonding).toBe(true)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

  describe(`redelegations`, () => {
    it("should show redelegations by displaying the given token amount", () => {
      wrapper.setProps({
        transaction: transactions[5],
        sharesToTokens: "15"
      })
      expect(wrapper.vm.redelegation).toBe(true)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
