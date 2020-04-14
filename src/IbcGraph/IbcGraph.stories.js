import IbcGraph from "./IbcGraph";

export default {
  title: "IbcGraph",
  component: IbcGraph
};

export const normal = () => ({
  components: { IbcGraph },
  template: `
    <div>
      <ibc-graph/>
    </div>
  `
});
