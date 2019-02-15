export default [
  {
    name: 'home',
    path: '/',
    component: () => import( /* webpackChunkName: "main" */ '@pages/home.vue' ),
  },
  {
    name: 'test',
    path: '/test',
    component: () => import( /* webpackChunkName: "main" */ '@pages/test.vue' ),
  },
];
