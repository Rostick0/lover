<script setup>
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue'
import LentaUser from '@/components/LentaUser/LentaUser.vue';
import LentaApplication from '@/components/LentaApplication/LentaApplication.vue';
</script>

<template>
    <LayoutDefault>
        <div class="lenta">
            <LentaUser class="lenta__user" @click="testUpdate"></LentaUser>
            <LentaApplication class="lenta__application"></LentaApplication>
        </div>
    </LayoutDefault>
</template>

<style lang="scss" scoped>@import './lenta.scss';</style>