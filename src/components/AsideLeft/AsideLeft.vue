<script setup>
import { ROUTER_CONST } from '@/app/router/';
import ButtonLogout from '../ButtonLogout/ButtonLogout.vue';
import { isActiveAside, setIsActiveAsideFalse } from '@/app/composible/aside';

const classIsActive = () => isActiveAside.value ? '_active' : '';

</script>

<template>
    <aside class="aside" :class="classIsActive()" @click.self="setIsActiveAsideFalse">
        <div class="aside__inner">
            <div class="aside__user">
                <RouterLink class="aside__user_avatar" :to="ROUTER_CONST.profile + '/1'" @click="setIsActiveAsideFalse">
                    <img src="https://engbk.blob.core.windows.net:443/user-photo-avatar/5941790.jpg" alt="">
                </RouterLink>
                <div class="aside__user_data">Дмитрий, 21</div>
                <div class="aside__user_payment">
                    <div class="aside__user_money">
                        <img width="25" height="25" src="@/app/assets/image/coin.png" alt="Монета">
                        <span>
                            <span>0</span>
                            <br>
                            <span>Монет</span>
                        </span>
                    </div>
                    <UiButton class="aside__user_pay">Пополнить</UiButton>
                </div>
            </div>
            <ul class="aside__nav aside-nav">
                <li class="aside-nav__item"
                    :class="{ '_active': $router.currentRoute.value.path === ROUTER_CONST.profileEdit }">
                    <RouterLink class="aside-nav__link" :to="ROUTER_CONST.profileEdit" @click="setIsActiveAsideFalse">
                        <span class="aside-nav__icon">
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="#252525"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.65 10.284 12.188.907a3.186 3.186 0 0 1 4.456.004 2.97 2.97 0 0 1-.01 4.25L7.3 14.304a.65.65 0 0 1-.301.167l-4.875 1.183c-.477.116-.906-.311-.782-.779l1.138-4.301c.03-.11.088-.21.17-.29ZM6.386 13.4l.301-.167-.174.042-.127.125Zm-3.518.76 3.645-.885 9.208-9.019a1.71 1.71 0 0 0-.02-2.471 1.876 1.876 0 0 0-2.598.022L3.69 11.063l-.82 3.098Zm-1.328 3.807c-.474 0-.868-.324-.868-.717 0-.405.394-.716.868-.716h15.104c.474 0 .867.31.867.716 0 .393-.393.717-.867.717H1.54ZM12.2 4.47a.63.63 0 0 1 .012-.9.655.655 0 0 1 .916.012l.692.7a.63.63 0 0 1-.012.901.655.655 0 0 1-.916-.013l-.692-.7Z"
                                    fill-rule="nonzero"></path>
                            </svg>
                        </span>
                        <span>Редактировать анкету</span>
                    </RouterLink>
                </li>
                <li class="aside-nav__item"
                    :class="{ '_active': $router.currentRoute.value.path === ROUTER_CONST.chat || $router.currentRoute.value.path.substring(0, 9) === ROUTER_CONST.messages }">
                    <RouterLink class="aside-nav__link" :to="ROUTER_CONST.chat" @click="setIsActiveAsideFalse">
                        <span class="aside-nav__icon">
                            <svg width="20" height="20" viewBox="0 0 18 13" fill="#252525"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.778 3.101 9.306 6.993a.65.65 0 0 1-.6.011L1.222 3.101v6.842c0 .531.23 1.008.6 1.355.369.347.876.564 1.43.564h11.496c.554 0 1.073-.217 1.442-.564s.588-.824.588-1.355V3.1ZM1.58 1.984l7.426 3.86 7.414-3.86a1.865 1.865 0 0 0-.23-.271 2.119 2.119 0 0 0-1.442-.564H3.252a2.09 2.09 0 0 0-1.43.564 1.404 1.404 0 0 0-.242.271ZM3.252 0h11.496c.9 0 1.707.347 2.295.9.588.553.957 1.312.957 2.158v6.885c0 .845-.369 1.604-.957 2.157-.588.564-1.395.9-2.295.9H3.252a3.309 3.309 0 0 1-2.295-.9C.37 11.547 0 10.788 0 9.943V3.058C0 2.212.369 1.453.957.9A3.36 3.36 0 0 1 3.252 0Z"
                                    fill-rule="evenodd"></path>
                            </svg>
                            <UiCounter class="aside-nav__counter">30+</UiCounter>
                        </span>
                        <span>Мои сообщения</span>
                    </RouterLink>
                </li>
                <li class="aside-nav__item" :class="{ '_active': $router.currentRoute.value.path === ROUTER_CONST.like }">
                    <RouterLink class="aside-nav__link" :to="ROUTER_CONST.like" @click="setIsActiveAsideFalse">
                        <span class="aside-nav__icon">
                            <svg width="20" height="20" viewBox="0 0 19 16" fill="#252525"
                                xmlns="http://www.w3.org/2000/svg" class="icon-long">
                                <path
                                    d="M7.47 2.749a2.165 2.165 0 0 0-3.063 0c-.384.382-.636.92-.636 1.517 0 .597.252 1.135.636 1.517a2.167 2.167 0 0 0 3.063 0c.385-.382.625-.92.625-1.517 0-.598-.24-1.135-.625-1.517Zm7.578-.968a1.782 1.782 0 0 0-1.26-.526c-.493 0-.937.203-1.262.526a1.756 1.756 0 0 0-.516 1.254 1.757 1.757 0 0 0 1.777 1.769c.493 0 .937-.192 1.261-.514.325-.323.53-.765.53-1.255 0-.49-.205-.932-.53-1.254ZM13.788 0a3.027 3.027 0 0 1 3.05 3.035c0 .837-.336 1.601-.888 2.151-.025.024-.049.036-.073.06.6.263 1.141.633 1.598 1.087A5.14 5.14 0 0 1 19 10.001v2.64a.629.629 0 0 1-.625.634h-6.51v2.091a.624.624 0 0 1-.636.634H.636A.632.632 0 0 1 0 15.366V12.32c0-1.626.672-3.107 1.741-4.17A6.37 6.37 0 0 1 3.7 6.846a2.48 2.48 0 0 1-.192-.168 3.424 3.424 0 0 1-.997-2.413c0-.944.384-1.792.997-2.414A3.445 3.445 0 0 1 5.933.848c.949 0 1.801.383 2.426 1.004a3.386 3.386 0 0 1 1.009 2.414c0 .944-.384 1.792-1.009 2.413-.06.06-.12.12-.18.168.732.31 1.393.753 1.945 1.302a5.89 5.89 0 0 1 1.742 3.86h5.873V10a3.88 3.88 0 0 0-1.165-2.772 3.923 3.923 0 0 0-4.167-.908 4.282 4.282 0 0 0-1.214.717.631.631 0 0 1-.889-.06.623.623 0 0 1 .06-.884 5.161 5.161 0 0 1 1.334-.848c-.024-.024-.048-.036-.072-.06a3.027 3.027 0 0 1-.889-2.15c0-.837.336-1.602.889-2.151A3.059 3.059 0 0 1 13.787 0ZM1.272 14.745h9.32V12.32a4.563 4.563 0 0 0-1.37-3.275 4.61 4.61 0 0 0-3.29-1.362 4.653 4.653 0 0 0-3.291 1.362 4.613 4.613 0 0 0-1.37 3.275v2.425Z"
                                    fill-rule="evenodd"></path>
                            </svg>
                            <UiCounter class="aside-nav__counter">1</UiCounter>
                        </span>
                        <span>Мои лайки</span>
                    </RouterLink>
                </li>
                <li class="aside-nav__item"
                    :class="{ '_active': $router.currentRoute.value.path === ROUTER_CONST.settings }">
                    <RouterLink class="aside-nav__link" :to="ROUTER_CONST.settings" @click="setIsActiveAsideFalse">
                        <span class="aside-nav__icon">
                            <svg width="20" height="20" viewBox="0 0 17 15" fill="#252525"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.03 8.51c.256.255.617.418 1.012.418a1.43 1.43 0 0 0 1.42-1.428c0-.395-.163-.743-.419-.999v-.01a1.398 1.398 0 0 0-1-.407c-.396 0-.757.162-1.013.417a1.402 1.402 0 0 0-.023 1.974l.023.035Zm1.012 1.637c-.733 0-1.396-.29-1.884-.766l-.036-.047A2.669 2.669 0 0 1 8.378 7.5c0-.731.302-1.393.78-1.87a2.699 2.699 0 0 1 1.884-.777c.722 0 1.385.302 1.874.778.337.336.594.777.71 1.254h2.758A.62.62 0 0 1 17 7.5a.62.62 0 0 1-.616.615h-2.758a2.642 2.642 0 0 1-.71 1.254v.012a2.68 2.68 0 0 1-1.874.766Zm-4.2-3.262a.62.62 0 0 1 .616.615.62.62 0 0 1-.616.615H.616A.62.62 0 0 1 0 7.5a.62.62 0 0 1 .616-.615h6.226Zm-.884 6.466c.256.256.605.418 1 .418.396 0 .757-.15 1.013-.406v-.012c.256-.255.407-.603.407-.998a1.42 1.42 0 0 0-.407-1.01 1.434 1.434 0 0 0-1.013-.418c-.395 0-.744.162-1 .418a1.384 1.384 0 0 0-.42 1.01c0 .383.14.72.385.975l.035.023Zm0-9.694c.256.256.605.418 1 .418.396 0 .757-.162 1.013-.418a1.42 1.42 0 0 0 .407-1.01c0-.383-.151-.743-.407-.998a1.434 1.434 0 0 0-1.013-.418c-.395 0-.744.162-1 .418a1.376 1.376 0 0 0-.42.998c0 .383.14.732.385.987l.035.023Zm1 1.649a2.651 2.651 0 0 1-1.873-.778L5.05 4.48a2.594 2.594 0 0 1-.745-1.834c0-.731.291-1.393.78-1.87A2.651 2.651 0 0 1 6.958 0a2.65 2.65 0 0 1 1.874.778c.349.336.593.778.71 1.265h6.842a.61.61 0 1 1 0 1.22H9.542c-.117.487-.361.916-.71 1.265a2.65 2.65 0 0 1-1.874.778ZM2.851 2.043a.61.61 0 1 1 0 1.22H.616a.61.61 0 1 1 0-1.22h2.235Zm0 9.695a.62.62 0 0 1 .616.615.62.62 0 0 1-.616.615H.616A.62.62 0 0 1 0 12.353a.62.62 0 0 1 .616-.615h2.235Zm13.533 0a.62.62 0 0 1 .616.615.62.62 0 0 1-.616.615H9.542c-.117.476-.361.918-.71 1.254A2.601 2.601 0 0 1 6.958 15a2.651 2.651 0 0 1-1.873-.778l-.035-.035a2.615 2.615 0 0 1-.745-1.834 2.637 2.637 0 0 1 2.653-2.647c.734 0 1.397.29 1.874.778v-.012c.349.349.593.778.71 1.266h6.842Z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span>Настройки</span>
                    </RouterLink>
                </li>
            </ul>
            <ButtonLogout class="aside__logout" @click="setIsActiveAsideFalse"></ButtonLogout>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
@import './aside.scss';
</style>