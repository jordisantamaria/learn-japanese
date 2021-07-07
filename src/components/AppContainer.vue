<template lang="pug">
  v-container
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppContainer extends Vue {
  @Prop() prop: string | undefined;
}
</script>
