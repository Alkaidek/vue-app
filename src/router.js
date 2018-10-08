import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from './components/AppComponent.vue'
import About from './components/About.vue'
import NoFound from './components/NoFound.vue'
import NewContent from './components/NewContent'
import contenter from './components/contenter'
import uiComponent from './components/uiComponent'
import gridComponent from  './components/gridComponent'
import mathComponent from './components/mathComponent'
import mathText from './components/mathText'
import photoGrid from './components/photoGrid'
import photoGrid2 from './components/photoGrid2'
import glitchComponent from './components/glitchComponent'
import boforeComponent from './components/boforeComponent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'AppComponent',
            component: AppComponent
        },
        {
            path: '/photoGrid',
            name: 'photoGrid',
            component: photoGrid
        },{
            path: '/boforeComponent',
            name: 'boforeComponent',
            component: boforeComponent
        },
        {
            path: '/glitchComponent',
            name: 'glitchComponent',
            component: glitchComponent
        },
        {
            path: '/photoGrid2',
            name: 'photoGrid2',
            component: photoGrid2
        },
        {
            path: '/grid',
            props: {
                txt1: 'Bacon ipsum dolor amet filet mignon prosciutto beef ham picanha cow chicken ribeye ball tip short loin hamburger. Pork chop hamburger bacon swine sirloin shankle alcatra, ball tip pork venison jerky porchetta.',
                txt2: 'Andouille pastrami rump pork belly, frankfurter meatloaf drumstick leberkas salami capicola kielbasa buffalo short ribs burgdoggen. Fatback venison pork belly turducken t-bone chicken. Spare ribs jerky short ribs landjaeger flank.',
                txt3: 'Prosciutto sausage spare ribs leberkas tail beef. ',
                txt4: 'Ham hock capicola tail shoulder drumstick frankfurter, ribeye sirloin.',
                txt5: '. Pig tenderloin biltong burgdoggen pancetta, tri-tip ham hock spare ribs t-bone alcatra short ribs.',
                txt6: 'Fatback tongue short loin alcatra shank filet mignon short ribs porchetta strip steak turducken pig beef pancetta buffalo picanha.',
                txt7: 'Buffalo andouille capicola boudin. Doner filet mignon kielbasa alcatra.',
                txt8: 'Beef ribs sirloin alcatra tri-tip bacon. '
            },
            name: 'gridComponent',
            component: gridComponent
        },
        {
            path: '/math',
            props: {
                operation: [2, '+', 2],
                answers: [4, 5, 10]
            },
            name: 'mathComponent',
            component: mathComponent
        },
        {
            path: '/uiComponent',
            props: {
                col1: '#BED905',
                col2: '#DE8CF0'
            },
            name: 'uiComponent',
            component: uiComponent
        },
        {
            path: '/uiComponentInvert',
            props: {
                col1: '#DE8CF0',
                col2: '#BED905'
            },
            name: 'uiComponentInvert',
            component: uiComponent
        },
        {
            path: '/uiComponentWinter',
            props: {
                col1: '#B9E5F3',
                col2: '#8A140E'
            },
            name: 'uiComponentWinter',
            component: uiComponent
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/mathText',
            name: 'mathText',
            component: mathText
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