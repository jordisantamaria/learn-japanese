<template>
  <AppContainer>
    <h2 class="mb-4">Create List</h2>
    <v-form @submit.prevent="onSubmit">
      <v-text-field v-model="name" placeholder="List name"/>
      <v-card class="pa-3 mb-4" v-for="(item, index) in vocabItems" :key="index">
        <h4>Vocab Item {{index + 1}}</h4>
        <v-text-field v-model="item.word" placeholder="Word"/>
        <v-text-field v-model="item.pronunciation" placeholder="Pronunciation"/>
        <v-text-field v-model="item.translation" placeholder="Translation"/>
        <v-text-field v-model="item.association" placeholder="Association"/>
        <v-text-field v-model="item.image" placeholder="Upload Image"/>
      </v-card>
      <div class="d-flex mt-4">
        <v-btn class="mr-3" @click="addVocabItem">Add Vocab Item</v-btn>
        <v-btn type='submit'>Create</v-btn>
      </div>
    </v-form>

  </AppContainer>
</template>

<script lang="ts">
import Vue from "vue";
import AppContainer from "@/components/shared/AppContainer.vue";
import { IVocabItem } from "@/types";
import { mapActions } from 'vuex'

const initialVocabItem = {
  word: '',
  translation: '',
  pronunciation: '',
  association: '',
  image: ''
}

export default Vue.extend({
  name: "CreateList",
  components: {
    AppContainer
  },
  data () {
    return {
      name: '',
      vocabItems: [initialVocabItem] as IVocabItem[]
    }
  },
  methods: {
    ...mapActions("vocabLists", ['createList']),
    onSubmit() {
      console.log(`list name = ${this.name}, vocabItems = ${this.vocabItems}`,)
      this.createList({name: this.name, vocabItems: this.vocabItems})
      this.$router.push({ name: 'Home'})
    },
    addVocabItem() {
      this.vocabItems.push(initialVocabItem)
    }
  }
});
</script>
