<script setup lang="ts">
import { useAttrs } from "vue";
import type { PropType } from "vue";
import type { DTextType, DTextVariant } from "./DText";

const props = defineProps({
  type: {
    type: String as PropType<DTextType>,
    default: "p"
  },
  variant: {
    type: String as PropType<DTextVariant> || Array as PropType<DTextVariant[]> ,
    default: "p"
  }
});

const attrs = useAttrs();
</script>

<template>
  <component :is="type" :class="variant" :bind="attrs"><slot /></component>
</template>

<style scoped lang="scss">
.h1 {
  @extend %h1;
}

.h2 {
  @extend %h2;

}

.h3 {
  @extend %h3;
}

.h4 {
  @extend %h4;
}

.h5 {
  @extend %h5;
}

.h6 {
  @extend %h6;
}

.p {
  @extend %p;
}

.footnote {
  @extend %footnote;
}

.secondary {
  color: var(--color-text-secondary)
}
</style>
