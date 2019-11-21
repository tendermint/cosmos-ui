import GlobalStyles from "./GlobalStyles.vue";

export default {
  title: "GlobalStyles"
};

export const normal = () => ({
  components: { GlobalStyles },
  template: `
    <div>
      <p>this is an example of <sup>normalize.css</sup></p>
    </div>
  `
});
