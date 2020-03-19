import NewsletterSignup from "./NewsletterSignup"

export default {
  title: "NewsletterSignup",
  component: NewsletterSignup
}

export const normal = () => ({
  components: { NewsletterSignup },
  template: `
    <newsletter-signup/>
  `
})