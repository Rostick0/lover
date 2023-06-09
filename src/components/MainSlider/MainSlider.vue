<script setup>
import { ref, defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, } from 'swiper';
import 'swiper/scss';

const prev = ref(null);
const next = ref(null);

const sliderModules = [Navigation, Autoplay];

const props = defineProps({
    peoples: {
        type: Array
    }
});
</script>

<template>
    <div class="slider">
        <div class="slider__arrow" ref="prev">
            <svg width="37" height="102" viewBox="0 0 37 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M28.5309 3.06121C29.5071 1.37055 31.6689 0.791289 33.3596 1.76739V1.76739C35.0502 2.7435 35.6295 4.90534 34.6534 6.59601L6.12258 56.0128L4.33027 54.978C1.93881 53.5973 1.11943 50.5393 2.50015 48.1479L28.5309 3.06121Z"
                    fill="#D9D9D9" />
                <path
                    d="M34.6535 94.8641C35.6296 96.5547 35.0503 98.7166 33.3597 99.6927V99.6927C31.669 100.669 29.5072 100.09 28.5311 98.3989L2.50027 53.3122C1.11956 50.9207 1.93893 47.8628 4.3304 46.4821L6.12271 45.4473L34.6535 94.8641Z"
                    fill="#D9D9D9" />
            </svg>
        </div>
        <Swiper :breakpoints="{
            1366: {
                slidesPerView: 5
            },
            1024: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            520: {
                slidesPerView: 2
            },
        }" :space-between="10" :navigation="{
    prevEl: prev,
    nextEl: next,
}" :modules="sliderModules">

            <SwiperSlide v-for="people in props.peoples" :key="people.id">
                <div class="slide">
                    <div class="slide__top">
                        <div class="slide__info">
                            <div>{{ people.name }}, {{ people.year }}</div>
                            <div class="slide__online"></div>
                        </div>
                        <div class="slide__photo">
                            <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.75 9V1.5c0-.688-.563-1.25-1.25-1.25H4c-.688 0-1.25.563-1.25 1.25V9c0 .688.563 1.25 1.25 1.25h7.5c.688 0 1.25-.563 1.25-1.25ZM5.875 6.5l1.269 1.694L9 5.875 11.5 9H4l1.875-2.5ZM.25 2.75v8.75c0 .688.563 1.25 1.25 1.25h8.75V11.5H1.5V2.75H.25Z"
                                    fill-rule="evenodd"></path>
                            </svg>
                            <span>{{ people.count_photo }} фото</span>
                        </div>
                    </div>
                    <img class="slide__img" :src="people.avatar" :alt="people.name">
                    <div class="slide__bottom">
                        <button class="slide__button">
                            <span>Написать</span>
                            <svg width="18" height="18" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.845 13.93 17.923 1.646.007.641l1.874 5.17 11.613-2.554L2.956 8.765z"
                                    fill="#189BE4" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button class="slide__button">
                            <span>Лайк</span>
                            <svg width="18" height="18" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.078 0C10.63 0 9.238.675 8.33 1.741A4.988 4.988 0 0 0 4.581 0C2.016 0 0 2.016 0 4.582c0 3.148 2.832 5.714 7.122 9.612l1.208 1.092 1.208-1.1c4.29-3.89 7.122-6.456 7.122-9.604C16.66 2.016 14.644 0 12.078 0Z"
                                    fill="#00B778" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="slider__arrow _right" ref="next">
            <svg width="37" height="102" viewBox="0 0 37 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M28.5309 3.06121C29.5071 1.37055 31.6689 0.791289 33.3596 1.76739V1.76739C35.0502 2.7435 35.6295 4.90534 34.6534 6.59601L6.12258 56.0128L4.33027 54.978C1.93881 53.5973 1.11943 50.5393 2.50015 48.1479L28.5309 3.06121Z"
                    fill="#D9D9D9" />
                <path
                    d="M34.6535 94.8641C35.6296 96.5547 35.0503 98.7166 33.3597 99.6927V99.6927C31.669 100.669 29.5072 100.09 28.5311 98.3989L2.50027 53.3122C1.11956 50.9207 1.93893 47.8628 4.3304 46.4821L6.12271 45.4473L34.6535 94.8641Z"
                    fill="#D9D9D9" />
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './slider.scss';
</style>