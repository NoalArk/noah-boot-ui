import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// import 'ant-design-vue/dist/antd.css'
//
import 'ant-design-vue/dist/antd.less';
import {Button, DatePicker} from 'ant-design-vue'

app.use(Button)
    .use(DatePicker)
    .use(store)
    .use(router)
    .mount('#app')
