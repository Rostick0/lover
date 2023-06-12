<script setup>
import { ROUTER_CONST } from '@/app/router/';
import { defineProps } from 'vue';

const props = defineProps({
    messages: {
        type: Array
    }
})
</script>

<template>
    <div class="message-list">
        <RouterLink :to="ROUTER_CONST.messages + '/' + message.user_id" v-for="message in props.messages" :key="message.id"
            class="message-list__item">
            <UiCounter v-if="message.count_messages" class="message-list__counter">{{ message.count_messages }}</UiCounter>
            <div class="message-list__item_inner">
                <div class="message-list__user user">
                    <div class="user__image">
                        <img class="user__avatar" width="62" height="62" :src="message.avatar" :alt="message.name">
                        <UiOnline v-if="message.is_online" class="user__online"></UiOnline>
                    </div>
                    <div class="user__info">
                        <div class="user__info_top">
                            <span>{{ message.name }}</span>
                            <span>, {{ message.year }}</span>
                        </div>
                        <div class="user__info_bottom">
                            <div v-if="!message.is_online">
                                <div>Последняя активность:</div>
                                <div>{{ message.last_online }}</div>
                            </div>
                            <div class="user__info_likes">
                                <svg width="15" height="10" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m5.834 1.825-.01.01-.008.01-.018.02-.01.01H5.78v.01H5.77l-.008.009h-.01v.01h-.018l-.009.01-.009.01h-.009l-.009.01H5.68l-.009.009h-.009l-.009.01h-.018l-.009.01H5.6l-.009.01h-.054l-.009.01h-.063l-.009-.01h-.054l-.01-.01h-.026l-.01-.01h-.017l-.01-.01H5.32l-.01-.01h-.017l-.01-.01h-.009l-.008-.01-.01-.01h-.018v-.009H5.23v-.01H5.21v-.01h-.009l-.009-.01-.009-.01-.009-.01-.009-.01-.009-.009a2.608 2.608 0 0 0-.793-.579 2.265 2.265 0 0 0-.947-.206c-.685 0-1.298.304-1.749.785a2.885 2.885 0 0 0-.586 2.777c.09.265.207.52.36.736L5.5 9.754l4.049-4.416c.152-.216.27-.47.36-.736a2.885 2.885 0 0 0-.586-2.777c-.451-.48-1.064-.785-1.75-.785-.324 0-.648.069-.946.206-.289.138-.56.334-.793.579ZM5.5 11a.44.44 0 0 1-.343-.157l-4.4-4.78C.73 6.036.712 6.006.694 5.977a3.807 3.807 0 0 1-.514-1.04A4.2 4.2 0 0 1 0 3.729c0-1.03.379-1.963 1-2.64C1.615.422 2.47 0 3.418 0c.45 0 .893.098 1.308.285.27.127.532.294.775.49.234-.196.496-.363.766-.49A3.178 3.178 0 0 1 7.574 0C8.52 0 9.377.422 9.99 1.09A3.895 3.895 0 0 1 11 3.728c0 .412-.072.814-.19 1.207a3.807 3.807 0 0 1-.513 1.04c-.018.03-.036.059-.064.088l-4.4 4.78A.436.436 0 0 1 5.5 11Z"
                                        fill="#252525" fill-rule="evenodd"></path>
                                </svg>
                                <span>{{ message.count_likes }} лайка</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message-list__message">
                    <div class="message-list__date">{{ message.create_date }}</div>
                    <div class="message-list__letter">{{ message.message }}</div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import './message_list.scss';
</style>