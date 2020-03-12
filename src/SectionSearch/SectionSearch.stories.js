import SectionSearch from "./SectionSearch.vue";
import SectionResultsEmpty from "./SectionResultsEmpty.vue";
import SectionShortcuts from "./SectionShortcuts.vue";
import { default as site } from "./pages.js"

export default {
  title: "SectionSearch",
  component: SectionSearch
};

export const normal = () => ({
  components: {
    SectionSearch,
    SectionResultsEmpty,
    SectionShortcuts
  },
  data: function () {
    return {
      site,
      query: null
    }
  },
  template: `
    <div style="width: 100%; max-width: 600px">
      <section-search :query="query" @query="query = $event" :site="site"/>
      <p>Shortcuts section:</p>
      <section-shortcuts style="background: #f8f9fc"/>
      <p>No results section:</p>
      <section-results-empty :query="query" @query="query = $event" style="background: #f8f9fc"/>
    </div>
  `
});