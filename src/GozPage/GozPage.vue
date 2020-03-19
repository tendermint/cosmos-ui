<template>
  <div>
    <div class="container">
      <goz-section>
        <template v-slot:icon>
          <icon-planet/>
        </template>
        <template v-slot:title>
          Coming to a cosmos near you
        </template>
        <template v-slot:subtitle>
          <p>The Cosmos Game of Zones will officially start before summer 2020. A more exact start date will be announced when the IBC demo for GoZ nears readiness.</p>
          <p>Keep an eye on the milestones on GitHub to track progress:</p>
        </template>
      </goz-section>
      <goz-milestones/>
      <goz-newsletter-signup style="margin-top: 4rem; margin-bottom: 7rem"/>
      <goz-section>
        <template v-slot:icon>
          <icon-cup/>
        </template>
        <template v-slot:title>
          One competition, many winners
        </template>
        <template v-slot:subtitle>
          <p>The Interchain Foundation is providing <strong>100,000 ATOM</strong> for the prize pool. Unlike last year's Game of Stakes, there won't be just one winner, and there won't be just one prize. There will be multiple prizes attached to multiple challenges.</p>
        </template>
      </goz-section>
      <goz-section>
        <template v-slot:icon>
          <icon-calendar/>
        </template>
        <template v-slot:title>
          Preparing for Game of Zones
        </template>
        <template v-slot:notes>
          <ul>
            <li>Expect to register with a Cosmos address and a chain-id for your team.</li>
            <li>You will need to be able to run a blockchain with your team.</li>
            <ul>
              <li>Familiarize yourself with the <a href="https://github.com/cosmos/cosmos-sdk/branches/all?utf8=%E2%9C%93&query=ibc" target="_blank" rel="noreferrer noopener">IBC branches</a> of the Cosmos SDK on GitHub.</li>
              <li class="note"><b>Note:</b> these branches will evolve over time.</li>
            </ul>
            <li>Practice sending IBC transactions between testnets with the Relayer. Follow the <a href="https://cosmos.network" target="_blank" rel="noreferrer noopener">step-by-step instructions</a> to run the end-to-end handshake & token transfer demo.</li>
          </ul>
        </template>
      </goz-section>
      <goz-card style="padding: 3rem 0 6rem;"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: var(--grey-14);
}
</style>

<script>
import GozCard from "../GozCard/GozCard"
import GozMilestones from "../GozMilestones/GozMilestones"
import GozNewsletterSignup from "../GozNewsletterSignup/GozNewsletterSignup"
import GozSection from "../GozSection/GozSection"
import IconPlanet from "../GozSection/IconPlanet"
import IconCalendar from "../GozSection/IconCalendar"
import IconCup from "../GozSection/IconCup"

export default {
  components: {
    GozCard,
    GozMilestones,
    GozNewsletterSignup,
    GozSection,
    IconPlanet,
    IconCalendar,
    IconCup
  }
}
</script>