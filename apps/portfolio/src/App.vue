<script setup lang="ts">
import { DLayout, DIntro, DSocial, DNavigation, DAbout, DProjects, DFootnote, DButton } from "@bham/design-system";
import { socialLinks, navigationLinks, about, projects } from "./assets/appData";

  // Update Theme
const rerollTheme = () => {
  const body =  document.body
  const currentTheme = body.className
  const themes = ["default", "dark", "light", "blue", "green", "robin"].filter(theme => theme !== currentTheme)
  const randomNumber = Math.floor(Math.random() * themes.length)

  body.classList.remove(currentTheme);
  body.classList.add(themes[randomNumber]);
}

</script>

<template>
  <DLayout>
    <template v-slot:aside>
      <DIntro>
        <template v-slot:heading>Hello, my name is <br/>Jon Leibham,</template>
        <template v-slot:subheading>I'm a software engineer.</template>
        <template v-slot:callout>I architect and build web application solutions.</template>
      </DIntro>
      <DSocial :links="socialLinks"/>
      <DNavigation :links="navigationLinks" />
    </template>

    <template v-slot:main>
      <DAbout id="about" :about="about" />
      <DProjects id="projects" :projects="projects" />
      <DFootnote>This site was designed and built by myself. Built in a turbo mono-repo with a design system. The design system is built using CSS grid and CSS variables. The project was deployed with GitHub and AWS.
        <template v-slot:button>
          <DButton @click="rerollTheme()" :icon="{name: 'theme', label: 'Reroll theme'}" />
        </template>
      </DFootnote>
    </template>
  </DLayout>
</template>