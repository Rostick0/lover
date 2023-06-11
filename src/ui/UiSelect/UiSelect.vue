<script>
export default {
    name: 'UiSelect'
}
</script>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    options: {
        type: Array
    }
});

const isActive = ref(false);

function setIsActive(value) {
    isActive.value = value
}

const valueInput = ref('');

function valueInputValue(value, data) {
    valueInput.value = value;

    console.log(data);
}


</script>

<template>
    <div class="select" @focus="setIsActive(true)" @focusout="setIsActive(false)" tabindex="0">
        <div class="input select__show" @click="setIsActive(true)">
            <div class="select__value">{{ valueInput ?? ' ' }}</div>
            <div class="select__arrow"></div>
        </div>
        <ul v-show="isActive" @click="setIsActive(false)" class="select__options">
            <li v-for="option in props.options" :key="option.value" class="select__option"
                @click="valueInputValue(option.value, option.data)">{{
                    option.value }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import './select.scss';
@import './../UiInput/input.scss';
</style>