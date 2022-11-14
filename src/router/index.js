import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/indexPage.vue'
import HomePage from '@/views/test3/home.vue'

const routerArr = [
    {
        path: '/',
        redirect: 'homePage'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/homePage',
        component: HomePage
    },
    {
        path: '/',
        component: HomePage,
        children: [
            {
                path: 'one-first',
                component: () => import('@/views/test3/right/one-first.vue')
            },
            {
                path: 'two-first',
                component: () => import('@/views/test3/right/two-first.vue')
            },
            {
                path: 'three-first',
                component: () => import('@/views/test3/right/three-first.vue')
            },
            {
                path: 'four-first',
                component: () => import('@/views/test3/right/four-first.vue')
            },
            {
                path: '404',
                component:()=>import('@/views/test3/right/404.vue')
            }
        ]
    },
    {
        path: '/echartsOne',
        component: () => import('@/views/test2/echartsOne.vue'),
        name: 'echartsOne'
    },
    {
        path: '/echartsTwo',
        component: () => import('@/views/test2/echartsTwo.vue'),
        name: 'echartsTwo'
    },
    {
        path: '/echartsThree',
        component: () => import('@/views/test2/echartsThree.vue'),
        name: 'echartsThree'
    },
    {
        path: '/echartsFour',
        component: () => import('@/views/test2/echartsFour.vue'),
        name: 'echartsFour'
    },
    {
        path: '/echartsFive',
        component: () => import('@/views/test2/echartsFive.vue'),
        name: 'echartsFive'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerArr
})

export default router