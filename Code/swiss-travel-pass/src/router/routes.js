
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Plans.vue') },
      { path: '/interests', meta: {title: "Travel Interests"}, component: () => import('pages/Interests.vue') },
      { path: '/detail', meta: {title: "Adelboden, Länk"}, component: () => import('pages/Detail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
