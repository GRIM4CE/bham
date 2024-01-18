<script setup lang="ts">
import { useAttrs } from "vue";
import type { PropType } from "vue";
import type { DContainerType, DContainerVariant } from "./DContainer";

const props = defineProps({
  type: {
    type: String as PropType<DContainerType>,
    default: "div"
  },
  variant: {
    type: Array as PropType<DContainerVariant[]>,
  }
});

const attrs = useAttrs();
</script>

<template>
  <component class="d-container" :is="type" :class="variant" :bind="attrs"><slot /></component>
</template>

<style scoped lang="scss">

.d-container {
  padding: 1rem;
}

.inverted {
  background: var(--color-text);
  color: var(--color-background);
}

.grid {
  display: grid;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.fill-height {
  height: 100%;
}

.wo-padding {
  padding: 0;
}

</style>
