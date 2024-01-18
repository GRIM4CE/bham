<script setup lang="ts">
import icons from "../assets/icons";
import { useAttrs, computed } from "vue";

const attrs = useAttrs();

const paths = computed(() => {
  if (attrs.name && typeof attrs.name === "string") {
    const icon = icons.find((icon) => icon.name === attrs.name);
    if (icon && icon.paths) {
      return icon.paths;
    }
  }
  throw new Error(
    `The icon: "${attrs.name}" is either unregistered or does not exist in the "/assets/icons.ts"`
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
