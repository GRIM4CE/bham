<script setup lang="ts">
import { useAttrs } from "vue";

defineProps({
  type: {
    type: String,
    default: "p"
  },
  variant: {
    type: String,
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
