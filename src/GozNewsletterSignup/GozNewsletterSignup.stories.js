import GozNewsletterSignup from "./GozNewsletterSignup"

export default {
  title: "GozNewsletterSignup",
  component: GozNewsletterSignup
}

export const normal = () => ({
  components: { GozNewsletterSignup },
  template: `
    <goz-newsletter-signup/>
  `
})