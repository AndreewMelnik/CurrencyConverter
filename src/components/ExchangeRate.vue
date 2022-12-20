<template>
  <v-row class="flex-wrap wrap">
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-card-text>
          <h1>Currency Converter</h1>
        </v-card-text>
        <v-row class="exchange-row">
          <v-col cols="3">
            <span> Курс USD </span>
            <v-textarea
                :value="currencies.USD.Value"
                auto-grow
                class="currency"
                outlined
                readonly
                row-height="5"
                rows="8"
                type="number"
            />
          </v-col>
          <v-col cols="3">
            <span> Курс EUR </span>
            <v-textarea
                :value="currencies.EUR.Value"
                auto-grow
                outlined
                readonly
                row-height="5"
                rows="8"
                type="number"
            ></v-textarea>
          </v-col>
          <v-col cols="3">
            <span> Курс RUB </span>
            <v-textarea
                :value="currencies.GBP.Value"
                auto-grow
                outlined
                readonly
                row-height="5"
                rows="8"
                type="number"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters, mapState} from 'vuex'


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

.exchange-row {
  justify-content: space-around;
  margin-top: 12px;
}
</style>