import GozSection from "./GozSection.vue";
import IconPlanet from "./IconPlanet.vue";

export default {
  title: "GozSection",
  component: GozSection
};

export const normal = () => ({
  components: { GozSection, IconPlanet },
  template: `
    <div>
      <goz-section>
        <template v-slot:icon>
          <icon-planet/>
        </template>
        <template v-slot:title>
         Coming to a cosmos near you
        </template>
        <template v-slot:subtitle>
          The Cosmos Game of Zones will officially start before summer 2020. A more exact start date will be announced when the IBC demo for GoZ nears readiness. Keep an eye on the milestones on GitHub to track progress:
        </template>
      </goz-section>
    </div>
  `
});