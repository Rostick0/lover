<script setup>
import ButtonBack from '@/components/ButtonBack/ButtonBack.vue';
import MessageBlock from '@/components/MessageBlock/MessageBlock.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue'
</script>

<template>
    <LayoutDefault>
        <ButtonBack></ButtonBack>
        <MessageBlock class="message__block"></MessageBlock>
    </LayoutDefault>
</template>

<style lang="scss" scoped>
@import './message.scss';
</style>