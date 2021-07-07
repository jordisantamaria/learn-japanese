<template>
  <AppContainer>
    <h2 class="mb-4">Create List</h2>
    <v-form @submit.prevent="onSubmit">
      <AppTextField
        v-model="fields.name"
        label="List name"
        type="text"
        rules="required"
      />
      <v-card
        class="pa-3 mb-4"
        v-for="(item, index) in fields.vocabItems"
        :key="index"
      >
        <h4>Vocab Item {{ index + 1 }}</h4>
        <AppTextField
          v-model="item.word"
          label="Word"
          type="text"
          rules="required"
        />
        <AppTextField
          v-model="item.pronunciation"
          label="Pronunciation"
          type="text"
          rules="required"
        />
        <AppTextField
          v-model="item.translation"
          label="Translation"
          type="text"
          rules="required"
        />
        <AppTextField
          v-model="item.association"
          label="Association"
          type="text"
        />
        <AppTextField
          v-model="item.image"
          label="Upload Image"
          type="text"
        />
      </v-card>
      <div class="d-flex mt-4">
        <v-btn class="mr-3" @click="addVocabItem">Add Vocab Item</v-btn>
        <v-btn type="submit">Create</v-btn>
      </div>
    </v-form>
  </AppContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VocabItem } from "@/types/VocabItem";
import AppContainer from "@/components/AppContainer.vue";
import AppTextField from "@/components/input/AppTextField.vue";
import { VocabList } from "@/types/VocabList";
import { vocabListsModule } from "@/store/modules/vocabLists";

@Component({
  components: { AppTextField, AppContainer }
})
export default class CreateVocabList extends Vue {
  @Prop() prop: string | undefined;

  fields = {
    name: null,
    vocabItems: []
  } as VocabList

  onSubmit() {
    console.log(`submit fields = `, this.fields);
    vocabListsModule.createVocabList(this.fields)
    this.$router.push({ name: "ShowVocabLists" });
  }

  addVocabItem() {
    this.fields.vocabItems.push({});
  }
}
</script>
