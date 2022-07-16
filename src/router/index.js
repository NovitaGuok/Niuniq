import { createRouter, createWebHistory } from 'vue-router'
import ShopInfo from '../views/ShopInfoView.vue'
import Dashboard from '../views/DashboardView.vue'
import ProductList from '../views/ProductListView.vue'
import DummyPage from '../pages/DummyPage.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: DummyPage
    },
    {
        path: '/shop-info',
        name: 'ShopInfo',
        component: ShopInfo
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/product-list',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
