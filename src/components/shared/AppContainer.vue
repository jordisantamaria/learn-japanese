<template>
  <v-container>
    <slot></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppContainer",
});
</script>

