<script setup lang="ts">
import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";

defineProps({
  about: Array
})
</script>


<template>
  <DContainer type="section">
    <template v-for="(aboutP, i) in about">
      <br v-if="i !== 0"/>
      <DText>{{ aboutP }}</DText>
    </template>
  </DContainer>
</template>
