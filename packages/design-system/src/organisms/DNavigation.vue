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
    <DContainer type="ul">
      <DContainer v-for="link in links" :key="link.text" type="li"><DLink :href="link.href">{{ link.text }}</DLink></DContainer>
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
</style>