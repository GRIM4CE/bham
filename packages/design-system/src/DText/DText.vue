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
    type: String as PropType<DTextVariant>,
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
  font-size: 18px;
}

.p {
  font-size: 14px;
}
</style>
