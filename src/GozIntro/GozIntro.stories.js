import GozIntro from "./GozIntro"

export default {
  title: "GozIntro",
  component: GozIntro
}

export const normal = () => ({
  components: { GozIntro },
  template: `
    <div>
      <goz-intro>
        <template v-slot:text>
          In preparation for the launch of the forthcoming <a href="https://cosmos.network/ibc" target="_blank" rel="noreferrer noopener">Inter-Blockchain Communication (IBC)</a> module, we are announcing Cosmos's second ever adversarial testnet challenge: Game of Zones. This competition will create an invaluable educational opportunity and environment for the Cosmos community to learn the nuances of the IBC protocol, including exception handling and potential failure modes. More information on this competition will be coming soon, so stay tuned for updates.
        </template>
      </goz-intro>
    </div>
  `
})