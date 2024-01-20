<script setup lang="ts">
import DText from "../atoms/DText.vue";
</script>

<template>
  <DText class="d-footnote" variant="footnote">
    <slot />
  </DText>
</template>

<style scoped lang="scss">
.d-footnote {
  text-indent: 1em;
}
</style>