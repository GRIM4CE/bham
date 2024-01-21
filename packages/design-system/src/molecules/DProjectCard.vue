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
    <DContainer class="d-project-card">
      <DLink variant="no-style" :href="project.href" target="_blank">
        <DImg class="d-project-card-img" :src="project.img.src" :alt="project.img.alt" width="400" height="220"/>
      </DLink>
      <DContainer class="d-project-card-details">
        <DLink :href="project.href" target="_blank">
          <DText class="d-project-title" type="h4" variant="h5">{{ project.title }}</DText>
        </DLink>
        <DText class="d-project-description">{{ project.description }}</DText>
        <DContainer class="d-project-card-keynotes" :variant="['flex']">
          <DChip  v-for="keynote in project.keynotes" :key="keynote" :text="keynote"/>
        </DContainer>
      </DContainer>
    </DContainer>
</DContainer>
</template>

<style scoped lang="scss">
.d-project-card-wrapper {
  margin-bottom: 2rem;
}

.d-project-card {
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  grid-gap: 2rem;

  @include lg {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
}

.d-project-card-img {
  grid-column: 1;
  aspect-ratio: 1.818;
  width: 100%;
  max-width: 350px;

  @include lg {
    margin-top: .5rem;
    transition: opacity .4s;
    cursor: pointer;

    &:hover {
      opacity: .4;
    }
  }
}

.d-project-title {
  margin-bottom: 1rem;
  cursor: pointer;

  @include lg {
    &:hover {
      text-decoration: none;
    }
  }
}

.d-project-card-details {
  grid-column: 2;
}

.d-project-description {
  margin-bottom: 1rem;
}

.d-project-card-keynotes {
  column-gap: .5rem;
  row-gap: .5rem;
}
</style>