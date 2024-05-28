import {defineStore} from 'pinia'


export const useUserStore=defineStore('user',{
    state:()=>({
        posts:[],
        isLogoutOverlay:false,
        isMenuOverlay:false,
    })
})