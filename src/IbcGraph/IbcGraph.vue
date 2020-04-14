<template>
  <div>
    <pre>{{byType}}</pre>
    <div id="chart" style="width: 100%; height: 90vh"></div>
  </div>
</template>

<style scoped>
#chart {
  background: #111;
  display: none;
}
</style>

<script>
import axios from "axios";
import echarts from "echarts";
import { v4 as uuidv4 } from "uuid";

export default {
  data: function() {
    return {
      events: null
    };
  },
  methods: {
    eventsByType(type) {
      const events = this.events || [];
      return events.filter(e => e.event_type === type);
    }
  },
  computed: {
    byType() {
      return this.eventsByType("message").filter(
        e => e.module === "ibc_client"
      );
    },
    eventsSendPacket() {
      return this.eventsByType("send_packet").map(e => {
        const v = e.packet_data.value;
        return {
          amount: v.amount[0].amount,
          sender: v.sender,
          receiver: v.receiver,
          blockchain: e.blockchain
        };
      });
    },
    // eventsData() {
    //   let wallets = new Set();
    //   this.eventsSendPacket.forEach(e => {
    //     wallets.add(e.sender);
    //     wallets.add(e.receiver);
    //   });
    //   return Array.from(wallets).map(a => {
    //     return {
    //       id: a,
    //       name: a
    //     };
    //   });
    // },
    // eventsEdges() {
    //   return this.eventsSendPacket.map(e => {
    //     return {
    //       source: e.sender,
    //       target: e.receiver,
    //       symbol: [null, "arrow"],
    //       symbolSize: 6
    //     };
    //   });
    // },
    blockchains() {
      if (!this.events) return [];
      return Array.from(
        new Set(Object.values(this.events.map(e => e.blockchain)))
      ).map(b => {
        return {
          name: b,
          uuid: uuidv4()
        };
      });
    }
  },
  async mounted() {
    this.events = (await axios.get("http://161.35.13.141/txs/events")).data.map(
      e => {
        return {
          ...e,
          uuid: uuidv4()
        };
      }
    );
    const chart = echarts.init(document.getElementById("chart"));
    chart.setOption({
      series: [
        {
          type: "graph",
          layout: "force",
          roam: true,
          data: [
            ...this.events.map(e => {
              return {
                id: e.uuid,
                category: this.blockchains.filter(
                  b => b.name === e.blockchain
                )[0].uuid,
                symbolSize: 5
              };
            }),
            ...this.blockchains.map(b => {
              return {
                id: b.uuid,
                symbolSize: 25,
                category: b.uuid
              };
            })
          ],
          categories: this.blockchains.map(b => {
            return {
              name: b.uuid,
              base: b
            };
          }),
          links: [
            ...this.events.map(e => {
              return {
                source: this.blockchains.filter(b => b.name === e.blockchain)[0]
                  .uuid,
                target: e.uuid,
                lineStyle: {
                  opacity: 0
                }
              };
            })
          ],
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
