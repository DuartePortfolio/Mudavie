import { createRouter, createWebHistory } from 'vue-router'
import { loginStore } from '../stores/loginStore';

import HomeView from '../views/HomeView.vue'
import TicketView from '../views/TicketsView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramView from '../views/ProgramView.vue'
import SubmissionsView from '../views/SubmissionsView.vue'
import NewsView from '../views/NewsView.vue'
import ProfileView from '../views/ProfileView.vue'
import NotFoundView from '../views/NotFoundView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/Tickets/:movie',
      name: 'Tickets',
      component: TicketView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/Profile/:id',
      name: 'Profile',
      component: ProfileView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/News',
      name: 'News',
      component: NewsView,
      meta: { requiresVIP: true },
    },
    {
      path: '/Submissions',
      name: 'Submissions',
      component: SubmissionsView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/Program',
      name: 'Program',
      component: ProgramView,
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/LandingPage',
      name: 'LandingPage',
      component: LandingPageView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound', 
      component: NotFoundView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = loginStore();
  const isAuthenticated = store.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Home' });
  } else if (to.meta.requiresVIP) {
    const hasVIPTicket = store.user.ticketType.some(ticket => ticket.price > 20);
    if (!hasVIPTicket) {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
