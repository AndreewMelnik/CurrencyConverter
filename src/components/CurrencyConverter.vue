<template>
<v-row>
  <v-row class="flex-wrap wrap">
    <v-col cols="12">
      <v-card  class="mx-auto">
        <v-card-text >
          <h1>Currency Converter</h1>
        </v-card-text>
        <v-row justify="space-around" class="mt-3">
          <v-col cols="3">
            <span>
              Курс USD
            </span>
            <v-textarea
                v-for="currency in currencies"
                key:
                class="currency"
                type="number"
                readonly
                auto-grow
                outlined
                rows="8"
                row-height="5"
            >{{currency.Value}}</v-textarea>
          </v-col>
          <v-col cols="3">
            <span>
              Курс EUR
            </span>
            <v-textarea
                v-model="selected[2]"
                type="number"
                readonly
                auto-grow
                outlined
                rows="8"
                row-height="5"
            ></v-textarea>
          </v-col>
          <v-col cols="3">
            <span>
              Курс RUB
            </span>
            <v-textarea
                v-model="selected[3]"
                type="number"
                readonly
                auto-grow
                outlined
                rows="8"
                row-height="5"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="flex-wrap wrap">
    <v-col cols="5">
      <v-card max-width="500" class="mx-auto">
        <v-card-text>
          <v-select
              color=gray
              @change="convert"
              v-model="selected[0]"
              :items="countries"
              standard
              label="Select currency"
          ></v-select>
          <v-textarea
              @input="convert"
              v-model="inputed"
              :rules="[rules.onlyNumbers]"
              auto-grow
              outlined
              rows="1"
              row-height="15"
          ></v-textarea>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col class="d-flex justify-center align-center">
      <img class="exchange" :src="require('../assets/icons/exchange.svg')" alt="Exchange">
    </v-col>

    <v-col cols="5">
      <v-card max-width="500" class="mx-auto">
        <v-card-text>
          <v-select
              @change="convert"
              v-model="selected[1]"
              :items="countries"
              standard
              label="Select currency"
          ></v-select>
          <v-textarea
              v-model="result"
              type="number"
              readonly
              auto-grow
              outlined
              rows="1"
              row-height="15"
          ></v-textarea>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-row>

</template>

<script>
import {default as axios} from "axios";


export default {
  name: "CurrencyConverter",


  data() {

    return {
      currencies: null,
      selected: ['RUB', 'USD','EUR','GBP'],
      inputed: "",
      result: null,
      countries: ['RUB'],
      rules: {
        onlyNumbers: (value) => {
          const pattern = /^\d+$/.test(value);

          if (!pattern) this.inputed = this.inputed.replace(/\D/g, '');

          return true;
        }
      }
    }
  },


  methods: {

    convert() {
      // Значения валюты по умолчанию / RUB
      let defaultCurrency = {
        Value: 1,
        Nominal: 1
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
      let result = (firstCurrencyValue / firstCurrencyNominal) / (secondCurrencyValue / secondCurrencyNominal);

      // Округление
      this.result = result ? Math.floor(result * 10000) / 10000 : null;

      //Значения для постоянных валют

      let resultUSD = (this.currencies[this.selected[1]].Value);
      let resultEUR = this.currencies[this.selected[2]].Value;
      let resultGBP = this.currencies[this.selected[3]].Value;
      alert(resultUSD)
    }
  },


  mounted() {
    // Запрос к API, получение ответа
    axios
        .get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => {
          this.currencies = response.data.Valute;
          // Adding all charCodes to array
          for (let code in response.data.Valute) {
            this.countries.push(code)
          }
        })
        .catch(error => {
          console.log(error)
        })

  },


}
</script>

<style scoped>

</style>