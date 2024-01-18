<script setup lang="ts"></script>

<template>
  <a><slot /></a>
</template>

<style scoped lang="scss">
a {
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    color: var(--violet);
  }
}
</style>
