<template>
  <div class="tm-countdown">
    <div class="tm-kvs">
      <div class="tm-kv">
        <div class="tm-kv-value">{{ twoDigits(days) }}</div>
        <div class="tm-kv-key">
          <template v-if="units === 'short'">D</template>
          <template v-else>Days</template>
        </div>
      </div>
      <div class="tm-kv">
        <div class="tm-kv-value">{{ twoDigits(hours) }}</div>
        <div class="tm-kv-key">
          <template v-if="units === 'short'">H</template>
          <template v-else>Hours</template>
        </div>
      </div>
      <div class="tm-kv">
        <div class="tm-kv-value">{{ twoDigits(minutes) }}</div>
        <div class="tm-kv-key">
          <template v-if="units === 'short'">M</template>
          <template v-else>Minutes</template>
        </div>
      </div>
      <div class="tm-kv">
        <div class="tm-kv-value">{{ twoDigits(seconds) }}</div>
        <div class="tm-kv-key">
          <template v-if="units === 'short'">S</template>
          <template v-else>Seconds</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-countdown",
  computed: {
    usableDate() {
      if (this.utc) {
        let offset = new Date().getTimezoneOffset() * 60 * 1000
        let utc = Date.parse(this.date) - offset
        return Math.trunc(utc / 1000)
      } else {
        return Math.trunc(Date.parse(this.date) / 1000)
      }
    },
    seconds() {
      return (this.usableDate - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.usableDate - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.usableDate - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.usableDate - this.now) / 60 / 60 / 24)
    }
  },
  data() {
    return {
      now: this.fixednow || Math.trunc(new Date().getTime() / 1000)
    }
  },
  methods: {
    twoDigits(number) {
      if (number < 10) return "0" + number
      else return number
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = this.fixednow || Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  props: {
    date: { type: String },
    units: { type: String },
    fixednow: { type: Number },
    utc: { type: Boolean, default: process.env.NODE_ENV === "test" }
  }
}
</script>
