<script>
export default {
    name: 'UiCheckboxSmall'
}
</script>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits({
    onchange: {
        type: Function
    }
})
</script>

<template>
    <label class="checkbox">
        <input class="checkbox__input" type="checkbox" @change="emit.change" hidden>
        <span class="checkbox__icon"></span>
        <span>
            <slot></slot>
        </span>
    </label>
</template>

<style lang="scss" scoped>
@import './checkbox.scss';
</style>