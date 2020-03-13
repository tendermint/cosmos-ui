<template>
  <div>
    <div class="container">
      <section-input
        :value="query"
        @input="$emit('query', $event)"
        @keypress="inputKeypress"
        @cancel="$emit('cancel', false)"
      />
      <div class="results">
        <section-results-list
          v-if="query && resultsAvailable"
          @activate="$emit('select', $event)"
          :selected="selectedIndex"
          :value="results"
        />
        <section-shortcuts v-else-if="!query && !searchInFlight"/>
        <section-results-empty
          v-else-if="query && !resultsAvailable && !searchInFlight"
          @query="$emit('query', $event)"
          :query="query"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
strong {
  font-weight: 500;
}
.container {
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  flex-direction: column;
  background-color: #f8f9fc;
  font-family: var(--ds-font-family);
}
.results {
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>

<script>
import { find, last, debounce } from "lodash";
import Fuse from "fuse.js";
import IconSearch from "./IconSearch.vue"
import IconCircleCross from "./IconCircleCross.vue"
import MarkdownIt from "markdown-it"
import hotkeys from "hotkeys-js";
import SectionShortcuts from "./SectionShortcuts.vue"
import SectionResultsEmpty from "./SectionResultsEmpty.vue"
import SectionInput from "./SectionInput.vue"
import SectionResultsList from "./SectionResultsList.vue"

export default {
  props: ["visible", "query", "site"],
  components: {
    IconSearch,
    IconCircleCross,
    SectionInput,
    SectionShortcuts,
    SectionResultsEmpty,
    SectionResultsList
  },
  data: function() {
    return {
      results: null,
      fuse: null,
      selectedIndex: null,
      searchInFlight: null
    };
  },
  watch: {
    query: function(e) {
      return this.debouncedSearch();
    },
    visible(becomesVisible) {
      const search = this.$refs.search;
      if (becomesVisible && search) {
        search.select();
      }
    }
  },
  computed: {
    debouncedSearch() {
      this.searchInFlight = true
      return debounce(this.search, 300);
    },
    resultsAvailable() {
      return this.results && this.results.length > 0
    }
  },
  mounted() {
    hotkeys("down", (e) => {
      this.inputKeypress(e)
      e.preventDefault();
    });
    hotkeys("up", (e) => {
      this.inputKeypress(e)
      e.preventDefault();
    });
    this.fuse = new Fuse(
      this.site.pages
        .map(doc => {
          return {
            key: doc.key,
            title: doc.title,
            headers: doc.headers && doc.headers.map(h => h.title).join(" "),
            description: doc.frontmatter.description,
            path: doc.path
          };
        })
        .filter(doc => {
          return !(
            Object.keys(this.site.locales || {}).indexOf(
              doc.path.split("/")[1]
            ) > -1
          );
        }),
      {
        keys: ["title", "headers", "description", "path"],
        shouldSort: true,
        includeScore: true,
        includeMatches: true
      }
    );
    if (this.$refs.search) this.$refs.search.focus();
    this.search();
  },
  methods: {
    inputKeypress(e) {
      if (e.key) {
        if (e.key === "ArrowUp") this.selectResult(-1)
        if (e.key === "ArrowDown") this.selectResult(+1)
        if (e.key === "Enter") {
          this.$emit("select", {...(this.results[this.selectedIndex])})
        }
      }
    },
    selectResult(delta) {
      const
        index = this.selectedIndex,
        indexNew = index + delta,
        isValidIndex = Number.isInteger(index) && index >= 0
      if (isValidIndex) {
        this.selectedIndex = indexNew >= 0 ? indexNew : 0
      } else {
        this.selectedIndex = 0
      }
    },
    md: string => {
      const md = new MarkdownIt({ html: true, linkify: true });
      return `<div>${md.renderInline(string)}</div>`;
    },
    search(e) {
      this.searchInFlight = false
      if (!this.query) return;
      const fuse = this.fuse.search(this.query).map(result => {
        return {
          title: result.item && result.item.title && this.md(result.item.title),
          desc: result.item && result.item.description && this.md(result.item.description),
          id: result.item && result.item.key
        };
      });
      this.results = fuse;
    },
  }
};
</script>