<script setup>
</script>

<template>
    <a class="user">
        <img class="user__avatar" src="https://engbk.blob.core.windows.net/user-photo-avatar/2590925.jpg" alt="">
        <div class="user__bottom">
            <div class="user__bottom_left">
                <div class="user__info">
                    <strong>Любовь, 31</strong>
                    <UiOnline></UiOnline>
                </div>
                <div class="user__city">Санкт-Петербург</div>
                <ul class="user__list">
                    <li class="user__item"></li>
                    <li class="user__item _active"></li>
                    <li class="user__item"></li>
                    <li class="user__item"></li>
                    <li class="user__item"></li>
                </ul>
            </div>
            <div class="user__bottom_right">
                <UiButtonWhite color="blue">
                    <span>Написать</span>
                    <svg width="28" height="28" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg" class="icon-right">
                        <path
                            d="M9.27 10.05a1.05 1.05 0 0 1-1.053-1.06c0-.579.457-1.058 1.053-1.058h6.553c.596 0 1.053.48 1.053 1.058a1.05 1.05 0 0 1-1.053 1.06H9.27Zm0 5.973c-.596 0-1.053-.46-1.053-1.039 0-.6.457-1.059 1.053-1.059h13.127c.575 0 1.053.46 1.053 1.06 0 .578-.478 1.038-1.053 1.038H9.27ZM12.25 0h7.169c3.277 0 6.256 1.339 8.42 3.516 2.145 2.178 3.495 5.175 3.495 8.471 0 3.297-1.35 6.294-3.495 8.451a11.838 11.838 0 0 1-8.42 3.517H1.386c-.576 0-1.053-.46-1.053-1.04V11.988c0-3.296 1.33-6.293 3.495-8.47A11.838 11.838 0 0 1 12.248 0Z"
                            fill="#179BE4" fill-rule="evenodd"></path>
                    </svg>
                </UiButtonWhite>
            </div>
        </div>
    </a>
</template>

<style lang="scss" scoped>@import './user.scss';</style>