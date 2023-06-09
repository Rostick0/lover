<script>
export default {
    name: 'UiCounter'
}
</script>

<template>
    <span class="counter">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
@import './counter';
</style>