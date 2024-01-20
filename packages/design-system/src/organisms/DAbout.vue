<script setup lang="ts">
import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";

defineProps({
  about: Array
})
</script>


<template>
  <DContainer type="section">
    <DText type="h3" variant="h3" class="mobile-only">About</DText>
    <template v-for="(aboutP, i) in about">
      <br v-if="i !== 0"/>
      <DText>{{ aboutP }}</DText>
    </template>
  </DContainer>
</template>
