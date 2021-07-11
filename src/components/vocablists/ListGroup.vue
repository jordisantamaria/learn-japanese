<template>
  <div class="d-flex" >
    <h2 @click="onClickList">{{vocabList.name}}</h2>
    <div>
      <v-btn :to="{name: 'EditVocabList'}">Edit</v-btn>
      <v-btn @click="onClickDelete">Delete</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VocabList } from "@/types/VocabList";
import ListItem from "@/components/vocablists/ListItem.vue";
import { vocabListsModule } from "@/store/modules/vocabLists";

@Component({
  components: { ListItem }
})
export default class ListGroup extends Vue {
  @Prop() vocabList: VocabList  | undefined;

  onClickList() {
    this.$router.push({name: 'StudyVocabList'})
  }
  onClickDelete() {
    vocabListsModule.deleteVocabList(this.vocabList.id)
  }
}
</script>
