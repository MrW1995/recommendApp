import {
  userLogins,
  upLoadImg,
  publishTravel,
  queryScenic,
  articleComment,
  vagueQuery,
  everyDayLaugh,
  addStudySource,
  queryStudySoutce,
  userRegisterAndUpdate,
  queryAboutUserInfo,
  submitAdvice,
  getSort
} from '../api/index'

import {
  RECEIVE_SCENIC,
  LOGIN,
  UPLOAD_IMG,
  PUBLISH_TRAVEL,
  QUERY_SCENIC,
  ARTICLE_COMMENT,
  LOADING_VAGUE_SEARCH,
  ADD_STUDY_SOURCE,
  EVERYDAY_LAUGH,
  QUERY_STUDY,
  QUERY_USER_ABOUT_INFO,
  USER_UPDATE_REGISTER,
  SUBMIT_ADVICE,
  SUCCESS_SORT
} from './mutations-types'
export default {
  /*异步请求的方法*/

  async userLogin({commit},{userName,password}){
    const  result = await userLogins({userName,password})
    commit(LOGIN,{result})
  },

  async uploadImg({commit},uploadImg){
    const result = await upLoadImg(uploadImg)
    commit(UPLOAD_IMG,{result})
  },

  async publishTravel({commit},valEntities){
    const result = await publishTravel(valEntities)
    commit(PUBLISH_TRAVEL,{result})
  },

  async queryScenic({commit},{travelSort,sorts,loading,dateTime,pageNum}){
    const result = await queryScenic({travelSort,sorts,loading,dateTime,pageNum})
    const pageList = result.pageList
    const allPage = result.page
    commit(QUERY_SCENIC,{pageList,pageNum,allPage})
  },

  async articleComment({commit},{articleEntities,urls}){
    const result = await articleComment({articleEntities,urls})
    commit(ARTICLE_COMMENT,{result})
  },

  async vagueQuery({commit},{pageNum,vague,urls}){
    const result = await vagueQuery({pageNum,vague,urls});
    const searchList = result.list
    const vague1 = vague
    commit(LOADING_VAGUE_SEARCH,{searchList,vague1})
  },

  async everyDayLaugh({commit},{pageNum}){
    const result = await everyDayLaugh({pageNum});
    commit(EVERYDAY_LAUGH,result)
  },

  async addStudySource({commit},studySource){
    const result = await addStudySource(studySource)
    commit(ADD_STUDY_SOURCE,{result})
  },

  async queryStudySource({commit},{studySort,sorts,loading,dateTime,pageNum}){
    const result = await queryStudySoutce({studySort,sorts,loading,dateTime,pageNum})
    commit(QUERY_STUDY,result.list)
  },

  async userRegisterAndUpdate({commit},{personEntities,url}){
    const result = await userRegisterAndUpdate({personEntities,url})
    commit(USER_UPDATE_REGISTER,{result})
  },

  async queryAboutUserInfo({commit},{userId,flag}){
    const result = await queryAboutUserInfo({userId,flag})
    commit(QUERY_USER_ABOUT_INFO,{result,flag})
  },

  async submitAdvice({commit},advice){
    const result = await submitAdvice(advice)
    commit(SUBMIT_ADVICE,{result})
  },

  async getSort({commit},{url,num}){
      const result = await getSort(url)
      commit(SUCCESS_SORT,{result,num})
  }


}
