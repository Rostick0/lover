<script setup>
import { ROUTER_CONST } from '@/app/router';
import ButtonLogout from '../ButtonLogout/ButtonLogout.vue';
import { setIsActiveAsideToggle } from '@/app/composible/aside';
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <div class="header__burger" @click="setIsActiveAsideToggle">
                    <svg height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"></path>
                    </svg>
                    <UiCounter class="header__burger_counter">30+</UiCounter>
                </div>
                <RouterLink class="header__logo" :to="ROUTER_CONST.main">
                    <img width="221" src="@/app/assets/image/logo.png" alt="Лого">
                </RouterLink>
                <div class="header__application">
                    <RouterLink class="header__application_item _search" :to="ROUTER_CONST.lenta">
                        <span>Поиск</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                            class="icon-right">
                            <path
                                d="M12.67 3.464a6.485 6.485 0 0 0-4.612-1.928c-1.802 0-3.431.74-4.613 1.928a6.555 6.555 0 0 0-1.917 4.637c0 1.812.735 3.45 1.917 4.638a6.473 6.473 0 0 0 4.613 1.913c1.801 0 3.43-.724 4.612-1.913a6.543 6.543 0 0 0 1.903-4.638c0-1.811-.72-3.449-1.903-4.637ZM8.058 0c2.22 0 4.223.913 5.679 2.377A8.107 8.107 0 0 1 16.1 8.1a8.102 8.102 0 0 1-1.874 5.189l3.373 3.405a.762.762 0 0 1-1.067 1.087l-3.402-3.405a8.007 8.007 0 0 1-5.073 1.812c-2.22 0-4.238-.9-5.694-2.363A8.131 8.131 0 0 1 0 8.1c0-2.231.908-4.26 2.364-5.724A8.02 8.02 0 0 1 8.058 0Z"
                                fill="#FFF" fill-rule="evenodd"></path>
                        </svg>
                    </RouterLink>
                    <ButtonLogout class="header__logout"></ButtonLogout>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import './header.scss';
</style>