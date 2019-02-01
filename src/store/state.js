/*
* 状态对象
* */

export default {
  /*图片上传的图片*/
  img_upload_cache: [],
  img_paths: [],
  img_status: 'ready', // 上传状态 ready selected uploading finished


  isShowSearche:false,//显示查询还是搜索

  isShowPublishScenic:false,//显示发表文章

  isShowReplyComment:false,//显示回复评论
  isShowUserLogin:false,//显示登录
  isShowUploaderImg:false,//显示上传个人照片
  isShowSourcesDetail:false,//显示资源共享列表
  isShowUserComment:false,//显示资源共享列表用户评论信息
  isUserPersonalInfo:false,//显示资源共享列表用户评论信息
  isShowSearchOrSortMenu:false,//是否显示搜索 还是分类
  pullUpLoading:false,//向上拉取刷新
  pullDownLoading:false,//向下拉取刷新
  scenics:[],
}
