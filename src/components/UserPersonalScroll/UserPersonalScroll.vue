<template>
    <Scroll class="wrapper" ref="wrapper" :data="arr">
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <slot name="content"></slot>
        </li>
      </ul>
    </Scroll>
</template>

<script>
  import Scroll from '../Sroll/Scroll'
  export default {
    props:['arr'],
    data(){
      return {

      }
    },
    components:{
      Scroll
    },
    mounted(){
      setTimeout(() =>{
        this.refresh()

      },20)
    },
    methods:{
      refresh(){
        if(this.$refs.wrapper.scroll){

        }else {

          this.$refs.wrapper.refresh()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  ul,li
    ulAndLi()
  .wrapper
    height 4.8rem
    overflow hidden
</style>
