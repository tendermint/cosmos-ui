import GozCard from "./GozCard"

export default {
  title: "GozCard",
  component: GozCard
}

export const normal = () => ({
  components: { GozCard },
  template: `
    <goz-card/>
  `
})