<template>
  <div class="navbar">
    <v-toolbar-items class="flex-grow-1">
      <v-btn
          to="/">Converter
      </v-btn>
      <v-btn
          to="/Currencies">Currencies
      </v-btn>
    </v-toolbar-items>
  </div>


</template>

<script>
export default {
  name: "app-header",
  data() {
    return {}
  },
};
</script>

<style>
.navbar {
  display: flex !important;
  height: 40px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-left: 6px;
  padding-right: 6px;
}

a {
  color: black !important;
  text-decoration: none;
}

.v-btn {
  height: 10px !important;
  text-transform: none;
  font-family: "AcuminPro-Medium";
  /*padding: 0 137px !important;*/
  flex-grow: 1;
}

.v-btn:before {
  opacity: 0 !important;
}

</style>
