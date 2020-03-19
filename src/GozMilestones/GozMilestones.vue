<template>
  <div>
    <div class="container">
      <goz-milestone/>
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
      }
    }
  },
  mounted() {
   axios
      .get("https://api.github.com/repos/cosmos/cosmos-sdk/milestones")
      .then(({ data }) => {
        console.log(data)
      })
  }
}
</script>