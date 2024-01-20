<script setup lang="ts">
import type { PropType } from "vue";

import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";
import DChip from "../atoms/DChip.vue";

import DProjectCard from "../molecules/DProjectCard.vue";

import type { DProjectCardType } from "../molecules/DProjectCard"

const props = defineProps({
  projects: {
    type: Array as PropType<DProjectCardType[]>,
  }
})
</script>


<template>
  <DContainer type="section">
    <DText type="h3" variant="h3" class="mobile-only">Projects</DText>
    <template v-for="project in projects" :key="project.title">
      <DProjectCard :project="project" />
    </template>
  </DContainer>
</template>

<style scoped lang="scss">
  .d-projects-keynotes {
    column-gap: .5rem;
  }
</style>