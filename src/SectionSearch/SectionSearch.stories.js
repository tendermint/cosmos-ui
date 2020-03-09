import SectionSearch from "./SectionSearch.vue";
import { default as site } from "./pages.js"

export default {
  title: "SectionSearch",
  component: SectionSearch
};

export const normal = () => ({
  components: { SectionSearch },
  data: function () {
    return {
      site,
      query: null
    }
  },
  template: `
    <div style="width: 100%; max-width: 600px">
      <section-search :query="query" @query="query = $event" :site="site"/>
    </div>
  `
});