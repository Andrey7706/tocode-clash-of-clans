import {createRouter, createWebHistory} from 'vue-router';

const routeHistory = createWebHistory();

import HomePage from './pages/homePage.vue';
import AboutPage from './pages/aboutPage.vue';
import NotFoundPage from './pages/notFound.vue';
import Item from './pages/_itemAlias.vue';

const routers = createRouter({
  history: routeHistory,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage,
    },
  ],
});

export default routers;