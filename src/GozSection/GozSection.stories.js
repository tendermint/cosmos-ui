import GozSection from "./GozSection.vue";

export default {
  title: "GozSection",
  component: GozSection
};

export const normal = () => ({
  components: { GozSection },
  template: `
    <div>
      <GozSection/>
    </div>
  `
});