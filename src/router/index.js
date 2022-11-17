import Vue from 'vue'
import VueRouter from 'vue-router'
import VCategory from "@/components/V-Category";
import VList from "@/components/V-List";
import VSetting from "@/components/V-Setting";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: VCategory,
        },
        {
            path: '/category/:nameCategory',
            name: 'category',
            component: VList,
        },
        {
            path: '/setting',
            component: VSetting,
        },
    ]
})