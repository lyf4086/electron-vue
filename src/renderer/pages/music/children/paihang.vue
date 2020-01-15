<template>
    <div class="wrap">
        <div class="title">全球榜单</div>
        <div class="item" v-for="(item,index) in list" @click="toXiangqing(item)" :key="index">
            <img v-lazy="item.coverImgUrl" alt="">
            <p>{{item.name}}</p>
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
            this.$http.get(`${baseURL}/toplist`).then(res=>{
                if(res.data.code==200){
                    this.list=res.data.list
                }
            })
        },
        toXiangqing(item){
           
            this.$router.push({
                name:'PaihangXQ',
                query:{id:item.id}
            })
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.title{
    width: 100%;
    line-height: 40px
}
.item{
    width:24%;
    max-width: 158px;
    height:200px;
    margin-bottom: 5px;
    
    img{
        width: 100%;
    }
    p{
        line-height: 30px;
        text-align: center;
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
}
</style>