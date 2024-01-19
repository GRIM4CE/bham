<script setup lang="ts">
import DContainer from "../atoms/DContainer.vue";
import DText from "../atoms/DText.vue";
</script>


<template>
  <DContainer>
    <DText type="h1" variant="h1">
      <slot name="heading"/>
      </DText>
    <DText type="h2" variant="h2">
      <slot name="subheading"/>
    </DText>
    <DText type="p" variant="p">
      <slot name="callout"/>
    </DText>
  </DContainer>
</template>
