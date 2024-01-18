<script setup lang="ts"></script>

<template>
  <a class="link"><slot /></a>
</template>

<style scoped lang="scss">
.link {
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    color: var(--violet);
  }
}
</style>
