<script>
export default {
    name: 'UiTitle'
}
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String
    }
});
</script>

<template>
    <div class="title" :class="props.type">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import './title.scss';
</style>