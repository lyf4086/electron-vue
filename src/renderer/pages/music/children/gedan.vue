<template>
    <div class="wrap">
        <div class="title">全部歌单</div>
        <!-- <div class="item" v-for="(item,index) in list" :key="index" >
            <img v-lazy="item.picUrl" alt="">
            <p>{{item.name}}</p>
        </div> -->
        <router-link tag="div" class="item" v-for="(item,index) in list" 
        :key="index" :to="{name:'TuijianXQ',query:{id:item.id}}">
            <img v-lazy="item.picUrl" alt="img">
            <p>{{item.name}}</p>
        </router-link>
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
            this.$http.get(`${baseURL}/personalized`).then(res=>{
                if(res.data.code==200){
                    // console.log(res)
                    this.list=res.data.result

                }
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
    width:19%;
    margin-bottom: 5px;
    cursor: pointer;
    img{
        width: 100%;
    }
    p{
        line-height: 30px;
   
    }
}
</style>