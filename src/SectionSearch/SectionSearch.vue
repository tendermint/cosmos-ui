<template>
  <div>
    <div class="container">
      <div class="search-box">
        <div class="search-box__icon">
          <icon-search :stroke="query ? '#66A1FF' : '#aaa'" :fill="query ? '#66A1FF' : '#aaa'"></icon-search>
        </div>
        <div class="search-box__input">
          <input class="search-box__input__input" type="text" autocomplete="off" placeholder="Search" id="search-box-input" ref="search" :value="query" @input="$emit('query', $event.target.value)" />
        </div>
        <div class="search-box__clear">
          <icon-circle-cross class="search-box__clear__icon" v-if="query &amp;&amp; query.length &gt; 0" @click.native="$emit('query', '')" @keydown.enter="$emit('query', '')" tabindex="0"></icon-circle-cross>
        </div>
        <a class="search-box__button" @click="$emit('visible', false)" @keydown.enter="$emit('visible', false)" tabindex="0">Cancel</a>
      </div>
      <div class="results">
        <div class="shortcuts" v-if="!query">
          <div class="shortcuts__h1">Keyboard shortcuts</div>
          <div class="shortcuts__table">
            <div class="shortcuts__table__row">
              <div class="shortcuts__table__row__keys">
                <div class="shortcuts__table__row__keys__item">/</div>
              </div>
              <div class="shortcuts__table__row__desc">Open search window</div>
            </div>
            <div class="shortcuts__table__row">
              <div class="shortcuts__table__row__keys">
                <div class="shortcuts__table__row__keys__item" style="font-size: .65rem;">esc</div>
              </div>
              <div class="shortcuts__table__row__desc">Close search window</div>
            </div>
            <div class="shortcuts__table__row">
              <div class="shortcuts__table__row__keys">
                <div class="shortcuts__table__row__keys__item">↵</div>
              </div>
              <div class="shortcuts__table__row__desc">Open highlighted search result</div>
            </div>
            <div class="shortcuts__table__row">
              <div class="shortcuts__table__row__keys">
                <div class="shortcuts__table__row__keys__item" style="font-size: .65rem;">▼</div>
                <div class="shortcuts__table__row__keys__item" style="font-size: .65rem;">▲</div>
              </div>
              <div class="shortcuts__table__row__desc">Navigate between search results</div>
            </div>
          </div>
        </div>
        <div class="results__noresults__container" v-if="query &amp;&amp; (searchResults &amp;&amp; searchResults.length &lt;= 0)">
          <div class="results__noresults">
            <div class="results__noresults__icon">
              <icon-search></icon-search>
            </div>
            <div class="results__noresults__h1">No results for <strong>“{{query}}”</strong>
            </div>
            <div class="results__noresults__p">
              <span>Try queries such as <span class="results__noresults__a" @click="query = 'auth'" @keydown.enter="query = 'auth'">auth</span>, <span class="results__noresults__a" @click="query = 'slashing'" @keydown.enter="query = 'slashing'">slashing</span>, or <span class="results__noresults__a" @click="query = 'staking'" @keydown.enter="query = 'staking'">staking</span>.</span>
            </div>
          </div>
        </div>
        <div v-if="query &amp;&amp; searchResults &amp;&amp; searchResults.length &gt; 0">
          <div class="results__item" @keydown.40="focusNext" @keydown.38="focusPrev" ref="result" v-for="result in searchResults" v-if="searchResults" @keydown.enter="itemClick(resultLink(result), result.item)" @click="itemClick(resultLink(result), result.item)">
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
.shortcuts {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.shortcuts__h1 {
  text-align: center;
  color: rgba(22,25,49,0.65);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.shortcuts__table__row {
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 1.5rem;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.shortcuts__table__row__keys {
  display: flex;
  justify-content: flex-end;
}
.shortcuts__table__row__keys__item {
  color: #46509f;
  background-color: rgba(176,180,207,0.2);
  border: 1px solid rgba(176,180,207,0.09);
  border-radius: 0.25rem;
  font-size: 0.8125rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
}
.shortcuts__table__row__desc {
  color: rgba(22,25,49,0.65);
}
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
  color: var(--accent-color);
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
.results__noresults__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-top: 4rem;
}
.results__noresults {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.results__noresults__icon {
  max-width: 80px;
  margin-bottom: 2rem;
  fill: #ccc;
}
.results__noresults__h1 {
  color: rgba(22,25,49,0.65);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.results__noresults__p {
  color: rgba(22,25,49,0.65);
}
.results__noresults__a {
  cursor: pointer;
  color: var(--accent-color);
}
.results__item {
  padding: 1rem 2rem;
  cursor: pointer;
}
.results__item:focus {
  outline: none;
  background-color: #fff;
}
.results__item__title {
  color: var(--accent-color);
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

export default {
  props: ["visible", "query", "site"],
  components: { IconSearch, IconCircleCross },
  data: function() {
    return {
      searchResults: null,
      searchQuery: null,
      fuse: null
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
    this.$refs.search.addEventListener("keydown", e => {
      if (e.keyCode == 27) {
        this.$emit("visible", false);
        return;
      }
      if (e.keyCode == 40) {
        this.$refs.result[0].focus();
        e.preventDefault();
        return;
      }
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
      console.log("e")
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
      if (item.path != this.$page.path) {
        this.$router.push(url);
      }
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
    focusNext(e) {
      const next = e.target.nextSibling;
      if (next && next.focus) next.focus();
      e.preventDefault();
    },
    focusPrev(e) {
      const prev = e.target.previousSibling;
      if (prev && prev.focus) prev.focus();
      e.preventDefault();
    }
  }
};
</script>