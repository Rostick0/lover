<script setup>
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import SettingsPassword from '@/components/SettingsPassword/SettingsPassword.vue';
import SettingsAlert from '@/components/SettingsAlert/SettingsAlert.vue';
import SettingsSocials from '@/components/SettingsSocials/SettingsSocials.vue';
import SettingsDelete from '@/components/SettingsDelete/SettingsDelete.vue';
</script>

<template>
    <LayoutDefault>
        <div class="settings">
            <UiTitle type="section">Настройки</UiTitle>
            <div class="settings__content">
                <SettingsPassword></SettingsPassword>
                <SettingsAlert></SettingsAlert>
                <SettingsSocials></SettingsSocials>
                <SettingsDelete></SettingsDelete>
            </div>
        </div>
    </LayoutDefault>
</template>

<style lang="scss" scoped>
@import './settings.scss';
</style>