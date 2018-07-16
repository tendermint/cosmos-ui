import { mount } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmBlock } from "@/index"
import txs from "../../assets/txs.js"
describe("TmBlock.vue", () => {
  let wrapper
  beforeEach(async () => {
    wrapper = mount(TmBlock, {
      propsData: {
        txs,
        loading: false,
        blockHeaderTime: "January 5th, 1988",
        blockMeta: {
          block_id: {
            hash: "asdf"
          }
        },
        block: {
          header: {
            chain_id: "1",
            time: "2",
            num_txs: "3",
            last_commit_hash: "4",
            validators_hash: "5",
            app_hash: "6",
            last_block_id: {
              hash: "7",
              parts: {
                total: "8",
                hash: "9"
              }
            }
          },
          last_commit: {
            precommits: [
              {
                validator_address: "10",
                validator_index: "11",
                round: "12",
                signature: {
                  type: "13",
                  data: "14"
                }
              }
            ]
          }
        }
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
