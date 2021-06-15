/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
        path: '/',
        component: () =>
            import ('@/views/layouts/index'),
        redirect: '/home',
        meta: {
            title: '首页',
            keepAlive: false,
            isShowBar: true,
        },
        children: [{
                path: '/home',
                name: 'Home',
                component: () =>
                    import ('@/views/home/index/index'),
                meta: { title: '首页', keepAlive: false, isShowBar: true },
            },
            {
                path: '/about',
                name: 'About',
                component: () =>
                    import ('@/views/home/about/about'),
                meta: { title: '关于我', keepAlive: false, isShowBar: true },
            },
            {
                path: '/order',
                name: 'Order',
                component: () =>
                    import ('@/views/home/order/order'),
                meta: { title: '订单', keepAlive: false, isShowBar: true },
            },
            {
                path: '/shopCar',
                name: 'ShopCar',
                component: () =>
                    import ('@/views/home/shopCar/shopCar'),
                meta: { title: '购物车', keepAlive: false, isShowBar: true },
            },
        ],
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/login'),
        meta: {
            title: '登录',
            keepAlive: false,
            isShowBar: false,
        },
    }
];