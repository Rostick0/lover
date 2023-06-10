<script>
export default {
    name: 'UiModal'
}
</script>

<template>
    <div class="modal">
        <slot></slot>
        <!-- <div class="modal__inner">
            
            </div> -->
    </div>
</template>

<style lang="scss" scoped>
@import './modal.scss';
</style>