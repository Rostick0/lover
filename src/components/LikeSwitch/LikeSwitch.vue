<script setup>
const test = e => console.log(e.target.value);
</script>

<template>
    <div class="switch">
        <label class="switch__like">
            <input type="radio" name="type_like" @change="test" value="from_me" checked hidden>
            <span class="switch__like_content">
                <span class="switch__detail">
                    <UiTitle>Кто лайкнул меня</UiTitle>
                    <UiCounter class="switch__like_counter">1</UiCounter>
                </span>
                <span class="switch__mobile_no-active">
                    <svg width="28" height="28" fill="#9d9d9d" viewBox="0 0 20 18.4" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.5 0c-1.74 0-3.41.81-4.5 2.09C8.91.81 7.24 0 5.5 0 2.42 0 0 2.42 0 5.5 0 9.28 3.4 12.36 8.55 17L10 18.31l1.45-1.32C16.6 12.32 20 9.24 20 5.49c0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.6-.1.1-.1-.1C5.14 11.29 2 8.44 2 5.6c0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10z">
                        </path>
                        <path
                            d="m10.002 13.84-.77-.655c-2.735-2.316-4.54-3.844-4.54-5.719 0-1.528 1.285-2.728 2.92-2.728.924 0 1.811.402 2.39 1.037a3.276 3.276 0 0 1 2.39-1.037c1.635 0 2.92 1.2 2.92 2.728 0 1.875-1.805 3.403-4.54 5.724z">
                        </path>
                    </svg>
                </span>
            </span>
        </label>
        <label class="switch__like">
            <input type="radio" name="type_like" @change="test" value="to_me" hidden>
            <span class="switch__like_content">
                <span class="switch__detail">
                    <UiTitle>Кого лайкнул я</UiTitle>
                </span>
                <span class="switch__mobile_no-active">
                    <svg width="28" height="28" fill="#9d9d9d" viewBox="0 0 25.902 18.333" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.14 1.227c-1.457 0-2.855.684-3.768 1.763-.912-1.08-2.31-1.763-3.767-1.763C2.026 1.227 0 3.268 0 5.867c0 3.188 2.847 5.786 7.158 9.733l1.214 1.105 1.214-1.113c4.312-3.94 7.159-6.537 7.159-9.726 0-2.597-2.026-4.639-4.605-4.639zM8.456 14.343l-.084.085-.083-.085c-3.986-3.635-6.615-6.04-6.615-8.477 0-1.687 1.256-2.952 2.93-2.952 1.29 0 2.546.835 2.99 1.99h1.565c.436-1.155 1.692-1.99 2.981-1.99 1.675 0 2.93 1.265 2.93 2.952 0 2.438-2.629 4.842-6.614 8.477z">
                        </path>
                        <path
                            d="m15.893 18.333-1.45-1.319c-5.155-4.666-8.558-7.743-8.558-11.52C5.885 2.419 8.307 0 11.39 0c1.741 0 3.412.81 4.503 2.088C16.984.809 18.656 0 20.397 0 23.479 0 25.9 2.418 25.9 5.495c0 3.776-3.402 6.853-8.557 11.529z">
                        </path>
                    </svg>
                </span>
            </span>
        </label>
        <label class="switch__like">
            <input type="radio" name="type_like" @change="test" value="mutual" hidden>
            <span class="switch__like_content">
                <spab class="switch__detail">
                    <UiTitle>Взаимные лайки</UiTitle>
                </spab>
                <span class="switch__mobile_no-active">
                    <svg width="28" height="28" fill="#9d9d9d" viewBox="0 0 28.1 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.5 0c-1.74 0-3.41.81-4.5 2.09C8.91.81 7.24 0 5.5 0 2.42 0 0 2.42 0 5.5 0 9.28 3.4 12.36 8.55 17L10 18.31l1.45-1.32C16.6 12.32 20 9.24 20 5.49c0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.6-.1.1-.1-.1C5.14 11.29 2 8.44 2 5.6c0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10z">
                        </path>
                        <path
                            d="m18.47 17.9-1.167-1.045c-4.146-3.699-6.883-6.138-6.883-9.132 0-2.44 1.948-4.356 4.428-4.356 1.4 0 2.745.642 3.622 1.655a4.853 4.853 0 0 1 3.623-1.655c2.479 0 4.427 1.917 4.427 4.356 0 2.994-2.737 5.433-6.883 9.14z">
                        </path>
                    </svg>
                </span>
        </span>
    </label>
</div></template>

<style lang="scss" scoped>@import './switch.scss';</style>