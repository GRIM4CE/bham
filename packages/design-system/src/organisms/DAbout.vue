<script setup lang="ts">
import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";

defineProps({
  about: Array
})

const isFirstP = (index: number) => {
  if(index === 0) return "d-about-p-first"
  return "d-about-p"
} 
</script>


<template>
  <DContainer type="section">
    <DText type="h3" variant="h3" class="mobile-only">About</DText>
    <template v-for="(aboutP, i) in about">
      <br v-if="i !== 0"/>
      <DText :class="isFirstP(i)">{{ aboutP }}</DText>
    </template>
  </DContainer>
</template>

<style scoped lang="scss">

.d-about-p-first {
  text-indent: 2em;
}
</style>
