<template>
  <button class="d-button"><slot /></button>
</template>

<style scoped lang="scss">
.d-button {
  background-color: var(--color-button-background);
  color: var(--color-button-color);
  border: 0;
  border-radius: 4px;
  padding: .25rem .5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-background-active);
  }
}
</style>
