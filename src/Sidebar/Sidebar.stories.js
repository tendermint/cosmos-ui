import Sidebar from "./Sidebar.vue";
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
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
    marginTop: {
      default: text("Margin top", "")
    },
    backgroundColor: {
      default: text("Background color", "rgba(0, 0, 0, 0.35)")
    },
    boxShadow: {
      default: text("Box shadow", "none")
    },
    fullscreen: {
      default: boolean("Fullscreen", false)
    },
    sidebarContent: {
      default: text("Sheet content", data.sidebar.lorem.join(""))
    },
  },
  template: `
    <div>
      <div>
        <Sidebar v-bind="{side, width, maxWidth, fullscreen, height, maxHeight, marginTop, backgroundColor, boxShadow}" :visible="visible" v-if="visible" @visible="visible = $event">
          <div>{{sidebarContent}}</div>
        </Sidebar>
        <div>
          <p v-for="text in data.lorem.slice(1,4)">{{text}}</p>
          <button @click="visible = !visible">Open sidebar</button>
          <p v-for="text in data.lorem">{{text}}</p>
        </div>
      </div>
    </div>
  `
});