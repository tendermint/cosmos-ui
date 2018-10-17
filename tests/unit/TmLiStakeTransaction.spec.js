import { mount } from "@vue/test-utils"
import { TmLiStakeTransaction } from "@/index"
import transactions from "../../assets/txs.js"

describe("TmLiStakeTransaction", () => {
  let wrapper
  let propsData = {
    transaction: transactions[3],
    validators: [
      {
        operator_address:
          "cosmosvaladdr15ky9du8a2wlstz6fpx3p4mqpjyrm5ctqzh8yqw",
        description: {
          moniker: "cool validator"
        },
        tokens: "1000000000000000",
        delegator_shares: "1000000000000000"
      },
      {
        operator_address:
          "cosmosvaladdr157mg9hnhchfrqvk3enrvmvj29yhmlwf759xrgw",
        description: {
          moniker: "Kentucky val"
        },
        tokens: "200000000000",
        delegator_shares: "1000000000000"
      }
    ],
    validatorURL: "/validator",
    bondingDenom: "stake"
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
    it("should show unbondings and calculate tokens from shares", () => {
      wrapper.setProps({
        transaction: transactions[4]
      })
      expect(wrapper.vm.unbonding).toBe(true)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

  describe(`redelegations`, () => {
    it("should show redelegations and calculate tokens from shares", () => {
      wrapper.setProps({
        transaction: transactions[5]
      })
      expect(wrapper.vm.redelegation).toBe(true)
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
