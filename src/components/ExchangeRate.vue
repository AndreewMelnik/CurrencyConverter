<template>
  <v-row class="flex-wrap wrap">
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-card-text>
          <h1>Currency Converter</h1>
        </v-card-text>
        <v-row justify="space-around" class="mt-3">
          <v-col cols="3">
            <span> Курс USD </span>
            <v-textarea
                class="currency"
                type="number"
                readonly
                auto-grow
                outlined
                rows="8"
                row-height="5"
                :value="currencies.USD.Value"
            />
          </v-col>
          <v-col cols="3">
            <span> Курс EUR </span>
            <v-textarea
                type="number"
                readonly
                auto-grow
                outlined
                rows="8"
                row-height="5"
                :value="currencies.EUR.Value"
            ></v-textarea>
          </v-col>
          <v-col cols="3">
            <span> Курс RUB </span>
            <v-textarea
                type="number"
                readonly
                auto-grow
                outlined
                rows="8"
                row-height="5"
                :value="currencies.GBP.Value"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState, mapGetters} from 'vuex'


export default {
  name: "ExchangeRate",
  computed: {
    ...mapState({
      currencies: state => state.currencies,
    }),
    ...mapGetters([
      'getCountries',

    ])
  },
  async mounted() {
    if (this.currencies === null) {
      await this.getCurrencies()
    }
  },

}
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: "Roboto", sans-serif;
}
</style>