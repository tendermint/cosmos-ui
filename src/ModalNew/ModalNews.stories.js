import ModalNew from "./ModalNew.vue";
import * as data from "./data"

export default {
  title: "ModalNew",
  component: ModalNew
};

export const normal = () => ({
  components: { ModalNew },
  data: function () {
    return {
      data,
      open: null
    };
  },
  template: `
    <div>
      <button @click="open = !open">Open modal</button>
      <div>{{data.lorem}}</div>
      <button @click="open = !open">Open modal</button>
      <modal-new :open="!!(open)" @open="open = $event" position="left">
        <div>Modal content</div>
      </modal-new>
    </div>
  `
});
