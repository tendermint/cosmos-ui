<template>
  <div>
    <div id="chart" style="width: 100%; height: 90vh"></div>
  </div>
</template>

<style scoped>
#chart {
  background: #111;
  overflow: hidden;
}
</style>

<script>
import axios from "axios";
import echarts from "echarts";
import { v4 as uuidv4 } from "uuid";
import { find, groupBy } from "lodash";

const API = "http://138.197.229.7";

export default {
  data: function() {
    return {
      txsAll: []
    };
  },
  computed: {
    blockchainNodes() {
      const data = [...new Set(this.txs.map(tx => tx.blockchain))];
      return data.map(blockchain => {
        return {
          id: blockchain,
          symbolSize: 20
        };
      });
    },
    blockchainCategories() {
      const data = [...new Set(this.txs.map(tx => tx.blockchain))];
      return data.map(b => {
        return {
          name: b,
          base: b
        };
      });
    },
    addressNodes() {
      let nodes = [];
      this.txs.forEach(tx => {
        const send = find(tx.events.events, { action: "send" });
        if (send) {
          const recipient = find(tx.events.events, "recipient").recipient;
          const sender = find(tx.events.events, "sender").sender;
          nodes.push(recipient);
          nodes.push(sender);
        }
      });
      nodes = [...new Set(nodes)];
      return nodes.map(address => {
        return {
          id: address,
          symbolSize: 3,
          category: this.blockchainAddress[address]
        };
      });
    },
    blockchainAddress12() {
      let nodes = {};
      this.txs.forEach(tx => {
        const create_client = find(tx.events.events, {
          action: "update_client"
        });
        if (create_client) {
          const address = find(tx.events.events, "sender").sender;
          nodes[address] = tx.blockchain;
        }
      });
      return nodes;
    },
    blockchainAddress() {
      let nodes = {};
      this.txs.forEach(tx => {
        const create_client = find(tx.events.events, {
          action: "create_client"
        });
        const send = find(tx.events.events, { action: "send" });
        if (create_client || send) {
          const address = find(tx.events.events, "sender").sender;
          nodes[address] = tx.blockchain;
        }
      });
      return nodes;
    },
    addressLinks() {
      let sends = this.txs.filter(tx => {
        return find(tx.events.events, { action: "send" });
      });
      return sends.map(tx => {
        return {
          target: find(tx.events.events, "recipient").recipient,
          source: find(tx.events.events, "sender").sender,
          lineStyle: {
            color: "source",
            curveness: 0.3
          }
        };
      });
    },
    txs() {
      return this.txsAll;
    }
  },
  async mounted() {
    this.txsAll = (await axios.get(`${API}/txs`)).data;
    const chart = echarts.init(document.getElementById("chart"));
    chart.setOption({
      series: [
        {
          type: "graph",
          layout: "force",
          roam: true,
          data: [...this.addressNodes],
          links: [...this.addressLinks],
          categories: [...this.blockchainCategories],
          force: {
            edgeLength: 5,
            repulsion: 20,
            gravity: 0.2
          }
        }
      ]
    });
  }
};
</script>
