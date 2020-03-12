<template>
  <div>
    <div class="container">
      <div class="search-box">
        <div class="search-box__icon">
          <icon-search :stroke="query ? '#66A1FF' : '#aaa'" :fill="query ? '#66A1FF' : '#aaa'"></icon-search>
        </div>
        <div class="search-box__input">
          <input
            class="search-box__input__input"
            type="text"
            autocomplete="off"
            placeholder="Search"
            id="search-box-input"
            ref="search"
            :value="query"
            @keydown.38.prevent="selectResult(-1)"
            @keydown.40.prevent="selectResult(+1)"
            @input="$emit('query', $event.target.value)" />
        </div>
        <div class="search-box__clear">
          <icon-circle-cross class="search-box__clear__icon" v-if="query && query.length > 0" @click.native="$emit('query', '')" @keydown.enter="$emit('query', '')" tabindex="0"></icon-circle-cross>
        </div>
        <a class="search-box__button" @click="$emit('visible', false)" @keydown.enter="$emit('visible', false)" tabindex="0">Cancel</a>
      </div>
      <div class="results">
        <section-shortcuts v-if="!query"/>
        <section-results-empty v-if="query && (searchResults && searchResults.length <= 0)" @query="$emit('query', $event)" :query="query"/>
        <div v-if="query && searchResults && searchResults.length > 0">
          <div
            :class="[`results__item`, `results__item__selected__${!!isSearchResultSelected(index)}`]"
            ref="result"
            :key="result.title"
            v-for="(result, index) in searchResults"
            v-if="searchResults" 
            @keydown.enter="itemClick(resultLink(result), result.item)"
            @click="itemClick(resultLink(result), result.item)">
            <div class="results__item__title" v-html="resultTitle(result)"></div>
            <div class="results__item__desc" v-if="resultSynopsis(result)" v-html="resultSynopsis(result)"></div>
            <div class="results__item__h2" v-if="resultHeader(result)">{{resultHeader(result).title}}</div>
          </div>
        </div>
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
.search-box {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgba(176,180,207,0.2);
  padding-left: 2rem;
  padding-right: 2rem;
  grid-template-columns: 1.5rem 1fr 1.25rem;
  gap: 1rem;
  box-sizing: border-box;
}
.search-box__input__input {
  border: none;
  background: none;
  outline: none;
  font-size: 1.25rem;
  width: 100%;
  padding: 1.5rem 0.5rem;
}
.search-box__input__input::-webkit-input-placeholder {
  color: rgba(14,33,37,0.26);
}
.search-box__clear__icon {
  cursor: pointer;
  fill: rgba(0,0,0,0.15);
  margin-top: 0.25rem;
}
.search-box__clear__icon:hover,
.search-box__clear__icon:focus {
  fill: rgba(0,0,0,0.25);
  outline: none;
}
.search-box__button {
  text-transform: uppercase;
  color: var(--ds-color-primary, black);
  font-weight: 500;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
.results {
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.results__item {
  padding: 1rem 2rem;
  cursor: pointer;
}
.results__item__selected__true {
  background-color: #fff;
}
.results__item__title {
  color: var(--ds-color-primary, black);
}
.results__item__h2 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
  font-size: 0.875rem;
}
.results__item__h2__item {
  display: inline-block;
}
.results__item__h2__item:after {
  content: '>';
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.results__item__h2__item:last-child:after {
  content: '';
}
.results__item__desc {
  opacity: 0.5;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  font-size: 0.875rem;
}
.results__item__desc:after {
  content: '';
  background: linear-gradient(to right, rgba(248,249,252,0.5) 0%, #f8f9fc);
  height: 1em;
  width: 2em;
  padding-bottom: 0.25rem;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
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

export default {
  props: ["visible", "query", "site"],
  components: {
    IconSearch,
    IconCircleCross,
    SectionShortcuts,
    SectionResultsEmpty
  },
  data: function() {
    return {
      searchResults: null,
      searchQuery: null,
      fuse: null,
      searchResultSelectedIndex: null
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
      return debounce(this.search, 300);
    }
  },
  mounted() {
    hotkeys("down", (e) => {
      this.selectResult(+1)
      e.preventDefault();
    });
    hotkeys("up", (e) => {
      this.selectResult(-1)
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
    isSearchResultSelected(index) {
      return this.searchResultSelectedIndex === index
    },
    md: string => {
      const md = new MarkdownIt({ html: true, linkify: true });
      return `<div>${md.renderInline(string)}</div>`;
    },
    resultTitle(result) {
      const path = this.itemPath(result.item) ? this.itemPath(result.item) + " /" : ""
      return this.md(`${path} ${result.item.title}`)
    },
    resultSynopsis(result) {
      if (!result.item.frontmatter.description) return false;
      return this.md(
        result.item.frontmatter.description
          .split("")
          .slice(0, 75)
          .join("") + "..."
      );
    },
    resultLink(result) {
      const header = this.resultHeader(result);
      return result.item.path + (header ? `#${header.slug}` : "");
    },
    resultHeader(result) {
      if (!result.item.headers) return false;
      const headers = result.item.headers.filter(h =>
        h.title.match(new RegExp(this.query, "gi"))
      );
      if (headers && headers.length) return headers[0];
    },
    search(e) {
      if (!this.query) return;
      const fuse = this.fuse.search(this.query).map(result => {
        return {
          ...result,
          item: find(this.site.pages, { key: result.item.key })
        };
      });
      this.searchResults = fuse;
    },
    itemByKey(key) {
      return find(this.site.pages, { key });
    },
    itemSynopsis(item) {
      return (
        this.itemByKey(item.ref) &&
        this.itemByKey(item.ref).frontmatter &&
        this.itemByKey(item.ref).frontmatter.description &&
        this.md(this.itemByKey(item.ref).frontmatter.description)
      );
    },
    itemClick(url, item) {
      this.$emit("visible", false);
    },
    itemPath(sourceItem) {
      let path = sourceItem.path
        .split("/")
        .filter(item => item !== "")
        .map((currentValue, index, array) => {
          let path = array.slice(0, index + 1).join("/");
          return "/" + path;
        })
        .map(item => {
          return /\.html$/.test(item) ? item : `${item}/`;
        });
      path = path.map(item => {
        const found = find(this.site.pages, page => {
          return page.regularPath === item;
        });
        const noIndex = {
          title: last(item.split("/").filter(e => e !== "")),
          path: ""
        };
        return found ? found : noIndex;
      });
      return path
        .map(p => p.title)
        .slice(0, -1)
        .pop();
    },
    selectResult(delta) {
      const
        index = this.searchResultSelectedIndex,
        isValidIndex = Number.isInteger(index) && index >= 0
      if (isValidIndex) {
        this.searchResultSelectedIndex = index + delta
      } else {
        this.searchResultSelectedIndex = 0
      }
    },
  }
};
</script>