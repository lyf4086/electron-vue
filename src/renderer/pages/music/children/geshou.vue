<template>
    <div class="wrap-scroll" @scroll="sc">
        <div class="item" v-for="(item,index) in dataList" 
        @click="toXiangqing(item)"
        :key="index">
            <img v-lazy="item.img1v1Url" alt="">
            <p>{{item.name}}</p>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            current:0,
            dataList:[]
        }
    },
    methods:{
        getData(n=0){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/top/artists?offset=${n}&limit=30`).then(res=>{
                if(res.data.code==200){
                    this.dataList=[...this.dataList,...res.data.artists]
                }
            })
        },
       sc(e){
           if(e.srcElement.scrollTop+e.srcElement.offsetHeight==e.srcElement.scrollHeight){
               this.current++
               this.getData(this.current)
           }
           
       },
       toXiangqing(item){
           this.$router.push({
               name:"GeshouXQ",
               query:{id:item.id}
           })
       }
    },
    created(){
        this.getData()
    },
    mounted(){
        
        
    }
}
</script>
<style lang="less" scoped>
.wrap-scroll{
    width:100%;
    height:100%-8vh;
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item{
        width:19%;
        max-width: 150px;
        height:170px;
        margin-bottom: 10px;
        img{
            width:100%;
        }
    }
}
.wrap-scroll::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}

.wrap-scroll::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(63, 4, 173, 0.5);
  background: rgba(34, 3, 117, 0.8);
}

.wrap-scroll::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(221, 213, 213, 0.6);
}
</style>