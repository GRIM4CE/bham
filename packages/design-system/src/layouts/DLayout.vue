<script setup lang="ts">
import DContainer  from '../atoms/DContainer.vue';
</script>

<template>
<DContainer class="d-layout-container">
    <DContainer class="d-layout-aside" type="aside">
        <slot name="aside"/>
    </DContainer>
    <DContainer type="main">
        <slot name="main"/>
    </DContainer>
</DContainer>
</template>

<style scoped lang="scss">
.d-layout-container {
    position: relative;
    display: grid;
    width: calc(100vw - 4rem);
    min-height: calc(100vh - 4rem);
    padding: 2rem;
    border: 0.5px solid var(--color-border);

    @include lg {
        column-gap: 2rem;
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
</style>
