<template>
  <div id="components">
    <section>
      <header>TmBtn</header>
      <tm-btn value="Button" />
      <tm-btn value="Primary" color="primary" />
      <tm-btn value="Success" color="success" />
      <tm-btn value="Warning" color="warning" />
      <tm-btn value="Danger" color="danger" />
      <tm-btn value="Button Disabled" disabled />
    </section>
    <section>
      <header>TmBtn (Large)</header>
      <tm-btn value="Button" size="lg" />
      <tm-btn value="Primary" color="primary" size="lg" />
      <tm-btn value="Success" color="success" size="lg" />
      <tm-btn value="Warning" color="warning" size="lg" />
      <tm-btn value="Danger" color="danger" size="lg" />
      <tm-btn value="Button Disabled" size="lg" disabled />
    </section>
    <section>
      <header>TmListItem</header>
      <tm-list-item
        image="https://placehold.it/47x47"
        dt="Definition Title"
        dd="Definition Data" />
      <tm-list-item
        href="/"
        dt="Definition Title"
        dd="Definition Data" />
      <tm-list-item dt="Definition Title" dd="Definition Data" />
      <tm-list-item
        image="https://placehold.it/47x47"
        href="/"
        title="List Item Title"
        subtitle="List Item Subtitle" />
      <tm-list-item
        href="/"
        title="List Item Title"
        subtitle="List Item Subtitle" />
      <tm-list-item
        title="List Item Title"
        subtitle="List Item Subtitle" />
    </section>
    <section>
      <header>TmField</header>
        <tm-field
        type="number"
        placeholder="Placeholder"
        step="1"
        min="0"
        max="100"
        v-model="tmFieldNumber"
        />
    </section>
  </div>
</template>

<script>
import { TmBtn, TmListItem, TmField } from "../index.js"

export default {
  name: "home",
  data: () => ({
    tmFieldNumber: null
  }),
  components: {
    TmBtn,
    TmListItem,
    TmField
  }
}
</script>

<style scoped>
section {
  padding: 1rem;
  border-top: 1px solid var(--bc);
}
section > header {
  font-size: 1.5rem;
  color: var(--bright);
  margin-bottom: 1rem;
}
.tm-btn {
  margin-right: 1rem;
}
</style>
