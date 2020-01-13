import Footer from "./Footer.vue";
import "../theme-cosmos.css"
import data from "./data"

export default {
  title: "Footer"
};

export const normal = () => ({
  components: { Footer },
  data: function () {
    return {
      data: data.footer
    };
  },
  template: `
    <div>
      <Footer :value="data" style="padding: 2rem"/>
    </div>
  `
});
