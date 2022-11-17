import { changeItem } from "@/assets/scripts/change";

export default {
    SET_LIST_CATEGORY: (state, users) => state.category = users,
    SET_LIST_ITEMS: (state, users) => state.items = users,
    SET_CURRENT_CATEGORY: (state, category) => state.currentCategory = category,

    SET_FILTER_ITEMS: (state, param) => {
        param === 'all'
            ? state.currentItems = state.items
            : state.currentItems = state.items.filter(item => item.category === param)
    },

    SET_NEW: (state, object) => {
        object.param === 'category'
            ? state.category.push(object.info)
            : state.items.push(object.info)
    },

    SET_MODAL: (state, item) => {
        item && (state.currentEdit = item)
        state.stateModal = !state.stateModal
    },

    SET_DELETE_ITEM: (state, item) => {
        if (item.name === 'category') {
            state.category = state.category.filter(category => category.id !== item.item.id)
        } else {
            state.items = state.items.filter(step => step.id !== item.item.id)
            state.currentItems = state.currentItems.filter(step => step.id !== item.item.id)
        }
    },

    SET_CHANGE_ITEM: (state, item) => {
        if (item.name === 'category') {
            state.category = changeItem(item, state.category)
        } else {
            state.items = changeItem(item, state.items)
            state.currentItems = changeItem(item, state.currentItems)
        }
    },

    SET_SORT: (state, param) => {
        switch (param) {
            case 'priceToHigh':
                state.currentItems.sort((previousItem, nextItem) => previousItem.price > nextItem.price ? 1 : -1)
                break
            case 'priceToLow':
                state.currentItems.sort((previousItem, nextItem) => previousItem.price < nextItem.price ? 1 : -1)
                break
            case 'stock':
                state.currentItems.sort((item) => item.availability ? -1 : 1)
                break
        }
    }
}