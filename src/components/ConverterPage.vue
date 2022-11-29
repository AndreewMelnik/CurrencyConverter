<template>
  <div class="page">
    <ExchangeRate/>
    <CurrencyConverter/>
  </div>
</template>

<script>
import CurrencyConverter from "@/Components/CurrencyConverter";
import ExchangeRate from "@/Components/ExchangeRate";
export default {
  name: "ConverterPage",
  components: { CurrencyConverter,ExchangeRate}
}

</script>

<style scoped>

</style>