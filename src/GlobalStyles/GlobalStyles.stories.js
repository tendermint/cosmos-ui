import GlobalStyles from "./GlobalStyles.vue";

export default {
  title: "GlobalStyles"
};

export const normal = () => ({
  components: { GlobalStyles },
  template: `
    <div>
      <h1 class="ds__display-1">this is an example with <code class="ds__code">ds prefix.</code></h1>
    </div>
  `
});
