<template>
    <div>
        <div class="wrap">
            <div class="item" @dblclick="toPlay(item)" v-for="(item,index) in list" :key="index">
                <span>{{index+1}}</span>
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getData(id){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/artist/top/song?id=${id}`).then(res=>{
                if(res.data.code==200){
                    console.log(res)
                    
                    this.list=res.data.songs
                }
            })
        },
        toPlay(item){
            let {id,name}=item
            this.$store.dispatch('getUrl',{id,name})
        }
    },created(){
        // console.log(this.$route.query.id)
        this.getData(this.$route.query.id)
    },

}
</script>
<style lang="less" scoped>
    .wrap{
        width:100%;
        max-width: 1000px;
        margin:0 auto;
        .item{
            width:100%;
            height:40px;
            display: flex;
           
            span:nth-child(1){
                flex:1;
                line-height: 40px;
                text-align: center;
            }
            span:nth-child(2){
                line-height: 40px;
                flex:9
            }
        }
         .item:nth-child(odd){
                background: rgb(147, 182, 228);
            }
    }
</style>