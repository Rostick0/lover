<script>
export default {
    name: 'UiButtonWhite'
}
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    color: {
        type: String
    }
});
</script>

<template>
    <button class="button" :class="props.color">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@import './button.scss';
</style>