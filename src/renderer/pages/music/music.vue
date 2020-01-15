<template>
    <div class="wrap">
        <div class="nav">
           
            <router-link to="/music/tuijian" tag="span">推荐</router-link>
            <router-link to="/music/paihang" tag="span">排行</router-link>
            <router-link to="/music/xinge" tag="span">新歌</router-link>
            <router-link to="/music/geshou" tag="span">歌手</router-link>
            <router-link to="/music/gedan" tag="span">歌单</router-link>
        </div>
        <router-view  class="faxian"></router-view>
        
    </div>
</template>
<style lang="less" scoped>
@import url('./music.less');
</style>
<script>
export default {
    
    mounted(){
        
    },
    activated(){
        this.$store.commit('CHANGE_TYPE',{
            isMusic:true
        })
    }
}
</script>