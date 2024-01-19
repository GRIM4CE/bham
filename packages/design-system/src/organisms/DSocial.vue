<script setup lang="ts">
import type { PropType } from "vue";

import type { DIconName } from "../atoms/DIcon"

import DLink from "../atoms/DLink.vue";
import DIcon from "../atoms/DIcon.vue";

type SocialLink = {
  href: String,
  name: DIconName
}

const props  = defineProps({
  links: {
    type: Array as PropType<SocialLink[]>,
  },
});
</script>

<template>
  <nav class="social-link-nav">
    <template v-for="socialLink in links" :key="socialLink.name">
      <DLink class="social-link" :href="socialLink.href" target="_blank" :aria-label="socialLink.name">
        <DIcon :name="socialLink.name" />
      </DLink>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.social-link {
  margin-right: 1rem;
}
</style>
