import CookieBanner from "./CookieBanner.vue";

export default {
  title: "CookieBanner"
};

export const normal = () => ({
  components: { CookieBanner },
  data: function() {
    return {
      banner: true
    };
  },
  template: `
    <div>
      <cookie-banner />
    </div>
  `
});
