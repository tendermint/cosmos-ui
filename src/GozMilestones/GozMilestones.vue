<template>
  <div>
    <div class="container">
      <goz-milestone v-for="item in milestoneList" v-bind="item"/>
    </div>
  </div>
</template>

<script>
import GozMilestone from "./GozMilestone"
import axios from "axios"

export default {
  components: {
    GozMilestone
  },
  data: function() {
    return {
      milestone: {
        logo: "sdk",
        h1: "Cosmos SDK - GoZ Milestone",
        h2: "cosmos/sdk"
      },
      milestoneList: [],
      sources: [
        ["cosmos/cosmos-sdk", 24],
      ],
    }
  },
  async mounted() {
    this.sources.forEach(async source => {
      this.milestoneList.push(await this.getMilestone.apply(null, source))
    })
  },
  methods: {
    async getMilestone(repo, id) {
      const
        url = `https://api.github.com/repos/${repo}/milestones/${id}`,
        m = (await axios.get(url)).data,
        title = m.title,
        open = parseInt(m.open_issues),
        closed = parseInt(m.closed_issues),
        progress = Math.floor((100 * closed) / (open + closed)).toFixed(0)
      return {
        title,
        repo,
        progress
      }
    }
  }
}
</script>