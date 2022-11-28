<template>
  <div class="ara">
    <div
        v-for="(value, key) in currencies"
        :key="key"
    >
      {{ key }} : {{ value.Value }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "CurrenciesPage",
  computed: {
    ...mapState({
      currencies: state => state.currencies
    })
  },
  methods: {
    ...mapActions(['getCurrencies'])
  },
  async mounted() {
    if (this.currencies === null) {
      await this.getCurrencies()
    }
  }
}
</script>

<style scoped>

</style>