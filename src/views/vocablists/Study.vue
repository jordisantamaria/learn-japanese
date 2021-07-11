<template>
  <div>Study vocablist</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class StudyVocabList extends Vue {
  @Prop() prop: string | undefined;
}
</script>
