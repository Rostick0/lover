<script setup></script>

<template>
    <div class="password">
        <UiTitleField class="password__title">Смена пароля</UiTitleField>
        <UiInput class="password__input" placeholder="Старый пароль"></UiInput>
        <UiInput class="password__input" placeholder="Новый пароль"></UiInput>
        <UiInput class="password__input" placeholder="Подтвердите пароль"></UiInput>
        <UiButton>Сохранить</UiButton>
    </div>
</template>

<style lang="scss" scoped>
@import './password.scss';
</style>