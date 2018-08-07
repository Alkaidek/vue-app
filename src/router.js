import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from './components/AppComponent.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'AppComponent',
            component: AppComponent
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})