<script setup>
import { defineProps } from 'vue';
import { ROUTER_CONST } from '@/app/router';

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

const props = defineProps({
    like: {
        type: Array
    }
});
</script>

<template>
    <RouterLink class="like__item" :to="ROUTER_CONST.profile + '/' + props.like.user_id">
        <div class="like_item_user user">
            <img width="50" height="50" class="user__avatar" :src="props.like.avatar" :alt="props.like.name">
            <div class="user__info">
                <span>{{ props.like.name }}</span>
                <span>, {{ props.like.year }}</span>
            </div>
        </div>
        <div class="like_item_content">
            {{ typeText(props.like.name, props.like.gender) }} {{ props.like.createDate }}
        </div>
    </RouterLink>
</template>

<style lang="scss" scoped>
@import './item.scss';
</style>