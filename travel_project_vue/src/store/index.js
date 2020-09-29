import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var defaultCity = '上海';
defaultCity = localStorage.city ;

const state = {
    city:defaultCity
}

export default new Vuex.Store({
    state,
    mutations:{
        changeCity(state,city) {
            localStorage.city = city;
            state.city = city;
        }
    }
})