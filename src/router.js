import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from './components/AppComponent.vue'
import About from './components/About.vue'
import NoFound from './components/NoFound.vue'

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
        },
        {
            path: '/*',
            name: 'nofound',
            component: NoFound
        },
        {
            path: '*',
            name: 'nofound',
            component: NoFound
        }

    ]
})