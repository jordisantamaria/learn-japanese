<template>
  <div>Edit vocablist</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class EditVocabList extends Vue {
  @Prop() prop: string | undefined;
}
</script>
