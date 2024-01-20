<script setup lang="ts">
import DContainer from "../atoms/DContainer.vue";
import DLink from "../atoms/DLink.vue";

import type { PropType } from "vue";
import type { DNavigationLink } from "./DNavigation";
const props  = defineProps({
  links: {
    type: Array as PropType<DNavigationLink[]>,
  },
});
</script>

<template>
  <DContainer class="d-navigation" type="nav">
    <DContainer type="ul" class="d-navigation-ul">
      <DContainer class="d-navigation-li"  v-for="link in links" :key="link.text" type="li">
        <DLink  variant="nav-link" :href="link.href">{{ link.text }}</DLink>
      </DContainer>
    </DContainer >
  </DContainer >
</template>

<style scoped lang="scss">
.d-navigation {
  display: none;

    @include lg {
      display: block;
    }
}

.d-navigation-ul {
  display: grid;
  margin: 2rem 0;
}

.d-navigation-li { 
  margin-right: auto;
  margin-bottom: .5rem;
  transition: transform .4s ease-in;
    
  &:hover {
      transform: translateX(16px);
  }
}
</style>