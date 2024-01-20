<script setup lang="ts">
  defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <img clas="d-img" :src="src" :alt="alt"/>
</template>

<style scoped lang="scss">
.d-img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  object-fit: cover;
}
</style>
