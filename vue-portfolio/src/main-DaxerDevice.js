import './custom.scss'
import './assets/main.css'
import store from './stores/store';
import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import { createStore } from 'vuex'
import App from './App.vue'
//--import router from './router'

////Boostrap block
//Block for add bootstrap in vue.js
// import for apply boottrap scss file


import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
////end  Boostrap block

////Boostrap block
//make bootstrap available in the project
Vue.use(BootstrapVue)

//this install icons component plugin
Vue.use(IconsPlugin)
////end  Boostrap block


const app = createApp(App)

//app.use(createPinia())
app.use(store)
//app.use(router)

app.mount('#app')
