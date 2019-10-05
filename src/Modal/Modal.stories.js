import Modal from "./Modal.vue";

export default {
  title: "Modal"
};

export const normal = () => ({
  components: { Modal },
  template: `
    <modal>Content</modal>
  `
});
