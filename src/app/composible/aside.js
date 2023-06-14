import { ref } from 'vue';

export const isActiveAside = ref(false);

export const setIsActiveAsideToggle = () => {
    isActiveAside.value = !isActiveAside.value;
};

export const setIsActiveAsideTrue = () => {
    isActiveAside.value = true;
};

export const setIsActiveAsideFalse = () => {
    isActiveAside.value = false;
};