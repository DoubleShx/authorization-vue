import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.use(VueCookies, { expire: '7d'})

export default new Vuex.Store({
    modules: {
        profile
    }
})