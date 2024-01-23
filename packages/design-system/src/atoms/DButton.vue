<script setup lang="ts">
import DIcon from "./DIcon.vue"
import type {DIconName} from "./DIcon"
import type { PropType } from "vue";

type DButtonIcon = {
  name: DIconName,
  label: string
}

const props = defineProps({
  icon: Object as PropType<DButtonIcon>,
})

const getLabel = () => {
  if(!props.icon) return undefined
  return props.icon.label 
}

const getClass = () => {
  if(!props.icon) return "d-button"
  return "d-button d-button-icon"
}
</script>

<template>
  <button :class="getClass()" :aria-label="getLabel()"><DIcon v-if="icon" :name="icon.name"/><slot /></button>
</template>

<style scoped lang="scss">
.d-button {
  display: grid;
  background-color: var(--color-button-background);
  color: var(--color-button-text);
  border: 0;
  border-radius: 4px;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-background-active);
  }
}

.d-button-icon {
  padding-block: 0.5rem;
}
</style>
