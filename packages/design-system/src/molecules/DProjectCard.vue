<script setup lang="ts">
import type { PropType } from "vue";

import DLink from "../atoms/DLink.vue";
import DImg from "../atoms/DImg.vue";
import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";
import DChip from "../atoms/DChip.vue";

import type { DProjectCardType } from "./DProjectCard"

const props = defineProps({
  project: {
    type: Object as PropType<DProjectCardType>,
    required: true
  }
})
</script>


<template>
  <DContainer class="d-project-card-wrapper">
    <DLink variant="no-style" :href="project.href" target="_blank">
      <DContainer class="d-project-card">
        <DImg class="d-project-card-img" :src="project.img.src" :alt="project.img.alt" width="400" height="220"/>
        <DContainer class="d-project-card-details">
          <DText type="h3" variant="h3">{{ project.title }}</DText>
          <DText>{{ project.description }}</DText>
          <DContainer class="d-project-card-keynotes" :variant="['flex']">
            <DChip  v-for="keynote in project.keynotes" :key="keynote" :text="keynote"/>
          </DContainer>
        </DContainer>
      </DContainer>
    </DLink>
</DContainer>
</template>

<style scoped lang="scss">
.d-project-card-wrapper {
  margin-bottom: 2rem;
}

.d-project-card {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 2rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-text)
  }
}

.d-project-card-img {
  grid-column: 1;
  width: 100%;
}

.d-project-card-details {
  grid-column: 2;
}

.d-project-card-keynotes {
  column-gap: .5rem;
}
</style>