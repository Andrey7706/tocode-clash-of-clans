import { createApp } from 'vue'
import routes from './routes'
import App from './App.vue'

import './assets/scss/main.scss';
import './assets/scss/theme.scss';

const app = createApp(App);

app.use(routes)

app.mount('#app');
