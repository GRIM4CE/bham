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
  font-size: 2.027rem;
  line-height: 1.4;
}

.h2 {
  font-size: 1.802rem;
  line-height: 1.5;
}

.h3 {
  font-size: 1.602rem;
  line-height: 1.2;
}
.p {
  font-size: 12px;
  line-height: 1.6;


  @include lg {
    font-size: 14px;
    line-height: 1.6;
  }
}

.footnote {
  font-size: 0.79rem;
}
</style>
