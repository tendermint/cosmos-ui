<template>
  <div>
    <div class="container">
      <goz-milestone v-for="item in milestoneList" v-bind="item" :key="item.title"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 47rem;
  margin-left: auto;
  margin-right: auto;
}
</style>

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
        ["cosmos/cosmos-sdk", 24, "Cosmos SDK – GoZ Milestone", 16],
        ["cosmos/cosmos-sdk", 21, "Cosmos SDK – IBC 1.0 Milestone", 77],
        ["cosmos/relayer", 2, "Relayer – GoZ Milestone", 11],
        ["cosmos/ics", 5, "IBC 1.0 – Spec Milestone", 54],
      ],
    }
  },
  async mounted() {
    this.sources.forEach(async source => {
      const milestone = await this.getMilestone.apply(null, source)
      this.milestoneList.push(milestone)
    })
  },
  methods: {
    async getMilestone(repo, id, defaultTitle, defaultProgress) {
      try {
        const
          url = `https://api.github.com/repos/${repo}/milestones/${id}`,
          m = (await axios.get(url)).data,
          title = m.title,
          open = parseInt(m.open_issues),
          closed = parseInt(m.closed_issues),
          progress = Math.floor((100 * closed) / (open + closed)).toFixed(0)
        return { title, repo, progress }
      } catch {
        return {
          title: defaultTitle,
          repo,
          progress: defaultProgress
        }
      }
    }
  }
}
</script>