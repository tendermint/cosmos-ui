<template lang="pug">
  div
    tm-part(title='')
      tm-list-item(dt="Block Hash" :dd="blockMeta.block_id.hash")
    tm-part(title='Header')
      tm-list-item(dt="Chain ID" :dd="block.header.chain_id")
      tm-list-item(dt="Time" :dd="blockHeaderTime")
      tm-list-item(dt="Transactions" :dd="block.header.num_txs")
      tm-list-item(dt="Last Commit Hash" :dd="block.header.last_commit_hash")
      tm-list-item(dt="Validators Hash" :dd="block.header.validators_hash")
      tm-list-item(dt="App Hash" :dd="block.header.app_hash")

    tm-part(title='Last Block')
      tm-list-item(dt="Hash" :dd="block.header.last_block_id.hash")
      tm-list-item(dt="Parts Total"
        :dd="block.header.last_block_id.parts.total")
      tm-list-item(dt="Parts Hash" :dd="block.header.last_block_id.parts.hash")

    tm-part(title="Precommit"
      v-for="p in block.last_commit.precommits"
      :key="p.validator_address" v-if="p !== null")
      tm-list-item(dt="Address" :dd="p.validator_address")
      tm-list-item(dt="Index" :dd="p.validator_index")
      tm-list-item(dt="Round" :dd="p.round")
      tm-list-item(:dt="`Sig (${p.signature.type})`"
      :dd="p.signature.data")

    tm-part(title='Transactions')
      tm-data-loading(v-if="loading")
      tm-data-empty(v-else-if="block.header.num_txs === 0" title="Empty Block" subtitle="There were no transactions in this block.")
      template(
        v-else-if="txs.length"
        )
        tm-li-transaction(
          :key="tkey + '-tx'"
          v-for="(tx, tkey) in txs"
          v-if="isObj(tx)"
          :transaction="tx"
          :address="currentUser"
          )
</template>
<script>
import TmPart from "../TmPart/TmPart.vue"
import TmListItem from "../TmListItem/TmListItem.vue"
import TmDataEmpty from "../TmDataEmpty/TmDataEmpty.vue"
import TmDataLoading from "../TmDataLoading/TmDataLoading.vue"
import TmLiTransaction from "../TmLiTransaction/TmLiTransaction.vue"

export default {
  name: "tm-block",
  components: {
    TmPart,
    TmListItem,
    TmDataEmpty,
    TmDataLoading,
    TmLiTransaction
  },
  props: {
    currentUser: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: true
    },
    blockHeaderTime: {
      type: String,
      default: null
    },
    blockMeta: {
      type: Object,
      default: () => ({
        block_id: {
          hash: null
        }
      })
    },
    txs: {
      type: Array,
      default: () => [
        {
          tx: {
            msg: {
              inputs: [{ address: null }],
              outputs: null
            }
          }
        }
      ]
    },
    block: {
      type: Object,
      default: () => ({
        header: {
          chain_id: null,
          time: null,
          num_txs: null,
          last_commit_hash: null,
          validators_hash: null,
          app_hash: null,
          last_block_id: {
            hash: null,
            parts: {
              total: null,
              hash: null
            }
          }
        },
        last_commit: {
          precommits: [
            {
              validator_address: null,
              validator_index: null,
              round: null,
              signature: {
                type: null,
                data: null
              }
            }
          ]
        }
      })
    }
  },
  methods: {
    isObj(thing) {
      return typeof thing === "object"
    }
  }
}
</script>
