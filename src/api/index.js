/*
* 该文件定义了组件主要调用的ajax请求
* */

import ajax from './ajax'

const BASE_URL = "http://119.23.202.200:9527/consumer"

export const userLogins = ({userName,password}) => ajax(BASE_URL+"/user/login",{userName,password},'GET')

export const upLoadImg = (uploadImg) => ajax(BASE_URL+"/upload",uploadImg,'POST')

export const publishTravel = (valEntities) => ajax(BASE_URL+"/publish/travel/add",valEntities,'POST')

export const queryScenic = ({travelSort,sorts,loading,dateTime,pageNum}) => ajax(BASE_URL+"/travelpublish/query",{travelSort,sorts,loading,dateTime,pageNum},'GET')

export const articleComment = ({articleEntities,urls}) =>ajax(BASE_URL+urls,articleEntities,'POST')

export const vagueQuery = ({pageNum,vague,urls}) => ajax(BASE_URL+urls,{pageNum,vague},'GET')

export const addStudySource = (studySource) => ajax(BASE_URL+"/studycontent/add",studySource,'POST')

export const queryStudySoutce = ({studySort,sorts,loading,dateTime,pageNum}) =>ajax(BASE_URL+"/studysource/query",{studySort,sorts,loading,dateTime,pageNum},'GET')

export const everyDayLaugh = ({pageNum}) =>ajax(BASE_URL+"/get/laugh",{pageNum},'GET')

export const userRegisterAndUpdate = ({personEntities,url}) => ajax(BASE_URL+url,personEntities,'POST')

export const queryAboutUserInfo = ({userId,flag}) => ajax(BASE_URL+"/query/userpublishcontent",{userId,flag},'GET')

export const submitAdvice = (advice) => ajax(BASE_URL+"/submit/advice",advice,'POST')

export const getSort = (url) => ajax(BASE_URL+url,{},'GET')
