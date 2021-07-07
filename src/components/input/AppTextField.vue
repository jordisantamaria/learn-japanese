<template>
  <ValidationProvider :rules="rules" :name="label" v-slot="{ errors }">
    <v-text-field
      :single-line="singleLine"
      :flat="flat"
      :outline="outline"
      v-model="fieldValue"
      :label="label"
      :prepend-inner-icon="prependInnerIcon"
      :error-messages="errors"
      :type="type"
      :required="required"
      :disabled="disabled"
      :clearable="clearable"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppTextField extends Vue {
  @Prop() rules: string | undefined;
  @Prop() value: string | number | undefined;
  @Prop() label: string | number | undefined;
  @Prop() prependInnerIcon: string | undefined;
  @Prop() type: string | undefined;
  @Prop({ default: false }) singleLine: boolean | undefined;
  @Prop({ default: false }) flat: boolean | undefined;
  @Prop({ default: false }) outline: boolean | undefined;
  @Prop({ default: false }) required: boolean | undefined;
  @Prop({ default: false }) disabled: boolean | undefined;
  @Prop({ default: false }) clearable: boolean | undefined;

  get fieldValue() {
    return this.value;
  }
  set fieldValue(value) {
    this.$emit('input', value);
  }
}
</script>
