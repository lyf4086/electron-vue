<template>
    <div class="footer">
        <div class="name">{{playName}}</div>
        <div class="btns">
            <i class="el-icon-d-arrow-left" title="功能未完善" @click="prev"></i>
            <i class="el-icon-video-play" v-show="paused" @click="changState"></i>
            <i class="el-icon-video-pause" v-show="!paused" @click="changState"></i>
            <i class="el-icon-d-arrow-right" title="功能未完善" @click="next"></i>
            
        </div>
        <div class="slider">
            <span>{{currentTime}}</span>
            <el-slider v-model="value1" class="s" :step='step1' :max="sliderMax1" ></el-slider>
            <span>{{max}}</span>
        </div>
        <div class="yinliang">
            <i class="el-icon-service"></i>
            <el-slider class="s" v-model="value2" @change="changeyinliang" :max="sliderMax2" ></el-slider>
        </div>
        
        <audio id="audio" @playing="playing" :src="playUrl"></audio>
        
    </div>
</template>
<script>
export default {
    props:{
        isMusic:{
            type:Boolean
        }
    },
    data(){
        return {
            audio:null,
            playUrl:'',
            step1:1,
            max:'00:00',
            value1:0,
            value2:20,
            paused:false,
            currentTime:'00:00',
            sliderMax1:0,
            sliderMax2:30
        }
    },
    computed:{
       playID:{
           get(){
                return this.$store.state.Counter.playID
            }
       },
        playName:{
            get(){
                return this.$store.state.Counter.playName
            }
            
        }
    },
    watch:{
        playID(){
            this.changeAudio()
        },
        isMusic(){
            this.audio.pause()
        }
    },
    methods:{
        changeyinliang(e){
            console.log(e)
        },
        playing(){
            console.log('ksihai')
            let duration=this.audio.duration
            this.sliderMax1=parseInt(duration)
            let M=parseInt(duration/60)
            let S=parseInt(duration%60)
            M=M>=10?M:'0'+M
            S=S>10?S:'0'+S
            this.max=M+':'+S
            setInterval(()=>{
                let t=this.audio.currentTime
                this.value1=parseInt(t)
                let currentM=parseInt(t/60)
                let currentS=parseInt(t%60)
                currentM=currentM>=10?currentM:'0'+currentM
                currentS=currentS>=10?currentS:'0'+currentS
                this.currentTime=currentM+':'+currentS
            },1000)
        },
       changeAudio(){
           let src=this.$store.state.Counter.playUrl
            this.audio.src=src
            this.audio.play()

       },
       prev(){
           console.log(this.audio.currentTime)
       },
        changState(){
            if(this.audio.paused){
                let src=this.$store.state.Counter.playUrl
                this.audio.src=src
                this.audio.play()
                this.paused=true
            }else{
                this.audio.pause()
                 this.paused=false
            }
        },
         next(){
            
        },
        
    },
    created(){
        
        
    },
    mounted(){
        this.audio=document.getElementById('audio')
       this.$audeo=this.audio
       
    }
}
</script>
<style lang="less" scoped>
.footer{
    width:100%;
    height:60px;
    display: flex;
    background: rgba(75, 152, 241,0.5);
    
    .name{
        width:200px;
        line-height: 60px;
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    
    }
    .btns{
        width:200px;
        box-sizing: border-box;
        padding:10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        i{
            font-size: 30px;
            color: blue;
            cursor: pointer;
        }
        .el-icon-video-play,.el-icon-video-pause{
            font-size: 36px
        }
    }
    .slider{
        width:auto;
        flex: 1;
        display: flex;
        align-items: center;
        .s{
            flex: auto
        }
        span{
            width:60px;
            text-align: center;
           
        }
    }
    .yinliang{
        width:200px;
        box-sizing: border-box;padding-right: 10px;
        display: flex;
        align-items: center;
        i{
            width: 40px;
            text-align: center;
            color:#fff;
            font-size: 30px;
        }
        .s{
            flex:auto;
        }
    }
}
</style>