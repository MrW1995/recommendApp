<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {
      loading:{
        type:Number,
        default:0,
      },
      scroY:{
        type:Number,
        default:0
      },
      flagNum:{
        type:Number,
        default:0
      },
      probeType: {
        type: Number,
        default: 3
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      pulldown: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      pullingDown:{
        type:Boolean,
        default: true
      }
    },
    data(){
      return{
        scrolly:0,
        flag:false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
        })

        if (this.listenScroll) {

          let me = this
          this.scroll.on('scroll', (pos) => {
            this.scrolly = Math.abs(pos.y)
            me.$emit('scroll', pos)
          })
        }

        if (this.pulldown) {

          //监听即将滚动到底部，监听此事件即可
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              if(this.loading === 1){
                this.$store.commit('study_pulldown',true)
                this.$store.commit('execute_method',true)
              }
              if(this.flagNum === 3){
                this.$store.commit("change_laugh",true)
              }else {
                this.$store.commit('change_downloading',1)
              }

              this.$emit('scrollToEnd')
            }
          })
        }
        if (this.pullup) {
          //监听即将滚动顶部，监听此事件即可

          this.scroll.on('scrollEnd', () => {
            if (Math.abs(this.scroll.y) <= (this.scroll.minScrollY)) {
              this.$store.commit('change_uploading',1)
              this.$emit('scrollToEnd')
            }
          })
        }
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      },
      scrolly(value) {

        if( this.flagNum === 1 && value / 2 > this.scroY){
            console.log(value)
            this.$store.commit('loading_vague_flag',true)
            this.$store.commit('loading_vague',this.flagNum)
        }

        if (this.flagNum === 2 && value / 2 < 25) {
          this.$store.commit('change_showstate', false)
        }else if(this.flagNum === 2){
          this.$store.commit('change_showstate',true)
        }
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
