import CosmosNewsletterSignup from "./CosmosNewsletterSignup.vue";

export default {
  title: "CosmosNewsletterSignup",
  component: CosmosNewsletterSignup
};

export const normal = () => ({
  components: {
    CosmosNewsletterSignup
  },
  template: `
    <div>
      <cosmos-newsletter-signup/>
    </div>
  `
});