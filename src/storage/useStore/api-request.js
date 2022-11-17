import axios from "axios";

const baseUrl = 'https://my-json-server.typicode.com/Evg-Smir/example-db/'

export default {
    FETCH_LIST_CATEGORY({commit}) {
        const url = `${baseUrl}category`

        return axios(url, {
            method: 'GET'
        })
            .then((category) => {
                commit('SET_LIST_CATEGORY', category.data)
            })
            .catch((error) => {
                window.alert(error)
            })
    },
    FETCH_LIST_ITEMS({commit}) {
        const url = `${baseUrl}items`

        return axios(url, {
            method: 'GET'
        })
            .then((items) => {
                commit('SET_LIST_ITEMS', items.data)
            })
            .catch((error) => {
                window.alert(error)
            })
    },
}