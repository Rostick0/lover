<script>
export default {
    name: 'ImageAlbum'
}
</script>

<template>
    <ul class="album__list">
        <li class="album__item">
            <img class="album__image" width="75" height="75" loading="lazy"
                src="https://engbk.blob.core.windows.net/user-photo-preview/5955122.jpg" alt="">
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import './album.scss';
</style>