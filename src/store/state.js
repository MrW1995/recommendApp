/*
* 状态对象
* */

export default {
  token:null,

  /*图片上传的图片*/
  img_upload_cache: [],
  img_upload_flag:0,
  img_paths: [],
  img_status: 'ready', // 上传状态 ready selected uploading finished

  /*用户登录信息*/
  userInfos:[],
  code:0,
  msg:'',
  scenics:[],
  singleScenic:[],
  pageNum:1,
  loading:'最新',
  loadingCount:-1,
  dateTime:'',
  userCommetArticle:[],
  commentArticleFlag:0,
  vagueSearchArr:[],
  vagueFlag:false,
  vague:'',
  allPages:0,
  everyDayLaugh:[],
  laughFlag:false,
  studyArr:[],
  studyPullDown:false,
  executeMethod:false,
  showState:false,
  studyCount:0,
  studyDetail:[],
  userCommentStudy:[],
  userCommentUser:[],
  commentCount:[],
  publishCount:[],
  followCount:[],
  uploadImgs:[],
  codeFlag:false,
  msgContent:'',
  uploadFinish:false,
  uploadImg:'',
  sortList:[],
  isShowSearche:false,//显示查询还是搜索
  isShowUserLogin:false,//显示登录
  isShowUploaderImg:false,//显示上传个人照片
  isShowSearchOrSortMenu:false,//是否显示搜索 还是分类
  pullUpLoading:0,//向上拉取刷新
  pullDownLoading:0,//向下拉取刷新

}
