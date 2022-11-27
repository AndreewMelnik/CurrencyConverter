import Vue from 'vue';
import VueRouter from 'vue-router';
import ConverterPage from "@/Components/ConverterPage";
import CurrenciesPage from "@/Components/CurrenciesPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:"Converter",
    component: ConverterPage
  },
  {
    path: '/Currencies',
    name: "Currencies",
    component: CurrenciesPage
  },
]

export default new VueRouter( {
  mode: 'history',
  routes: routes
}
)