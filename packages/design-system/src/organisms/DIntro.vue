<script setup lang="ts">
import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";
</script>


<template>
  <DContainer>
    <DText type="h1" variant="h2">
      <slot name="heading"/>
      </DText>
    <DText type="h2" variant="h3">
      <slot name="subheading"/>
    </DText>
    <DText class="d-intro-callout-text" type="p" variant="p">
      <slot name="callout"/>
    </DText>
  </DContainer>
</template>

<style lang="scss" scoped>
  .d-intro-callout-text {
    margin-top: .5rem;
  }
</style>