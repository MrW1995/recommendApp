/*
* 这是路由器的配置文件
* */

import Vue from "vue"
import VueRouter from "vue-router"
import {LOGIN} from '../store/mutations-types'
const Scenic = () =>import('../pages/ShowScenic/ShowScenic')
const StudySource = () =>import('../pages/StudySource/StudySource')
const Laugh = () =>import('../pages/Laugh/Laugh')
const Personal = () =>import('../pages/Personal/Personal')
const Search = () =>import('../pages/SearchPage/Search')
const ScenicDetail = () =>import('../pages/scenicDetail/scenicDetail')
const PersonalEdit = () =>import('../pages/PersonalEdit/PersonalEdit')
const SearchSources = () =>import('../pages/SearchSources/SearchSources')
const UserComment = () =>import('../pages/UserComment/UserComment')
const SourceDetail = () =>import('../pages/SourcesDetail/SourcesDetail')
const StudyComment = () =>import('../pages/StudyComment/StudyComment')
const PersonalInfo = () =>import('../pages/PersonalInfo/PersonalInfo')
const PublishScenic = () =>import('../pages/PublishScenic/PublishScenic')
const PublishSource = () =>import('../pages/PublishSource/PublishSource')
Vue.use(VueRouter)


let router = new VueRouter({
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
    { //搜索页
      path:'/search',
      component:Search,
      meta:{
        isShowFooter:false
      }
    },
    { //景点详情页
      path:'/scenicDetail',
      component:ScenicDetail,
      meta:{
        isShowFooter:false
      }
    },
    { //资源搜索
      path:'/searchSources',
      component:SearchSources,
      meta:{
        isShowFooter:false
      }
    },
    { //学习资源详情页
      path:'/sourceDetail',
      component:SourceDetail,
      meta:{
        isShowFooter:false
      }
    },
    { //学习资源用户评价
      path:'/studyComment',
      component:StudyComment,
      meta:{
        isShowFooter:false
      }
    },
    {//用户评价
      path:'/userComment',
      component:UserComment,
      meta:{
        isShowFooter:false
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta:{
        isShowFooter:true
      },
    },
    {//用户信息
      path:'/personalInfo',
      component:PersonalInfo,
      meta:{
        isShowFooter:false
      },
    },
    {//旅游发表
      path:'/publishScenic',
      component:PublishScenic,
      meta:{
        isShowFooter:false
      },
    },
    {//学习发表
      path:'/publishSource',
      component:PublishSource,
      meta:{
        isShowFooter:false
      },
    },
    {
      path:'/personaledit',
      component:PersonalEdit
    },
    {
      path:'/',
      redirect:'/scenic'
    },
  ]
})

export default router
