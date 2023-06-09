<script setup>
import LikeSwitch from '@/components/LikeSwitch/LikeSwitch.vue';
import LikeList from '@/components/LikeList/LikeList.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';

const likes = [
    {
        id: 1,
        name: 'Вика',
        year: 35,
        type: 'from_me',
        gender: 'female',
        avatar: 'https://engbk.blob.core.windows.net/user-photo-preview/4917063.jpg',
        createDate: '09.06.2023'
    }
];
</script>

<template>
    <LayoutDefault>
        <div class="like">
            <LikeSwitch class="like__switch"></LikeSwitch>
            <LikeList :likes="likes" type="from_me"></LikeList>
        </div>
    </LayoutDefault>
</template>