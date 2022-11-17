export default {
    FILTER_ITEMS({commit}, param) {
        commit('SET_FILTER_ITEMS', param.name)
        commit('SET_CURRENT_CATEGORY', param.title)
    },

    ADD_NEW: ({commit}, object) => commit('SET_NEW', object),
    CHANGE_STATE_MODAL: ({commit}, item) => item ? commit('SET_MODAL', item) : commit('SET_MODAL'),
    EDIT_ITEM: ({commit}, item) => commit('SET_CHANGE_ITEM', item),
    DELETE_ITEM: ({commit}, item) => commit('SET_DELETE_ITEM', item),
    SORT_ITEM: ({commit}, param) => commit('SET_SORT', param),
}