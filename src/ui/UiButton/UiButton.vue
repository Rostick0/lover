<script>
export default {
    name: 'UiButton'
}
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    styleButton: {
        type: String
    }
});
</script>

<template>
    <button class="button" :class="props.styleButton">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@import './button.scss';
</style>