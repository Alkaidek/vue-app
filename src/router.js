import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from './components/AppComponent.vue'
import About from './components/About.vue'
import NoFound from './components/NoFound.vue'
import NewContent from './components/NewContent'
import contenter from './components/contenter'
import uiComponent from './components/uiComponent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'AppComponent',
            component: AppComponent
        },
        {
            path: '/uiComponent',
            name: 'uiComponent',
            component: uiComponent
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/newContent',
            name: 'newContent',
            component: NewContent
        },
        {
            path: '/contenter',
            name: 'contenter',
            component: contenter
        },
        {
            path: '/*',
            name: 'nofound',
            component: NoFound
        },
        {
            path: '*',
            name: '2ndnofound',
            component: NoFound
        }
    ]
})