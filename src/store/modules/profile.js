export default {
    actions: {

    },
    mutations: {
        updateProfile(state, profile) {
            state.profile = profile
        }
    },
    state: {
        profile: {}
    },
    getters: {
        getProfile(state) {
            return state.profile
        }
    },
}