import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import useAuthentication from '../composables/useAuthentication'

const { user } = useAuthentication()
//TODO: home page enkel tonen als user niet is ingelogd
//TODO: Trips wordt nieuwe "homepage" als user is ingelogd

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/holders/AppHolder.vue'),
    children: [
      {
        path: '',
        component: () => import('../screens/Home.vue'),
      },

      {
        path: 'trips',
        component: () => import('../screens/trips/index.vue'),
      },
      {
        path: 'trips/:id',
        component: () => import('../screens/trips/_id.vue'),
      },

      {
        path: 'templates',
        component: () => import('../screens/templates/index.vue'),
      },
      {
        path: 'carpool/:id',
        component: () => import('../screens/carpool/_id.vue'),
      },
      {
        path: 'templates/paymentsuccess',
        component: () => import('../screens/templates/paymentSuccess.vue'),
      },
      {
        path: 'templates/paymentcancelled',
        component: () => import('../screens/templates/paymentCancel.vue'),
      },
      {
        path: 'account',
        component: () => import('../screens/Account.vue'),
        meta: {
          needsAuthentication: true,
        },
      },
    ],
  },

  {
    path: '/auth',
    redirect: '/auth/login',
    component: () => import('../components/holders/AuthHolder.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../components/auth/Login.vue'),
        meta: {
          cantAuthenticate: true,
        },
      },

      {
        path: 'register',
        component: () => import('../components/auth/Register.vue'),
        meta: {
          cantAuthenticate: true,
        },
      },

      {
        path: 'forgot-password',
        component: () => import('../components/auth/ForgotPassword.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'ClientError',
    component: () => import('../screens/generic/ClientError.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.meta.needsAuthentication && !user.value) return '/auth/login'
    if (to.meta.cantAuthenticate && user.value) return '/'
  },
)

export default router
