<script setup>
import { defineProps } from 'vue';
import LikeItem from '../LikeItem/LikeItem.vue';

const props = defineProps({
    type: {
        type: String
    },
    likes: {
        type: Array
    }
});


</script>

<template>
    <div class="like">
        <div class="like__list">
            <LikeItem v-for="like in props.likes" :key="like.id" :like="like"></LikeItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './list.scss';
</style>