<script setup></script>

<template>
    <div class="alert">
        <div class="alert__field">
            <UiTitleField class="alert__title">Настройка push-уведомлений</UiTitleField>
            <UiSwitch textNoActive="Получать уведомления" textActive="Отписаться от уведомлений"></UiSwitch>
        </div>
        <div class="alert__field">
            <UiTitleField class="alert__title">Настройки оповещений</UiTitleField>
            <UiSwitch textNoActive="Получать e-mail оповещения" textActive="Отписаться e-mail оповещений"></UiSwitch>
        </div>
        <UiButton>Сохранить</UiButton>
    </div>
</template>

<style lang="scss" scoped>
@import './alert.scss';
</style>