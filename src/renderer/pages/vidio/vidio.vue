<template>
    <div>
        <div class="wrap">
           
            <div class="list">
                <div class="item" @click="toBofang(item)" v-for="(item,index) in list" :key="index" >
                    <img :src="item.cover" alt="">
                    <p>{{item.name}}</p>
                </div>
                
            </div>
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
        getShipin(){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/mv/first?limit=60`).then(res=>{
                if(res.data.code==200){
                    this.list=res.data.data
                }
            })
        },
       toBofang(item){
           this.$router.push({
               name:"VidioXQ",
               query:{
                   id:item.id
               }
           })
       }
    },
    created(){
        this.getShipin()
        this.$store.commit('CHANGE_TYPE',{
            isMusic:false
        })
    }
}
</script>
<style lang="less" scoped>
.wrap{
    width:100%;
    max-width: 1000px;
    margin:0 auto;
    .nav{
        box-sizing: border-box;
        padding:0 200px;
        width: 100%;
        height:30px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }
    .list{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .item{
            width:230px;
            margin-bottom: 5px;
            img{
                width:100%
            }
            p{
                line-height: 30px;
                text-align: center;
            }
        }
    }
}
</style>