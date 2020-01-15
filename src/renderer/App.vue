<template>
  <div id="app">
    <div class="header" v-show="false">
      
      <button @click="closeClick">关闭</button>
      <button @click="bigClick">最大化</button>
      <button @click="minClick">最小化</button>
      <div class="btnwrap">
        <i class="el-icon-caret-left" @click="goback"></i>
        <i class="el-icon-caret-right" @click="gonext"></i>
      </div>
    </div>
    <div class="content">
      <LeftBox></LeftBox>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="routerview"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" class="routerview"></router-view>
    </div>
    <Footer v-show="isMusic" :isMusic="isMusic"></Footer>
    <Cover v-show="!isMusic"></Cover>
  </div>
</template>

<script>
import LeftBox from './components/left-box'
import Footer from './components/footer'
import Cover from './components/cover'
  export default {
    name: 'vue-app',
    components:{LeftBox,Footer,Cover},
    computed:{
      isMusic(){
        return this.$store.state.Counter.isMusic
      }
    },
    methods:{
     goback(){

       this.$router.go(-1)
     },
     gonext(){
       this.$router.go(1)
     },
      minClick(){
        this.$electron.ipcRenderer.send('minClick')
      },
      bigClick(){
        this.$electron.ipcRenderer.send('bigClick')
      },
      closeClick(){
        this.$electron.ipcRenderer.send('btnClose')
      }
    },
    mounted(){
     
      
    }
  }
</script>

<style lang="less">
  /* CSS */
  *{
    margin:0;
    padding:0
  }
  #app{
    position: relative;
    width:100vw;
    height:100vh;
    
  }
  .header{
   position: fixed;
   top:0;
   left:0;
    box-sizing: border-box;
    width:100%;
    height:30px;
    -webkit-app-region:drag;
    display: flex;
    flex-direction: row-reverse;
  }
  .btnwrap{
    width:50px;
    height:100%;
    margin-right: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    -webkit-app-region:no-drag;
  }
  .header button{
    -webkit-app-region:no-drag;
    margin:0 20px;
  }
  .content{
    width:100%;
    height:100%;
    box-sizing: border-box;
    // padding-top:30px;
    padding-bottom:60px;
    display: flex;
  }
  .routerview{
    box-sizing: border-box;
    background: lightblue;
    width:100%;
    height:100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .routerview::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}

.routerview::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(63, 4, 173, 0.5);
  background: rgba(34, 3, 117, 0.8);
}

.routerview::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(221, 213, 213, 0.6);
}
  .footer{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height:60px;
  }
  .cover{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height:60px;
  }
</style>
