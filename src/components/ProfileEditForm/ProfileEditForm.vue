<script setup>
import ProfileEditLabel from '@/components/ProfileEditLabel/ProfileEditLabel.vue';
import ProfileUploadImage from '../ProfileUploadImage/ProfileUploadImage.vue';
import { getPeopleAcceptableYears, getDays, getAcceptableYears, getMonths } from '@/app/helpers/date';

const purpose = [
    {
        value: 'Отношения',
        data: 'Отношения'
    },
    {
        value: 'Флирт',
        data: 'Флирт'
    },
    {
        value: 'Создание семьи',
        data: 'Создание семьи'
    },
    {
        value: 'Дружба',
        data: 'Дружба'
    },
    {
        value: 'Деловые контакты',
        data: 'Деловые контакты'
    },
    {
        value: 'Путешествия',
        data: 'Путешествия'
    },
    {
        value: 'Занятие спортом',
        data: 'Занятие спортом'
    }
];

</script>

<template>
    <div class="edit">
        <UiTitle type="section">Личная информация</UiTitle>
        <div class="edit__inputs">
            <ProfileUploadImage></ProfileUploadImage>
            <ProfileEditLabel>
                <UiTitleField>E-mail</UiTitleField>
                <span>yaroslav.zar@gmail.com</span>
            </ProfileEditLabel>
            <ProfileEditLabel>
                <UiTitleField>Имя</UiTitleField>
                <UiInput class="edit__form_input" value="Ярослав"></UiInput>
            </ProfileEditLabel>
            <ProfileEditLabel>
                <UiTitleField>Цель знакомства</UiTitleField>
                <UiSelect class="edit__form_input" :options="purpose"></UiSelect>
            </ProfileEditLabel>
            <ProfileEditLabel>
                <UiTitleField>Дата рождения</UiTitleField>
                <div class="edit__selects edit__birthday">
                    <UiSelect class="edit__form_input" :options="getDays()"></UiSelect>
                    <UiSelect class="edit__form_input" :options="getMonths()"></UiSelect>
                    <UiSelect class="edit__form_input" :options="getAcceptableYears()"></UiSelect>
                </div>
            </ProfileEditLabel>
            <ProfileEditLabel>
                <UiTitleField>Ищу партнера возрастом</UiTitleField>
                <div class="edit__selects edit__years">
                    <div class="edit__year">
                        <strong>От</strong>
                        <UiSelect :options="getPeopleAcceptableYears()"></UiSelect>
                    </div>
                    <div class="edit__year">
                        <strong>До</strong>
                        <UiSelect :options="getPeopleAcceptableYears()"></UiSelect>
                    </div>
                </div>
            </ProfileEditLabel>
            <ProfileEditLabel>
                <UiTitleField>Адрес</UiTitleField>
                <UiInput class="edit__form_input" value="Ярослав"></UiInput>
            </ProfileEditLabel>
            <ProfileEditLabel>
                <UiTitleField>О себе</UiTitleField>
                <UiTextarea class="" value="Ярослав"></UiTextarea>
            </ProfileEditLabel>
        </div>
        <div class="edit__agree">
            <UiCheckboxSmall>
                Согласен с <a class="text-underline" href="http://" target="_blank"
                    rel="noopener noreferrer">пользовательским соглашением</a> и <a class="text-underline" href="http://"
                    target="_blank" rel="noopener noreferrer">пользовательским соглашением</a>
            </UiCheckboxSmall>
        </div>
        <UiButton>Сохранить</UiButton>
    </div>
</template>

<style lang="scss" scoped>
@import './edit.scss';
</style>