<template>
  <v-row v-if="currencies!=null">
    <v-row class="flex-wrap wrap">
      <v-col cols="5">
        <v-card class="mx-auto" max-width="500">
          <v-card-text>
            <v-select
                v-model="selected[0]"
                :items="getCountries"
                color="gray"
                filled
                label="Select currency"
                @change="convert"
            ></v-select>
            <v-textarea
                v-model="inputed"
                :rules="[rules.onlyNumbers]"
                auto-grow
                outlined
                row-height="15"
                rows="1"
                @input="convert"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="exchange-img">
        <img
            :src="require('./exchange.svg')"
            alt="Exchange"
            class="exchange"
        />
      </v-col>

      <v-col cols="5">
        <v-card class="mx-auto" max-width="500">
          <v-card-text>
            <v-select
                v-model="selected[1]"
                :items="getCountries"
                filled
                label="Select currency"
                @change="convert"
            ></v-select>
            <v-textarea
                v-model="result"
                auto-grow
                outlined
                readonly
                row-height="15"
                rows="1"
                type="number"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: "CurrencyConverter",

  data() {
    return {
      selected: ['RUB', 'USD', 'EUR', 'GBP'],
      inputed: "",
      result: null,
      rules: {
        onlyNumbers: (value) => {
          const pattern = /^\d+$/.test(value);

          if (!pattern) this.inputed = this.inputed.replace(/\D/g, "");

          return true;
        },
      },
    };
  },

  computed: {
    ...mapState({
      currencies: state => state.currencies,
    }),
    ...mapGetters([
      'getCountries',

    ])
  },

  methods: {
    convert() {
      // Значения валюты по умолчанию / RUB
      let defaultCurrency = {
        Value: 1,
        Nominal: 1,
      };

      // Детали первой выбранной валюты
      let firstCurrency = this.currencies[this.selected[0]] ?? defaultCurrency,
          firstCurrencyValue = firstCurrency.Value * Number(this.inputed),
          firstCurrencyNominal = firstCurrency.Nominal;

      // Детали второй выбранной валюты
      let secondCurrency = this.currencies[this.selected[1]] ?? defaultCurrency,
          secondCurrencyValue = secondCurrency.Value,
          secondCurrencyNominal = secondCurrency.Nominal;

      // Результат вычисления
      let result =
          firstCurrencyValue /
          firstCurrencyNominal /
          (secondCurrencyValue / secondCurrencyNominal);

      // Округление
      this.result = result ? Math.floor(result * 10000) / 10000 : null;
    },
    ...mapActions([
      "getCurrencies",
    ])
  },

  async mounted() {
    if (this.currencies === null) {
      await this.getCurrencies()
    }
  },
};
</script>

<style scoped>

.row {
  margin: -2px !important;
}

.exchange-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

