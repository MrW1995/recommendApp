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

  dateFormat:function(date,flag){
    let seperator1 = "/"
    let seperator2 = "-"
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = "0" + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate
    }

    let currentdate = ''
    if(flag === 1){
      currentdate = date.getFullYear() + seperator2 + month + seperator2 + strDate
      let time = this.getTime(date)
      return currentdate + " "+ time
    }
    if(flag === 2){
      currentdate = date.getFullYear() + seperator2 + month + seperator2 + strDate
      return currentdate
    }
    currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    return currentdate
  },
  dateTimeFormat:function(dateTime){
    return dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
  },

  getMonthAndDay(strDate){
    let date = new Date(strDate)
    const hoursAndminutes = this.getTime(date)
    let month = date.getMonth() + 1
    let strDay = date.getDate()
    if (month >= 1 && month <= 9) {
      month = "0" + month
    }
    if (strDay >= 0 && strDay <= 9) {
      strDay = "0" + strDay
    }
    return month+"-"+strDay +" "+ hoursAndminutes
  },


  getTime(strDate){
    let hours = strDate.getHours()
    let minutes = strDate.getMinutes()
    if(hours>=0 && hours <= 9){
      hours = "0"+hours
    }
    if(minutes>=0 && minutes <= 9){
      minutes = "0"+minutes
    }
    return hours+":"+minutes
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

