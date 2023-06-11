<script setup>
import ImageAlbum from '../ImageAlbum/ImageAlbum.vue';
</script>

<template>
    <div class="upload">
        <div class="upload__title">Загрузите фотографии</div>
        <div class="upload__content">
            <div class="upload__content_left">
                <label class="upload__label">
                    <UiTitleField class="upload__label_big">Загрузить фото</UiTitleField>
                    <span class="upload__label_small">(до 10 Мб)</span>
                    <svg width="49" height="45" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="hsl(0deg 0% 62%)">
                        <path
                            d="M15.6488 2.04024L11.7356 5.5977H5.16092C2.95178 5.5977 1.16092 7.38856 1.16092 9.5977V37C1.16092 39.2091 2.95179 41 5.16092 41H40.8391C43.0482 41 44.8391 39.2091 44.8391 37V9.5977C44.8391 7.38856 43.0482 5.5977 40.8391 5.5977H33.8046L30.8584 2.32414C30.0998 1.48129 29.0192 1 27.8852 1H18.3395C17.3445 1 16.3851 1.37089 15.6488 2.04024Z"
                            stroke-width="2"></path>
                        <circle cx="23.2299" cy="23.5286" r="10.0345" stroke-width="2"></circle>
                        <circle cx="23.2299" cy="23.5287" r="6.35632" stroke-width="2"></circle>
                    </svg>
                    <input type="file" accept="image/*,.png,.jpeg,.jpg" hidden />
                </label>
            </div>
            <div class="upload__content_right">
                <div class="upload__info">
                    <svg height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg" fill="#d31120">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                        </path>
                    </svg>
                    <span>Фотографии должны быть вашими, каждая фотография обрабатывается вручную</span>
                </div>
                <ImageAlbum></ImageAlbum>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './upload.scss';
</style>