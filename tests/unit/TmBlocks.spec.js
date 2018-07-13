import { mount, RouterLinkStub } from "@vue/test-utils"
import htmlBeautify from "html-beautify"
import { TmBlocks } from "@/index"

describe("TmBlocks.vue", () => {
  let wrapper
  let block = {
    header: {
      last_block_id: {
        hash: "last-hash",
        parts: { total: 0 }
      },
      num_txs: 0,
      height: 10,
      time: 1608
    },
    last_commit: { precommits: [] },
    data: { txs: 0 }
  }
  let blocks = [block]
  beforeEach(async () => {
    wrapper = mount(TmBlocks, {
      propsData: { blocks },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })
})
