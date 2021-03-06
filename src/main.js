import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faAt } from '@fortawesome/free-solid-svg-icons'
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

console.log(farBell);
library.add(faLock, faAt, farBell);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');