/*
* 这是路由器的配置文件
* */

import Vue from "vue"
import VueRouter from "vue-router"
const Scenic = () =>import('../pages/ShowScenic/ShowScenic')
const StudySource = () =>import('../pages/StudySource/StudySource')
const Laugh = () =>import('../pages/Share/Share')
const Personal = () =>import('../pages/Personal/Personal')
const Search = () =>import('../pages/Search/Search')
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/scenic',
      component:Scenic,
      meta:{
        is:true
      }
    },
    {
      path:'/studySource',
      component:StudySource
    },
    {
      path:'/laugh',
      component:Laugh
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/scenic'
    },

  ]
})
