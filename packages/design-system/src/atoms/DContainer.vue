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

.padding {
  padding: 1rem;
}

section {
  margin-top: 1rem;
  margin-bottom: 2rem;

  @include lg {
    margin-top: 0;
  }
}

ul {
  padding: 0;
}

li {
  list-style: none;
}
</style>
