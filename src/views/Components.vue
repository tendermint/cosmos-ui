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
      <tm-list-item
        title="List Item Title"
        subtitle="List Item Subtitle" />
    </section>
    <section>
      <header>TmLiTransaction</header>
      <header>TmLiBankTransaction</header>
      <tm-li-bank-transaction :transaction="txs[0]" address="tb1da6xsetjg9jxgun9wdesexv05j" />
      <tm-li-bank-transaction :transaction="txs[1]" address="tb1da6xsetjg9jxgun9wdesexv05j" />
      <tm-li-bank-transaction :transaction="txs[2]" address="tb1da6xsetjg9jxgun9wdesexv05j" />
      <header>TmLiStakeTransaction</header>
      <tm-li-stake-transaction :transaction="txs[3]" :validators="validators" />
      <tm-li-stake-transaction :transaction="txs[4]" :validators="validators" />
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

    <section>
      <header>TmCookieConsent</header>
      <tm-cookie-consent/>
    </section>
  </div>
</template>

<script>
import {
  TmBtn,
  TmField,
  TmListItem,
  TmLiBankTransaction,
  TmLiStakeTransaction,
  TmCookieConsent
} from "../index.js"
import txs from "../../assets/txs.js"

export default {
  name: "home",
  components: {
    TmBtn,
    TmField,
    TmListItem,
    TmLiBankTransaction,
    TmLiStakeTransaction,
    TmCookieConsent
  },
  data: () => ({
    tmFieldNumber: null,
    txs,
    validators: [
      {
        owner: "cosmosvaladdr15ky9du8a2wlstz6fpx3p4mqpjyrm5ctqzh8yqw",
        moniker: "cool validator"
      }
    ]
  })
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
