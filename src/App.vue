<script setup>
import TheFooter from '@/components/TheFooter/TheFooter.vue';
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__inner">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import '@/app/styles/index.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
