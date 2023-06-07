<script setup>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import AsideLeft from '@/components/AsideLeft/AsideLeft.vue';
</script>

<template>
    <TheHeader></TheHeader>
    <main class="main">
        <div class="container">
            <div class="main__container">
                <AsideLeft></AsideLeft>
                <div class="main__container_right">
                    <slot></slot>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import './layout.scss';
</style>