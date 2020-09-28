import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    city:'上海'
}

export default new Vuex.Store({
    state,
    mutations:{
        changeCity(state,city) {
            state.city = city;
        }
    }
})