<template>
    <form class="message__form" method="post">
        <label>
            <svg width="24" height="24" viewBox="0 0 11 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Two-Tone" transform="translate(-923.000000, -2015.000000)">
                        <g id="Editor" transform="translate(100.000000, 1960.000000)">
                            <g id="Two-Tone-/-Editor-/-attach_file" transform="translate(816.000000, 54.000000)">
                                <g>
                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path
                                        d="M12.5,23 C15.54,23 18,20.54 18,17.5 L18,6 L16.5,6 L16.5,17.5 C16.5,19.71 14.71,21.5 12.5,21.5 C10.29,21.5 8.5,19.71 8.5,17.5 L8.5,5 C8.5,3.62 9.62,2.5 11,2.5 C12.38,2.5 13.5,3.62 13.5,5 L13.5,15.5 C13.5,16.05 13.05,16.5 12.5,16.5 C11.95,16.5 11.5,16.05 11.5,15.5 L11.5,6 L10,6 L10,15.5 C10,16.88 11.12,18 12.5,18 C13.88,18 15,16.88 15,15.5 L15,5 C15,2.79 13.21,1 11,1 C8.79,1 7,2.79 7,5 L7,17.5 C7,20.54 9.46,23 12.5,23 Z"
                                        id="🔹-Primary-Color" fill="#1D1D1D"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <input type="file" hidden>
        </label>
        <input class="message__input" type="text" placeholder="Текст сообщения.." />
        <svg width="24" height="24" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" class="emoji-btn">
            <path
                d="M7.493.417A7.08 7.08 0 0 0 .417 7.5a7.08 7.08 0 0 0 7.076 7.083 7.087 7.087 0 0 0 7.09-7.083A7.087 7.087 0 0 0 7.493.417Zm.007 12.75A5.665 5.665 0 0 1 1.833 7.5 5.665 5.665 0 0 1 7.5 1.833 5.665 5.665 0 0 1 13.167 7.5 5.665 5.665 0 0 1 7.5 13.167Zm2.48-6.375c.587 0 1.062-.475 1.062-1.063s-.475-1.062-1.063-1.062-1.062.474-1.062 1.062c0 .588.474 1.063 1.062 1.063Zm-4.96 0c.589 0 1.063-.475 1.063-1.063S5.61 4.667 5.021 4.667a1.061 1.061 0 1 0 0 2.125Zm2.48 4.604a3.893 3.893 0 0 0 3.62-2.48H3.88a3.893 3.893 0 0 0 3.62 2.48Z"
                fill-rule="evenodd"></path>
        </svg>
        <UiButton class="message__send" styleButton="blue-back">
            <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path>
            </svg>
        </UiButton>
    </form>
</template>

<style lang="scss" scoped>
@import './form.scss';
</style>