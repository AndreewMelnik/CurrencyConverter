import Vue from 'vue';
import VueRouter from 'vue-router';
import ConverterPage from "@/Components/ConverterPage";
import CurrenciesPage from "@/Components/CurrenciesPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:"converter",
    component: ConverterPage
  },
  {
    path: '/CurrencyConverter/',
    name:"converter",
    component: ConverterPage
  },
  {
    path: '/currencies',
    name: "currencies",
    component: CurrenciesPage
  },
]

export default new VueRouter( {
  mode: 'history',
  routes: routes
}
)