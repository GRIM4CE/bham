<script setup lang="ts">
import DContainer  from '../atoms/DContainer.vue';
</script>

<template>
<DContainer class="container">
    <DContainer type="aside" :variant="['wo-padding']">
        <slot name="aside"/>
    </DContainer>
    <DContainer type="main" :variant="['wo-padding']">
        <slot name="main"/>
    </DContainer>
</DContainer>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 2fr 3fr;
  width: calc(100vw - 4rem);
  min-height: calc(100vh - 4rem);
  padding: 2rem;
  border: 0.5px solid var(--color-border);
}
</style>
