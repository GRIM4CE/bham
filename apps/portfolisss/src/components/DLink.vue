<script setup lang="ts"></script>

<template>
  <a><slot /></a>
</template>

<style scoped lang="scss">
a {
  color: var(--color-text);

  &:hover {
    color: var(--violet);
  }
}
</style>
