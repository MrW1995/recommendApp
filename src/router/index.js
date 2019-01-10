/*
* 这是路由器的配置文件
* */

import Vue from "vue"
import VueRouter from "vue-router"
const Scenic = () =>import('../pages/ShowScenic/ShowScenic')
const StudySource = () =>import('../pages/StudySource/StudySource')
const Laugh = () =>import('../pages/Laugh/Laugh')
const Personal = () =>import('../pages/Personal/Personal')
const Search = () =>import('../pages/Search/Search')
const PersonalEdit = () =>import('../pages/PersonalEdit/PersonalEdit')
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/scenic',
      component:Scenic,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/studySource',
      component:StudySource,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/laugh',
      component:Laugh,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta:{
        isShowFooter:true
      },
    },
    {
      path:'/personaledit',
      component:PersonalEdit
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
