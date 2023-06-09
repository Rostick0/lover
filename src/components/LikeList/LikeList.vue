<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String
    },
    likes: {
        type: Array
    }
});

let typeText = null;

if (props.type === 'from_me') {
    typeText = (name, gender) => {
        const a = gender === 'female' ? 'а' : ''

        return `${name} поставил${a} лайк`;
    }
} else if (props.type === 'to_me') {
    typeText = (name) => {
        return `Вы поставили лайк ${name}`;
    }
} else {
    typeText = (name) => {
        return `Взаимный лайк с ${name}`;
    }
}
</script>

<template>
    <div class="like">
        <RouterLink v-for="like in props.likes" :key="like.id" class="like__item" to="/profile/">
            <div class="like_item_user user">
                <img width="50" height="50" class="user__avatar" :src="like.avatar" :alt="like.name">
                <div class="user__info">
                    <span>{{ like.name }}</span>
                    <span>, {{ like.year }}</span>
                </div>
            </div>
            <div class="like_item_content">
                {{ typeText(like.name, like.gender) }} {{ like.createDate }}
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import './list.scss';
</style>