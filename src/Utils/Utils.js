import Vue from 'vue'
const util = {
  countNumber:function(newVal,oldVal,allCount,number) {
    let remaindCount, allCoun
    const newValLength = newVal.length
    const oldValLength = oldVal.length
    if (newValLength > oldValLength) {
      remaindCount = newValLength
      allCoun = (allCoun = number) - newValLength
      return {remaindCount,allCoun}
    } else {
      remaindCount = newValLength
      allCoun = allCount + (oldValLength - newValLength)
      return {remaindCount,allCoun}
    }
  },

  dateFormat:function(date){
    let seperator1 = "/"
    let seperator2 = ":"
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = "0" + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate
    }
    /* + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();*/
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate

    return currentdate
  },

  splitArr:function (getArrSort,lineNumber) {
    const arr = []
    //准备一个小的数组
    let minArr = []

    getArrSort.forEach(s =>{

      //当minArr的长度为4时 就创建新的数组
      if(minArr.length === lineNumber){
        minArr = []
      }
      //当minArr为空时 说明该数组是刚创建的  与大的数组进行关联
      if(minArr.length === 0){
        arr.push(minArr)
      }
      //每遍历一个就往里面装一个
      minArr.push(s)
    })
    return arr
  }
}

Vue.prototype.util = util

