<script setup>
const test = e => console.log(e.target.value);
</script>

<template>
    <div class="switch">
        <label class="switch__like">
            <input type="radio" name="type_like" @change="test" value="from_me" checked hidden>
            <span class="switch__like_content">
                <UiTitle>Кто лайкнул меня</UiTitle>
                <UiCounter class="switch__like_counter">1</UiCounter>
            </span>
        </label>
        <label class="switch__like">
            <input type="radio" name="type_like" @change="test" value="to_me" hidden>
            <span class="switch__like_content">
                <UiTitle>Кого лайкнул я</UiTitle>
            </span>
        </label>
        <label class="switch__like">
            <input type="radio" name="type_like" @change="test" value="mutual" hidden>
            <span class="switch__like_content">
                <UiTitle>Взаимные лайки</UiTitle>
            </span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
@import './switch.scss';
</style>