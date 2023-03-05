import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'


createApp(App).use(router).mount('#app')
