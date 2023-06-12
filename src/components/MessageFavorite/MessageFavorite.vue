<template>
    <div class="message__top">
        <div class="message__user user">
            <div class="user__image">
                <img class="user__avatar" width="60" height="60"
                    src="https://engbk.blob.core.windows.net/user-photo-avatar/5913936.jpg" alt="">
                <UiOnline class="user__online"></UiOnline>
            </div>
            <div class="user__data">
                <div class="user__info">Кет, 37</div>
                <div class="user__last-online">
                    <span>Последняя активность</span>
                    <br>
                    <span>Сегодня в 22:56</span>
                </div>
            </div>
        </div>
        <div class="message__favorite">
            <div class="message__favorite_icon">
                <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path
                        d="m11.1.9 2.3 5.4c0 .2.2.3.4.3l5.6.6c.6.1.8.8.4 1.2l-4.2 4c-.2.1-.2.3-.2.4l1.2 5.9c0 .3-.1.5-.3.7-.2.1-.4.1-.6 0l-4.9-3c-.2-.1-.4-.1-.5 0l-5 3c-.4.2-1-.1-.9-.7l1.2-5.9c0-.1 0-.3-.1-.4l-4.3-4C.8 8 1 7.3 1.6 7.2l5.6-.6c.2 0 .4-.1.4-.3L9.9.9c.3-.6 1-.5 1.2 0Z"
                        fill="transparent" stroke="#ffc923" stroke-miterlimit="10" stroke-linejoin="round"></path>
                </svg>
            </div>
            <span>Добавить <br> в избранное</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './user.scss';
</style>