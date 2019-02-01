const hello = () => import(/* webpackChunkName: "indexPage" */ './src/components/HelloWorld.vue');
const enter = () => import(/* webpackChunkName: "indexPage" */ './src/pages/enter.vue');

const routes = [
    {
        path: '/',
        component: enter,
        meta: {
            group: 'base',
            title: '订阅与观看'
        },
    }
];

export default routes;