import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 获取地址参数
const urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id')) // 获取地址栏参数id的值

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
