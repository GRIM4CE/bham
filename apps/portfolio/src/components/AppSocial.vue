<script setup lang="ts">
import DLink from "./DLink.vue";
import DIcon from "./DIcon.vue";

type SocialLink = {
  href: string,
  name: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/GRIM4CE",
    name: "github"
  },
  {
    href: "https://www.linkedin.com/in/jon-l-a29b93105",
    name: "linkedin"
  },
  {
    href: "jon-leibham-resume.pdf",
    name: "resume"
  }
];
</script>

<template>
  <nav class="social-link-nav">
    <template v-for="socialLink in socialLinks" :key="socialLink.name">
      <DLink class="social-link" :href="socialLink.href" target="_blank">
        <DIcon :name="socialLink.name" />
      </DLink>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.social-link-nav {
  margin-left: auto;
}

.social-link {
  margin-right: 1rem;
}
</style>
