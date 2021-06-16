<template>
  <div>
    <h2>{{ vocabList.name }}</h2>
    <ListItem v-for="item in vocabList.vocabItems" :vocab-items="item" :key="item.id"/>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IVocabList } from "@/types";
import ListItem from "@/components/ListItem.vue";

export default Vue.extend({
  name: "ListGroup",
  components: { ListItem },
  props: {
    vocabList: {
      type: Object as PropType<IVocabList>,
      required: true,
    },
  },
});
</script>
