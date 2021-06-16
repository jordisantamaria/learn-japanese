<template>
  <div>
    <span class="mr-3">{{vocabItems.word}}</span>
    <span class="mr-3">{{vocabItems.pronunciation}}</span>
    <span class="mr-3">{{vocabItems.translation}}</span>
    <span class="mr-3">{{vocabItems.association}}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IVocabItem } from "@/types";

export default Vue.extend({
  name: "ListItem",
  props: {
    vocabItems: {
      type: Object as PropType<IVocabItem>,
      required: true,
    },
  },

});
</script>
