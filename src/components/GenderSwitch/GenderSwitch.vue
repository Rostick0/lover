<script setup>

</script>

<template>
    <div class="gender">
        <UiTitleField>Я</UiTitleField>
        <div class="gender__switch">
            <label class="gender__label">
                <input type="radio" name="gender" value="man" checked>
                <span class="gender__switch_content">
                    <svg width="18" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.74 2.5H12v-2h5v5h-2V4.087L12.57 6.76a7 7 0 1 1-1.428-1.403L13.74 2.5ZM7 16A5 5 0 1 0 7 6a5 5 0 0 0 0 10Z"
                            fill="#fff"></path>
                    </svg>
                    <span>Мужчина</span>
                </span>
            </label>
            <label class="gender__label">
                <input type="radio" name="gender" value="woman">
                <span class="gender__switch_content">
                    <svg width="21" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10Zm7-5a7.001 7.001 0 0 1-6 6.93v2.57h2.5v2H8V21H6v-2.5H3.5v-2H6v-2.57A7.001 7.001 0 0 1 7 0a7 7 0 0 1 7 7Z"
                            fill="#fff"></path>
                    </svg>
                    <span>Женщина</span>
                </span>
            </label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './gender.scss';
</style>