const hello = () => import(/* webpackChunkName: "indexPage" */ './src/components/HelloWorld.vue');
const enter = () => import(/* webpackChunkName: "indexPage" */ './src/pages/enter.vue');
const regist = () => import(/* webpackChunkName: "indexPage" */ './src/pages/user/regist.vue');
const login = () => import(/* webpackChunkName: "indexPage" */ './src/pages/login.vue');


const routes = [
    {
        path: '/',
        component: enter,
        meta: {
            group: 'base',
            title: '订阅与观看'
        }
    },
    {
        path: '/regist',
        component: regist
    },
    {
        path: '/login',
        component: login
    }
];

export default routes;
