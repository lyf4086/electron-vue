<template>
    <div class="wrap">
        <div class="title">全部新歌</div>
        <div class="item" v-for="(item,index) in list" :key="index" @dblclick="toPlay(item)">
            <span>{{index+1}}</span>
            <img v-lazy="item.album.blurPicUrl" alt="">
            <div class="str1">{{item.name}}</div>
            <div class="str2"></div>
            <div class="str3"></div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    methods:{
        getData(){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/top/song`).then(res=>{
                if(res.data.code==200){
                    this.list=res.data.data

                }
            })
        },
        toPlay(item){
            let {id,name}=item
            this.$store.dispatch('getUrl',{id,name})
            
        }
    },
    created(){
        this.getData()
    }
}
</script>
<style lang="less" scoped>
.wrap{
    width:100%;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
}
.title{
    width: 100%;
    line-height: 40px
}
.item{
    width:100%;
    height:50px;
    margin-bottom: 1px;
    padding:5px 0;
    cursor: pointer;
    display: flex;
    text-align: center;
    line-height: 50px;
    span{
        flex:1
    }
    img{
        height:100%
    }
    .str1{
         flex: 5
    }
    .str2{
         flex: 5
    }
    .str3{
         flex: 1
    }
    
}
.item:nth-child(odd){
    background: rgba(221, 218, 218,0.2)
}
.item:hover{
    background: rgba(221, 218, 218,0.5)
}
</style>