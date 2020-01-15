const state = {
  baseURL:'http://192.168.1.103:3000',
  main: 0,
  playID:'1392990601',//当前播放的歌曲id
  palyName:'我和我的祖国',
  playUrl:'',
  isMusic:true
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  SET_PLAY_ID(state,payload){
    state.playID=payload.id
    state.playName=payload.name
    state.playUrl=payload.url
    state.gTime=payload.gTime
  },
  CHANGE_TYPE(state,payload){
    state.isMusic=payload.isMusic
  },
  SET_URL(state,payload){
    state.baseURL=payload.baseURL
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },

  getUrl({commit,state},payload){
    this._vm.$http.get(`${state.baseURL}/song/url?id=${payload.id}`).then(res=>{
          if(res.data.code==200){
              let {id,url}=res.data.data[0]
              if(url){
                  commit('SET_PLAY_ID',{
                    id:id,
                    url:url,
                    name:payload.name
                  })
                 
                  this._vm.$message({
                    type:"success",
                    message:"开始播放"
                })
              }else{
                this._vm.$message({
                      type:"error",
                      message:"未找到资源"
                  })
              }
              
          }
      })
  
  }
}

export default {
  state,
  mutations,
  actions
}
