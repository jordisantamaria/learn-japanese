<template>
  <v-alert type="error" v-if="errorMessage" class="error-alert">
    <span> {{ errorMessage }} </span>
    <v-icon @click="onClose" class="close-icon fas fa-times"/>
  </v-alert>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { errorsModule } from "@/store/modules/errors";

@Component
export default class ErrorAlert extends Vue {
  get errorMessage() {
    return errorsModule.errorMessage
  }

  private onClose() {
    return errorsModule.RESET_ERROR_MESSAGE();
  }
}
</script>
<style scoped lang="scss">
.error-alert {
  /*position: sticky;
  top: 0;
  z-index: 5;*/
}
.close-icon {
  position: absolute !important;
  right: 10px;
  cursor: pointer;
}
</style>
