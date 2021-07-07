<template lang="pug">
  div
    span.mr-3 {{vocabItem.word}}
    span.mr-3 {{vocabItem.pronunciation}}
    span.mr-3 {{vocabItem.translation}}
    span.mr-3 {{vocabItem.association}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VocabItem } from "@/types/VocabItem";

@Component({
  components: {}
})
export default class ListItem extends Vue {
  @Prop() vocabItem: VocabItem | undefined;
}
</script>
