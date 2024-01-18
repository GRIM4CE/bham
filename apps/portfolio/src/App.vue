<script setup lang="ts">
import AppSocial from "./components/AppSocial.vue";
import AppIntro from "./components/AppIntro.vue";
import AppNavigation from "./components/AppNavigation.vue";
import SectionAbout from "./components/SectionAbout.vue";
</script>

<template>
  <div class="main">
    <aside>
      <AppIntro />
      <AppNavigation />
      <AppSocial />
    </aside>

    <main>
      <SectionAbout id="aboutme"></SectionAbout>
      <SectionAbout id="skills"></SectionAbout>
      <SectionAbout id="contact"></SectionAbout>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: calc(100vw - 4rem);
  min-height: calc(100vh - 4rem);
  padding: 2rem;
  border: 0.5px solid var(--color-border);
}
</style>
