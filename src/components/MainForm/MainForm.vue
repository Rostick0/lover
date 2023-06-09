<script setup>
import GenderSwitch from '../GenderSwitch/GenderSwitch.vue';


</script>

<template>
    <div class="registration">
        <div class="registration__logo">
            <img width="240" src="@/app/assets/image/logo.png" alt="Лого">
        </div>
        <div class="registration__title">В этот раз я найду свою любовь!</div>
        <div class="registration__inner">
            <form class="registration__form" @submit.prevent="">
                <GenderSwitch></GenderSwitch>
                <label class="registration__label">
                    <UiTitleField>E-mail</UiTitleField>
                    <UiInput class="registration__input" placeholder="ваш e-mail" type="email" required></UiInput>
                </label>
                <label class="registration__label">
                    <UiTitleField>Пароль</UiTitleField>
                    <UiInput class="registration__input" placeholder="пароль" type="password" required></UiInput>
                </label>
                <UiButtonRed class="registration__button" type="submit">Продолжить</UiButtonRed>
            </form>
            <div class="registration__confirm">
                Нажимая на “ПРОДОЛЖИТЬ” Вы принимаете
                <br>
                <a class="registration__confirm_link" target="_blank" href="">Условия использования</a> и <a
                    class="registration__confirm_link" target="_blank" href="">Политику конфиденциальности</a>
            </div>
            <div class="registration__socials">
                <a class="registration__social _facebook" href="">
                    <img width="21" height="21" src="@/app/assets/image/facebook.png" alt="Facebook">
                    <span>Регистрация Facebook</span>
                </a>
                <a class="registration__social _google" href="">
                    <img width="21" height="21" src="@/app/assets/image/google.png" alt="Google">
                    <span>Регистрация Google</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './form.scss';
</style>