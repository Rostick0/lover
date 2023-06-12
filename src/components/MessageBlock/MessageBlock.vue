<script setup>
import MessageFavorite from '../MessageFavorite/MessageFavorite.vue';
import MessageForm from '../MessageForm/MessageForm.vue';
import MessageList from '../MessageList/MessageList';
</script>

<template>
    <div class="message">
        <div class="message__top">
            <MessageFavorite></MessageFavorite>
        </div>
        <div class="message__center">
            <MessageList></MessageList>
        </div>
        <div class="message__bottom">
            <MessageForm></MessageForm>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './message.scss';
</style>