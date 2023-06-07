import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router'
import componentsUI from '@/ui';

const app = createApp(App);

componentsUI.forEach(component => {
    app.component(component.name, component);
});

app
    .use(router)
    .mount('#app')
