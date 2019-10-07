import { configure } from "@storybook/vue";

// automatically import all files ending in *.stories.js
const stories = require.context("../src", true, /\.stories\.(js?)$/);

configure(stories, module);
