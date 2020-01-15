<template>
    <div>
        <div class="wrap">
            <div class="putwrap">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button @click="setIP" type="primary">设置接口地址</el-button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.wrap{
    width:100%;
    max-width: 1000px;
    margin:0 auto;
    .putwrap{
        width:100%;
        display: flex
    }
}
</style>
<script>
export default {
    data(){
        return{
            input:''
        }
    },
    methods:{
        setIP(){
            if(this.input.trim()==''){
                this.$message({
                    type:"warning",
                    message:"输入不能为空"
                })
                return
            }
            this.$store.commit('SET_URL',{
                baseURL:this.input
            })
            this.$message('设置成功')
        }
    },
    created(){
         this.$store.commit('CHANGE_TYPE',{
            isMusic:false
        })
    }
}
</script>