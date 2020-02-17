import CodeBlock from "./CodeBlock.vue";
import { default as data } from "./data.js"

export default {
  title: "CodeBlock",
  component: CodeBlock,
};

export const normal = () => ({
  components: { CodeBlock },
  data: function () {
    return {
      data,
      url: "https://github.com/cosmos/sdk-tutorials/blob/c6754a1e313eb1ed973c5c91dcc606f2fd288811/deeply/nested/hidden/directory/go.mod#L1-L18",
    }
  },
  template: `
    <div>
      <p>One-line snippet without syntax highlighting:</p>
      <code-block :value="data.short"/>
      <p>Multiline snippet with syntax highlighting:</p>
      <code-block :value="data.medium" language="go"/>
      <p>Multiline snippet with syntax highlighting and expand button:</p>
      <code-block :value="data.long" :url="url" language="go"/>
    </div>
  `
});
