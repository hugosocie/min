//
// Import dependencies
// ==========================================================================

import Vue from 'vue';
import '@styles/main.scss';

import VueRouter from 'vue-router';
import Routes from '@root/routes';

import Vuex from 'vuex';
import Store from '@root/store';


//
// Create Router
// ==========================================================================

Vue.use( VueRouter );

const router = new VueRouter( {
  mode: 'history',
  routes: Routes,
} );


//
// Create Store
// ==========================================================================

Vue.use( Vuex );

const store = new Vuex.Store( Store );


//
// Create & Mount App
// ==========================================================================

new Vue( {
  router,
  store,
} ).$mount( '#app' );
