<script setup lang="ts">
import { DLink } from "@bham/design-system";
</script>

<template>
  <nav>
    <ul>
      <li><DLink href="#aboutme">about me</DLink></li>
      <li><DLink href="#skills">skills</DLink></li>
      <li><DLink href="#contact">contact</DLink></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
ul {
  padding: 0;
}

li {
  list-style: none;
}
</style>
