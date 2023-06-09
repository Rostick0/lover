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

@font-face {
  font-family: 'PT Sans';
  src: url('@/app/fonts/PTSansBold.woff2') format('woff2'),
    url('@/app/fonts/PTSansBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'PT Sans';
  src: url('@/app/fonts/PTSansRegular.woff2') format('woff2'),
    url('@/app/fonts/PTSansRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'PT Sans Regular Cyr';
  src: url('@/app/fonts/PTSansRegularCyr.woff2') format('woff2'),
    url('@/app/fonts/PTSansRegularCyr.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'PT Sans Bold Cyr';
  src: url('@/app/fonts/PTSansBoldCyr.woff2') format('woff2'),
    url('@/app/fonts/PTSansBoldCyr.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

.wrapper {
  font-family: 'PT Sans';
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
