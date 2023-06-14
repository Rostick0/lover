<template>
    <div class="main-login">
        <div class="main-login__mobile_content">
            <div class="main-login__logo">
                <img width="240" src="@/app/assets/image/logo.png" alt="Лого">
            </div>
            <div class="main-login__title">В этот раз я найду свою любовь!</div>
        </div>
        <RouterLink to="/profile/1" class="">
            <UiButton class="main-login__button">
                <svg data-v-12e41b4d="" width="24" height="16" viewBox="0 0 27 18" xmlns="http://www.w3.org/2000/svg"
                    class="auth-btn__icon icon-right">
                    <path data-v-12e41b4d=""
                        d="M2.75.76h16.5c1.008 0 1.833.824 1.833 1.833V6.25H19.25V2.574H2.75v12.861h16.5V11.75h1.833v3.676a1.823 1.823 0 0 1-1.833 1.815H2.75a1.823 1.823 0 0 1-1.833-1.815V2.593c0-1.018.825-1.834 1.833-1.834Zm20.667 11.907L27.083 9l-3.666-3.667v2.75H14.25v1.834h9.167v2.75Z"
                        fill="#FFF" fill-rule="evenodd"></path>
                </svg>
                <span>Войти</span>
            </UiButton>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import './login.scss';
</style>