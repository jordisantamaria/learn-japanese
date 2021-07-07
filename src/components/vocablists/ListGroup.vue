<template lang="pug">
  div
    h2 {{vocabList.name}}
    ListItem(v-for="item in vocabList.vocabItems" vocab-item="item" :key="item.id")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VocabList } from "@/types/VocabList";
import ListItem from "@/components/vocablists/ListItem.vue";

@Component({
  components: { ListItem }
})
export default class ListGroup extends Vue {
  @Prop() vocabList: VocabList  | undefined;
}
</script>
