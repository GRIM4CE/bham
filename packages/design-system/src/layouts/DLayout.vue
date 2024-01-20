<script setup lang="ts">
import DContainer  from '../atoms/DContainer.vue';
</script>

<template>
<DContainer class="d-layout-container">
    <DContainer class="d-layout-aside" type="aside">
        <slot name="aside"/>
    </DContainer>
    <DContainer class="d-layout-main" type="main">
        <slot name="main"/>
    </DContainer>
</DContainer>
</template>

<style scoped lang="scss">
$layoutPadding: 2rem;
$mobileLayoutPadding: 1rem;


.d-layout-container {
    position: relative;
    display: grid;
    width: calc(100vw - ($mobileLayoutPadding * 2));
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 4rem);
    padding: 2rem $mobileLayoutPadding;
    border: 0.5px solid var(--color-border);

    @include lg {
        padding: 5rem $layoutPadding 3rem;
        column-gap: 2rem;
        width: calc(100vw - ($layoutPadding * 2));
        grid-template-columns: 2fr 3fr;
    }
}

.d-layout-aside {
    @include lg {
        display: grid;
        position: sticky;
        top: 2rem;
        height: calc(100vh - 4rem);
    }
}

.d-layout-main {
    @include lg {
        max-width: 500px;
        margin: 0 auto;
    }
}
</style>
