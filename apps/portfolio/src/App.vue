<script setup lang="ts">
import { DLayout } from "@bham/design-system";
import AppSocial from "./components/AppSocial.vue";
import AppIntro from "./components/AppIntro.vue";
import AppNavigation from "./components/AppNavigation.vue";
import SectionAbout from "./components/SectionAbout.vue";
</script>

<template>
  <DLayout>
    <template v-slot:aside>
      <AppIntro />
      <AppNavigation />
      <AppSocial />
    </template>

    <template v-slot:main>
      <SectionAbout id="aboutme"></SectionAbout>
      <SectionAbout id="skills"></SectionAbout>
      <SectionAbout id="contact"></SectionAbout>
    </template>
  </DLayout>
</template>