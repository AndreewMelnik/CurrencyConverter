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
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

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

h1, h2, h3 {
  font-family: 'Indie Flower';
}

.bg--light {
  background: #fcfcfc;
}

.exchange {
  max-width: 50px;
}
.row {
  margin:-6px !important;
}

</style>