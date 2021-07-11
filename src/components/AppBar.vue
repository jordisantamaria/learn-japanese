<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>
        <router-link to="/" class="white--text text-decoration-none"
        >Learn Japanese</router-link
        >
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppBar extends Vue {
}
</script>
