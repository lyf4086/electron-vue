<template>
    <div>
         <el-carousel :interval="4000" type="card" height="200px" trigger="click">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
                <img v-lazy="item.imageUrl" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="title">推荐歌单</div>
        <div class="tuijianwrap">
            <router-link tag="div"  class="item" v-for="(item,index) in tuijian" 
            :key="index" :to="{name:'TuijianXQ',query:{id:item.id}}">
                <img v-lazy="item.picUrl" alt="img">
                <p>{{item.name}}</p>
            </router-link>
        </div>
        <div class="title">最新音乐</div>
        <div class="newsong">
            <div class="item1" @dblclick="toPlay(item)" v-for="(item,index) in newsong" :key="index">
                <img v-lazy="item.picUrl" alt="">
                <p>{{item.name}}</p>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            banner:[],
            tuijian:[],
            newsong:[]
        }
    },
    methods:{
        getBanner(){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/banner?type=0`).then(res=>{
                if(res.data.code==200){
                    this.banner=res.data.banners
                }
            })
        },
        getTuijian(){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/personalized?limit=15`).then(res=>{
                if(res.data.code==200){
                    // console.log(res.data.result)
                    this.tuijian=res.data.result
                }
            })
        },
        getNewSong(){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/personalized/newsong`).then(res=>{
                if(res.data.code==200){
                    this.newsong=res.data.result
                }
            })
        },
        toPlay(item){
            let {id,name}=item
            this.$store.dispatch('getUrl',{id,name})
        }
    },
    created(){
        this.getBanner()
        this.getTuijian()
        this.getNewSong()
    }
}
</script>
<style lang="less" scoped>
.el-carousel__item img {
    width:100%;
    height:100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .title{
      width:100%;
      line-height: 30px;
      border-bottom: 1px solid rgb(42, 4, 87);
  }
  .tuijianwrap{
      width:100%;
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(5,1fr);
      grid-template-rows: repeat(3,1fr);
      grid-gap: 6px;
      .item{
          img{
              width:100%;
          }
      }
  }
  .newsong{
      width:100%;
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(5,60px);
      grid-gap: 3px;
      .item1{
          background:rgba(209, 228, 231, 0.6);
          cursor:pointer;
          display: flex;
          justify-content: space-between;
          img{
              width:60px;
          }
          p{
              width:100%;
              text-indent: 10px;
              line-height: 40px
          }
      }
      .item1:hover{
          background: rgba(209, 228, 231, 0.9);
      }
  }
</style>