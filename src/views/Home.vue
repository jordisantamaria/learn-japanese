<template>
  <AppContainer>
    <h2 class="mb-4">Lists</h2>
      <ListGroup v-for="list in vocabLists" :vocab-list="list" :key="list.id"/>
       <v-btn :to="{name: 'CreateList'}" >Create List</v-btn>
  </AppContainer>
</template>

<script lang="ts">
import Vue from "vue";
import AppContainer from "@/components/shared/AppContainer.vue";
import ListGroup from "@/components/ListGroup.vue";
import data from "../../data";

export default Vue.extend({
  name: "Home",
  components: {
    ListGroup,
    AppContainer
  },
  computed: {
    vocabLists() {
      console.log('state = ', this.$store.state)
      return this.$store.state.vocabLists
    }
  }
});
</script>
