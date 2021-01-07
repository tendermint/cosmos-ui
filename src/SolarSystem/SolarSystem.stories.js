import SolarSystem from "./SolarSystem.vue";

export default {
  title: "SolarSystem"
};

export const normal = () => ({
  components: { SolarSystem },
  template: `
    <div>
      <solar-system/>
    </div>
  `
});
