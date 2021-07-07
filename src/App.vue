<template>
  <v-app>
    <AppBar/>
    <ErrorAlert/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from "@/components/AppBar.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";

export default Vue.extend({
    name: 'App',
  components: { ErrorAlert, AppBar },
  data: () => ({
        //
    }),
});
</script>
<style lang="scss">
#app {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4d4f5c;
}
#app h1,
h2,
h3,
h4 {
    color: #43425d;
    font-weight: 500;
}
.v-application .display-1 {
    font-weight: bold;
}

input {
    border-color: #e9e9f0 !important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: #e9e9f0 !important;
}
.theme--light.v-input input,
.theme--light.v-input textarea {
    color: #43425d;
}

.v-skeleton-loader__image.v-skeleton-loader__bone {
    height: 100%;
}

.px-60 {
    padding-left: 60px;
    padding-right: 60px;
}
.pb-60 {
    padding-bottom: 60px;
}
</style>
