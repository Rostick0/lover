import { ref } from 'vue';

export const isActiveAside = ref(false);

export const setIsActiveAsideTrue = () => {
    isActiveAside.value = true;
};

export const setIsActiveAsideFalse = () => {
    isActiveAside.value = false;
};