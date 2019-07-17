import Vue from "vue" //引用vue到当前文件中
import Vuex from "vuex" //引用vuex到当前文件夹中
// import axios from "axios"
// 让vue使用vuex
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        arr: []

    }
})