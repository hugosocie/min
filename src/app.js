//
// Import Global dependencies
// ==========================================================================

import Vue from 'vue'
import style from 'STYLES/main.scss'


//
// Create Router
// ==========================================================================

import VueRouter from 'vue-router'
import routes from 'ROOT/routes.js'

Vue.use( VueRouter )

const router = new VueRouter({
  mode: 'history',
  routes: routes
})


//
// Create Store
// ==========================================================================

import Vuex from 'vuex'
import Store from 'ROOT/store.js'

Vue.use( Vuex )

const store = new Vuex.Store( Store );


// 
// Create & Mount App
// ==========================================================================

const app = new Vue( {
  router,
  store
} ).$mount( '#app' )