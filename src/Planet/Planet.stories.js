import Planet from "./Planet.vue";

export default {
  title: "Planet"
};

export const normal = () => ({
  components: { Planet },
  template: `
    <div>
      <planet/>
    </div>
  `
});
