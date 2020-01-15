<template>
    <div>
        <div class="wrap">
            <video autoplay="true" controls="true" id="video" :src="vsrc"></video>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vidio:null,
            vsrc:''
        }
    },
    methods:{
        getData(id){
            let baseURL=this.$store.state.Counter.baseURL
            this.$http.get(`${baseURL}/mv/detail?mvid=${id}`).then(res=>{
                if(res.data.code==200){
                    // console.log(res.data.data.brs)
                    this.vsrc=res.data.data.brs[240]
                }
            })
        }
    },
    created(){
        this.getData(this.$route.query.id)
    },
    mounted(){
        this.vidio=document.getElementById('vidio')
    }
}
</script>
<style lang="less" scoped>

.wrap{
    width:100%;
    max-width: 1000px;
    margin:0 auto;
    #video{
        width:100%;
    }
}
</style>