<template>
  <div class="page">
    <ExchangeRate/>
    <CurrencyConverter/>
  </div>
</template>

<script>
import ExchangeRate from "@/Components/ExchangeRate";
import CurrencyConverter from "@/Components/CurrencyConverter";

export default {
  name: "ConverterPage",
  components: { ExchangeRate,CurrencyConverter}
}

</script>

<style scoped>

</style>