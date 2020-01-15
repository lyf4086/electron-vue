<template>
    <div id="map">
        <!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
        <button @click="btnClick">按钮</button>
    </div>
</template>
<style scoped>
#map{
    width:100%;
    height:100%;
    /* background: pink; */
}
</style>
<script>
let fs=require('fs')
let path=require('path')
let {remote,ipcRenderer}=require('electron')
export default {
    methods:{
        btnClick(){
        //    ipcRenderer.send('renderClick')
        //   console.log(this.$electron)
        //   remote.shell.beep()
        //   remote.shell.openExternal('www.baidu.com')
            // fs.readFile('package.json',(err,data)=>{
            //     if(err){
            //         console.log(err)
            //         return
            //     }
            //     console.log(data.toString())
            // })
            console.log(this.$db)
        }
    },
    mounted(){
        
        // var template=[
        //     {
        //         label:"文件",
        //         submenu:[
        //             {
        //                 label:'11111'
        //             }
        //         ]
        //     },
        //     {
        //         label:"编辑"

        //     }
        // ]
        // var m=remote.Menu.buildFromTemplate(template)
        // remote.Menu.setApplicationMenu(m)
    }
}
</script>