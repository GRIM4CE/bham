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

%link {
  color: var(--color-text);
  cursor: pointer;
  transition: color .4s;

  &:hover {
    color: var(--violet);
  }
}

.no-style {
  text-decoration: none;
  color: var(--color-text);

  &:hover {
    color: var(--color-text);
  }
}

.link {
  @extend %link;
}

.nav-link {
  @extend %link;

  font-size: 1.602rem;
}
</style>
