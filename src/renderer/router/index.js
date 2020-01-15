import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Music from '../pages/music/music'
import Vidio from '../pages/vidio/vidio'
import Any from '../pages/any/any'

let Gedan=()=>import('../pages/music/children/gedan.vue')
let Geshou=()=>import('../pages/music/children/geshou.vue')
let Paihang=()=>import('../pages/music/children/paihang.vue')
let Tuijian=()=>import('../pages/music/children/tuijian.vue')
let Xinge=()=>import('../pages/music/children/xinge.vue')

let TuijianXQ=()=>import('../pages/music/tuijian-xq/tuijian-xq')
let PaihangXQ=()=>import('../pages/music/paihang-xq/paihang-xq')
let GeshouXQ=()=>import('../pages/music/geshou-xq/geshou-xq')

let VidioXQ=()=> import('../pages/vidio/vidio-xq')
export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/music',
      name: 'Music',
      component: Music,
      redirect:'/music/tuijian',
      meta:{
        keepAlive:true
      },
      children:[
        {
          path:'gedan',
          name:'Gedan',
          component:Gedan,
          meta:{
            keepAlive:true
          },
        },
        {
          path:'geshou',
          name:'Geshou',
          component:Geshou,
          meta:{
            keepAlive:true
          },
        },
        {
          path:'paihang',
          name:'Paihang',
          component:Paihang,
          meta:{
            keepAlive:true
          },
        },
        {
          path:'tuijian',
          name:'Tuijian',
          component:Tuijian,
          meta:{
            keepAlive:true
          },
        },
        {
          path:'xinge',
          name:'Xinge',
          component:Xinge,
          meta:{
            keepAlive:true
          },
        }
      ]
    },
    {
      path: '/tuijian-xq/:id',
      name: 'TuijianXQ',
      component: TuijianXQ,
      meta:{
        keepAlive:false
      },
    },
    {
      path: '/paihang-xq/:id',
      name: 'PaihangXQ',
      component: PaihangXQ,
      meta:{
        keepAlive:false
      },
    },
    {
      path: '/geshou-xq/:id',
      name: 'GeshouXQ',
      component: GeshouXQ,
      meta:{
        keepAlive:false
      },
    },
    {
      path: '/vidio',
      name: 'Vidio',
      component: Vidio,
      meta:{
        keepAlive:false
      },
    },
    {
      path: '/vidio-xq',
      name: 'VidioXQ',
      component: VidioXQ,
      meta:{
        keepAlive:false
      },
    },
    {
      path: '/any',
      name: 'Any',
      component: Any
    },
    {
      path: '/',
      redirect: '/any'
    },
    {
      path: '*',
      redirect: '/music'
    }
  ]
})
