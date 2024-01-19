<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: "link"
  }
})
</script>

<template>
  <a :class="variant"><slot /></a>
</template>

<style scoped lang="scss">

.no-style {
  text-decoration: none;
  color: var(--color-text);

  &:hover {
    color: var(--color-text);
  }
}

.link {
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    color: var(--violet);
  }
}
</style>
