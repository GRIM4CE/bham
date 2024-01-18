<script setup lang="ts">
import icons from "../assets/icons";
import { computed } from "vue";

import type { PropType } from "vue";
import type { DIconName } from "./DIcon";

const props  = defineProps({
  name: {
    type: String as PropType<DIconName>,
  },
});

const paths = computed(() => {
  if (props.name && typeof props.name === "string") {
    const icon = icons.find((icon) => icon.name === props.name);
    if (icon && icon.paths) {
      return icon.paths;
    }
  }
  throw new Error(
    `The icon: "${props.name}" is either unregistered or does not exist in the "/assets/icons.ts"`
  );
});
</script>

<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <template v-for="(path, i) in paths" :key="i">
      <path :d="path" />
    </template>
  </svg>
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  overflow: visible;
  font-size: 24px;
  vertical-align: -0.125em;
  fill: currentColor;
}
</style>
