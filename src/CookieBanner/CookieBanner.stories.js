import CookieBanner from "./CookieBanner.vue";

export default {
  title: "CookieBanner"
};

export const normal = () => ({
  components: { cookiebanner: CookieBanner },
  data: function() {
    return {
      banner: true
    };
  },
  template: `
    <div>
      <cookiebanner :visible="banner">
        <div>By navigating this website, you agree to our <a href="https://www.cookiesandyou.com" target="_blank" rel="noopener">Cookie Policy</a>.</div>
      </cookiebanner>
    </div>
  `
});
