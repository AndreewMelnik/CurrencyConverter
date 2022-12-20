<template>
  <v-app>
    <v-container>
      <AppHeader/>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>

import AppHeader from "@/Components/AppHeader";


export default {

  name: 'App',
  components: {AppHeader},

};

</script>

<style lang="scss">


#app {
  //background: linear-gradient(-45deg, rgba(162, 54, 24, 0.91), rgba(190, 28, 91, 0.97), rgba(24, 116, 148, 0.89), rgba(26, 128, 103, 0.6));
  //background-size: 400% 400%;
  //animation: gradient 15s ease infinite;
  background: #a9a9a978;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

.container {
  max-width: 1185px !important;
}

.bg--light {
  background: #fcfcfc;
}

.exchange {
  max-width: 50px;
}

.row {
  margin: -6px !important;
}

.v-card {
  border-radius: 0 !important;
}

@media (max-width: 600px) {
  html, .v-input {
    font-size: 12px !important;
  }
  .exchange-img {
    padding: 0px;
  }
  .exchange-img img {
    width: 75% !important
  }
  .v-card__text {
    padding: 8px !important;
  }
  .v-input__slot {
    padding: 0 5px !important
  }
  h1 {
    font-size: 1.5em !important;
  }
}

@media (max-width: 400px) {
  html, .v-input, {
    font-size: 10px !important;
  }
  .v-label {
    font-size: 12px !important;
  }
}

.theme--dark.v-sheet {
  background-color: #2b2b2b85 !important
}
</style>