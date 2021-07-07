<template>
  <AppContainer>
    <h2 class="mb-4">Lists</h2>
    <ListGroup v-for="list in vocabLists" :vocab-list="list" :key="list.id"/>
    <v-btn :to="{name: 'CreateVocabList'}" >Create List</v-btn>
  </AppContainer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListGroup from "@/components/vocablists/ListGroup.vue";
import AppContainer from "@/components/AppContainer.vue";
import { vocabListsModule } from "@/store/modules/vocabLists";

@Component({
  components: { AppContainer, ListGroup }
})
export default class ShowVocabLists extends Vue {
  get vocabLists() {
    return vocabListsModule.vocabListsArray
  }
  created() {
    vocabListsModule.fetchVocabLists()
  }
}
</script>
