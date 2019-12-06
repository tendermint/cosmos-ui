import SocialCards from "./SocialCards.vue";
import "../theme-cosmos.css"
import data from "./data"

export default {
  title: "SocialCards"
};

export const normal = () => ({
  components: { SocialCards },
  data: function () {
    return {
      social_cards: data.social_cards
    }
  },
  template: `
    <div>
      <social-cards :value="social_cards"/>
    </div>
  `
});
