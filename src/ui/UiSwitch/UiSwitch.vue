<script>
export default {
    name: 'UiSwitch'
}
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    checked: {
        type: Boolean
    },
    textActive: {
        type: String
    },
    textNoActive: {
        type: String
    }
});
</script>

<template>
    <label class="switch">
        <input class="switch__input" type="checkbox" hidden>
        <span class="switch__icon" :checked="props.checked">
            <span class="switch__circle"></span>
        </span>
        <span class="switch__active">
            {{ textActive }}
        </span>
        <span class="switch__no-active">
            {{ textNoActive }}
        </span>
    </label>
</template>

<style lang="scss" scoped>
@import './switch';
</style>