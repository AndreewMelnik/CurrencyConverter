<template>
  <v-row class="flex-wrap wrap">
    <v-col cols="12">
      <v-card  class="mx-auto">
        <v-card-text >
          <h1>Currency Converter</h1>
        </v-card-text>
        <v-row justify="space-around" class="mt-3">
        <v-col cols="3">
          <v-textarea
              v-model="result"
              type="number"
              readonly
              auto-grow
              outlined
              rows="8"
              row-height="15"
          ></v-textarea>
        </v-col>
        <v-col cols="3">
          <v-textarea
              v-model="result"
              type="number"
              readonly
              auto-grow
              outlined
              rows="8"
              row-height="15"
          ></v-textarea>
        </v-col>
        <v-col cols="3">
          <v-textarea
              v-model="result"
              type="number"
              readonly
              auto-grow
              outlined
              rows="8"
              row-height="15"
          ></v-textarea>
        </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>


 export default {
  name: "ExchangeRate",

}
</script>

<style scoped>
h1{
   text-align: center;
   font-family: "Roboto", sans-serif;
}
</style>