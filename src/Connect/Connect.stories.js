import Connect from "./Connect.vue";

export default {
  title: "Connect"
};

export const normal = () => ({
  components: { Connect },
  template: `
    <div>
      <Connect/>
    </div>
  `
});
