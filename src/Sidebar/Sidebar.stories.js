import Sidebar from "./Sidebar.vue";
import { withKnobs, text, select } from '@storybook/addon-knobs';
import data from "./data"

export default {
  title: "Sidebar",
  component: Sidebar,
  decorators: [withKnobs]
};

export const normal = () => ({
  components: { Sidebar },
  data: function () {
    return {
      visible: null,
      data: data.sidebar,
    }
  },
  props: {
    side: {
      default: select(
        "Side",
        ["left", "right", "bottom", "center"],
        "left"
      )
    },
    width: {
      default: text("Width", "")
    },
    maxWidth: {
      default: text("Max width", "")
    },
    height: {
      default: text("Height", "")
    },
    maxHeight: {
      default: text("Max height", "")
    },
    backgroundColor: {
      default: text("Background color", "rgba(0, 0, 0, 0.35)")
    },
    boxShadow: {
      default: text("Box shadow", "none")
    }
  },
  template: `
    <div>
      <div>
        <Sidebar v-bind="{side, width, maxWidth, height, maxHeight, backgroundColor, boxShadow}" :visible="visible" v-if="visible" @visible="visible = $event">
          <p v-for="text in data.lorem">{{text}}</p>
        </Sidebar>
        <div>
          <button @click="visible = !visible">Open sidebar</button>
          <p v-for="text in data.lorem">{{text}}</p>
        </div>
      </div>
    </div>
  `
});