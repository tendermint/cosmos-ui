import Stars from "./Stars.vue";

export default {
  title: "Stars"
};

export const normal = () => ({
  components: { Stars },
  template: `
    <div>
      <stars/>
    </div>
  `
});