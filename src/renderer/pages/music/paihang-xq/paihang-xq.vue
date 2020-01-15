<template>
    <div class="wrap">
        <div class="main">
            <div class="top">
                <img :src="coverImgUrl" alt="">
                <h2>{{name}}</h2>
            </div>
            <div class="list">
                <div class="item" @dblclick="toPlay(item)" v-for="(item,index) in list" :key="index">
                    <span>{{index+1}}</span>
                    <span>{{item.name}}</span>
                    <span>{{item.al.name}}</span>
                    <span>专辑</span>
                    <span>03：33</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            coverImgUrl:'',
            name:'',
            list:[]
        }
    },
    methods:{
        getData(id){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/playlist/detail?id=${id}`).then(res=>{
                if(res.data.code==200){
                    console.log(res)
                    this.coverImgUrl=res.data.playlist.coverImgUrl
                    this.name=res.data.playlist.name
                    this.list=res.data.playlist.tracks
                }
            })
        },
        toPlay(item){
            let {id,name}=item
            this.$store.dispatch('getUrl',{id,name})
        }
    },
    created(){
        this.getData(this.$route.query.id)
    }
}
</script>
<style lang="less" scoped>
.wrap{
    
    .main{
        width:100%;
        max-width: 1000px;
        margin:0 auto;
    }
    .top{
        width:100%;
        height:200px;
        display: flex;
        img{
            height:100%;
        }
    }
    .list{

        .item{
            width:100%;
            height:30px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            span{text-align: center}
            span:nth-child(1){
                flex:1
            }
            span:nth-child(2){
                flex:5
            }
            span:nth-child(3){
                flex:3
            }
            span:nth-child(4){
                flex:3
            }
            span:nth-child(5){
                flex:2
            }
        }
        .item:nth-child(odd){
            background: rgb(196, 212, 223)
        }
    }
}
</style>