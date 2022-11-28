import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: null,
    loading: false
  },
  mutations: {
    setCurrencies(state, payload) {
      state.currencies = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  getters: {
    getCountries(state) {
      const res = ["RUB"]
      if(state.currencies === null) return res
      return res.concat(Object.keys(state.currencies))
    },
    getFilteredCurrencies(state) {
      const res = {}
      if (state.currencies === null) return res

      for (const currency in state.currencies) {
        if(state.currencies[currency].Value > 40) {
          res[currency] = state.currencies[currency]
        }
      }

      return res
    }
  },
  actions: {
    async getCurrencies(ctx) {
      ctx.commit('setLoading', true)

      try {
        const { data } = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
        ctx.commit('setCurrencies', data.Valute) // setCurrencies(state, data.Valute) => state.currencies = data.Valute
      } catch (error) {
        console.error(error)
      } finally {
        ctx.commit('setLoading', false)
      }
    }
  }
})