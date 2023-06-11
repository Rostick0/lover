<script setup>
import ImageAlbum from '../ImageAlbum/ImageAlbum.vue';
</script>

<template>
    <div class="album">
        <div class="album__top">
            <UiTitle>Фотографии</UiTitle>
            <div class="album__count">(1)</div>
        </div>
        <ImageAlbum></ImageAlbum>
    </div>
</template>

<style lang="scss" scoped>
@import './album.scss';
</style>