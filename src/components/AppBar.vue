<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Learn Japanese</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppBar extends Vue {
  @Prop() prop: string | undefined;
}
</script>
