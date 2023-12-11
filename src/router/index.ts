import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        component: () => import('@/layout/index.vue'),
        children:[
          {
            path: '/login',
            component: () => import('@/views/login/index.vue')
          }
        ]
        
      },

    ]
  })
  export default router