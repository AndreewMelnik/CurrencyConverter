<template>
  <div class="currencies">
    Exchange rate (1 RUB) on {{ date.slice(0, -15) }}:
    <v-list dense>
      <v-list-item
          class="list-item">
        <v-list-item-group
            class="list-item-group"
            v-for="(value, key) in currencies"
            :key="key">{{ key }} : {{ value.Value }}
        </v-list-item-group>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "CurrenciesPage",
  computed: {
    ...mapState({
      currencies: state => state.currencies,
      date: state => state.date
    })
  },
  methods: {
    ...mapActions(['getCurrencies', 'getDate'])
  },
  async mounted() {
    if (this.currencies === null) {
      await this.getCurrencies()
    }
  }
}
</script>

<style scoped>

.currencies {
  margin-top: 40px;
  width: 100%;
  padding: 10px;
  background: white;
}

.list-item {
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 425px;
  align-items: end;
}

</style>