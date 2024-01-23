<script setup lang="ts">
import DContainer from "./DContainer.vue";
import DText from "./DText.vue";

const props  = defineProps({
  text: String
});
</script>

<template>
  <DContainer class="d-chip"><DText variant="footnote">{{text}}</DText></DContainer>
</template>

<style scoped lang="scss">
.d-chip {
  display: inline-flex;
  background-color:  var(--color-chip);
  color: var(--color-button-text);
  border-radius: 12px;
  padding: .1rem .5rem;
}
</style>
