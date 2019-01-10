<template>
  <mt-popup class="personalPublicPopup" v-model="popupVisible" popup-transition="popup-fade" position="bottom">
      <div>

      </div>
      <slot name="top"></slot>

  </mt-popup>
</template>

<script>
  export default {
    data(){
      return {
        popupVisible:false,
        calendarShow:'',
        defaultDate:new Date()

      }
    },
    methods:{
      handelChange(){
        console.log("123")
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personalPublicPopup
    width 3.75rem
    display flex
    flex-flow column
    .updateUsernameSetting
      display flex
      .updateUsername
        width 2.6rem
        height 0.3rem
        border-radius 5%
        font-size 0.18rem
        margin 0.05rem 0 0.05rem  0.05rem
      .btn1
        width 0.45rem
        height 0.3rem
        border none
        background-color red
        margin 0.1rem 0 0 0.05rem
      .btn2
        width 0.45rem
        height 0.3rem
        border none
        margin 0.1rem 0 0 0.05rem
        background-color yellow
    .UpdateUserDesc
      display flex
      .inputDesc
        width 2.6rem
        height 0.4rem
        margin  0.05rem 0 0.05rem 0.1rem
      .statisticsCount
        position absolute
        font-size 0.13rem
        margin 0.32rem 0 0 2.40rem
      .btnMove
        display flex
        flex-flow column
        .btn1
          width 0.8rem
          height 0.2rem
          border none
          background-color red
          margin 0.05rem 0 0 0.05rem
        .btn2
          width 0.8rem
          height 0.2rem
          border none
          background-color red
          margin 0.05rem 0 0 0.05rem
</style>
