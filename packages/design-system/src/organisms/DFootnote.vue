<script setup lang="ts">
import DText from "../atoms/DText.vue";
import DContainer from "../atoms/DContainer.vue";
</script>

<template>
  <DText class="d-footnote" variant="footnote">
    <slot />
  </DText>
  <DContainer :variant="['flex']" class="d-footnote-button-wrapper">
    <slot name="button" />
  </DContainer>

</template>

<style scoped lang="scss">
.d-footnote {
  text-indent: 1em;
  margin-bottom: 1rem;
}

.d-footnote-button-wrapper {
  justify-content: flex-end;
}
</style>