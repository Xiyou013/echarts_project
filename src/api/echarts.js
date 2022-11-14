import axios from '@/axios/http';

export function getlistData() {
    // return axios.get('/test')
    return axios({
        url: '/list',
        method: 'get'
    })
}

export function getOneData() {
    // return axios.get('/test')
    return axios({
        url: '/oneecharts',
        method: 'get'
    })
}

export function getTwoData() {
    // return axios.get('/test')
    return axios({
        url: '/twoecharts',
        method: 'get'
    })
}

export function getThreeData() {
    // return axios.get('/test')
    return axios({
        url: '/threeecharts',
        method: 'get'
    })
}

export function getMeauList() {
    // return axios.get('/test')
    return axios({
        url: '/meauList',
        method: 'get'
    })
}

export function getPersonList() {
    // return axios.get('/test')
    return axios({
        url: '/personList',
        method: 'get'
    })
}

export function getTypeList() {
    // return axios.get('/test')
    return axios({
        url: '/typeList',
        method: 'get'
    })
}