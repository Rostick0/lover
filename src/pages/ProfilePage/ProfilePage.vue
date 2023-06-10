<script setup>
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo.vue';
import ProfileAlbum from '@/components/ProfileAlbum/ProfileAlbum.vue';
import ProfileDescription from '@/components/ProfileDescription/ProfileDescription.vue';
</script>

<template>
    <LayoutDefault>
        <div class="profile">
            <ProfileInfo class="profile__info"></ProfileInfo>
            <ProfileAlbum class="profile__album"></ProfileAlbum>
            <ProfileDescription class="profile__description"></ProfileDescription>
        </div>
    </LayoutDefault>
</template>

<style lang="scss" scoped>
@import './profile.scss';
</style>