import SectionSearch from "./SectionSearch.vue";
import SectionResultsEmpty from "./SectionResultsEmpty.vue";
import SectionShortcuts from "./SectionShortcuts.vue";
import SectionInput from "./SectionInput.vue";
import { default as site } from "./pages.js"

export default {
  title: "SectionSearch",
  component: SectionSearch
};

export const normal = () => ({
  components: {
    SectionSearch,
    SectionResultsEmpty,
    SectionShortcuts,
    SectionInput
  },
  data: function () {
    return {
      site,
      query: null
    }
  },
  methods: {
    log: (e) => console.log(e)
  },
  template: `
    <div style="width: 100%; max-width: 600px">
      <section-search @select="log($event)" :query="query" @query="query = $event" :site="site"/>
      <p>Input component:</p>
      <section-input :value="query" @input="query = $event" style="background: #f8f9fc"/>
      <p>Shortcuts section:</p>
      <section-shortcuts style="background: #f8f9fc"/>
      <p>No results section:</p>
      <section-results-empty :query="query" @query="query = $event" style="background: #f8f9fc"/>
    </div>
  `
});