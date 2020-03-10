<template>
  <div class="NavSlide">
    <nav>
      <p v-for="(item,$index) in arr" @click="toggle($index,item)"><router-link to="" :class="{active:$index==active}">{{item}}</router-link></p>
    </nav>
  </div>
</template>

<script>
  export default {
    props:{
      arr:Array,
      SortVal:String
    },
    data(){
      return {
        active:0,
      }
    },

    wacth:{
      SortVal(newVal,oldVal){
     
      },
    },

    methods:{
      toggle(index,item){
        this.active=index
        this.$emit('sendVal',item)
      },

    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .NavSlide
    width: 100%
    overflow:hidden
    z-index 100
    height 0.38rem
    color red
    nav
      padding: 0 0.13rem
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      -webkit-box-align: middle
      -ms-flex-align: middle
      align-items: middle
      overflow: auto
      background-color: white
      p
        text-align: center
        font-size: 0.18rem
        -ms-flex-negative: 0
        flex-shrink: 0
        padding: 0.01rem
        margin: 0.081rem

  .NavSlide p a  //统一字体设置
    color: gray
    text-decoration: none

  .NavSlide p a.active  //关于单击字体的设置
    color: blue


</style>
