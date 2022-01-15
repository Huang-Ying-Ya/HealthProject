import {reqBannerList} from '../api/index'
import data from '../mock/banner.json'
//home模块的仓库
const state=()=>({
    //轮播图的数据
    bannerList: [],
})

//mutations是唯一修改state的地方
const mutations={
    GETBANNERLIST(state,bannerList) {
        state.bannerList=bannerList
    }
}

//action是用户处理派发action的地方，可以书写异步语句、逻辑的地方
const actions={
    //获取首页轮播图的数据
    async getBannerList({commit}) {
        let result=await reqBannerList()
        if(result.code===200) {
            commit('GETBANNERLIST',result.data)
        }
    }
}

const getters={}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}