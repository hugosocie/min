export default [
  {
    name: 'home',
    path: '/',
    component: () => import( /* webpackChunkName: "main" */ 'PAGES/home.vue' ),
  },
  {
    name: 'test',
    path: '/test',
    component: () => import( /* webpackChunkName: "main" */ 'PAGES/test.vue' ),
  }
]