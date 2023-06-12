<script setup>
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import ChatCheckbox from '@/components/ChatCheckbox/ChatCheckbox.vue';
import ChatMessageList from '@/components/ChatMessageList/ChatMessageList.vue';

const messages = [
    {
        id: 1,
        user_id: 1,
        name: 'Ната',
        year: 33,
        avatar: 'https://engbk.blob.core.windows.net/user-photo-avatar/4917063.jpg',
        is_online: true,
        last_online: 'Сегодня в 00:51',
        count_messages: 1,
        count_likes: 94,
        message: 'привет) как на личном, не занят?)',
        create_date: 'Сегодня в 23:15'
    },
    {
        id: 2,
        user_id: 2,
        name: 'Ната',
        year: 26,
        avatar: 'https://engbk.blob.core.windows.net/user-photo-avatar/5674156.jpg',
        is_online: false,
        last_online: 'Сегодня в 00:50',
        count_messages: 0,
        count_likes: 94,
        message: 'Привет 🌟 Я самая обыкновенная девушка, без каких либо закидонов и прочего, поэтому ищу простого мужчину с хорошим чувством юмора 🙈 Я нашла свой клад? Ты такой?🌟',
        create_date: 'Сегодня в 23:15'
    }
];
</script>

<template>
    <LayoutDefault>
        <div class="chat">
            <UiTitle type="section">Мои сообщения</UiTitle>
            <ChatCheckbox></ChatCheckbox>
            <ChatMessageList :messages="messages"></ChatMessageList>
        </div>
    </LayoutDefault>
</template>