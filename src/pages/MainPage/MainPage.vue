<script setup>
import UiButton from '@/ui/UiButton/UiButton.vue';

const test = () => alert(5);

</script>

<template>
    <UiButton @click="test">13</UiButton>
</template>