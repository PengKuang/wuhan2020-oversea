import Vue from 'vue'
import VueRouter from 'vue-router'

import SubmitInfo from '../components/SubmitInfo'
import PassengerSearch from '../components/PassengerSearch'
import InfoProvider from '../components/InfoProvider'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const routes = [
    {path: '/InfoProvider', component: InfoProvider},
    {path: '/PassengerSearch', component: PassengerSearch},
    {path: '/', component: PassengerSearch},
    {path: '/SubmitInfo', component:SubmitInfo},
    {path: '*', component:NotFound}
]

export default new VueRouter({
    mode: 'history',
    routes
})