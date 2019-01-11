//
// Import dependencies
// ==========================================================================

import Vue from 'vue';
import 'STYLES/main.scss';

import VueRouter from 'vue-router';
import Routes from 'ROOT/routes';

import Vuex from 'vuex';
import Store from 'ROOT/store';


//
// Create Router
// ==========================================================================

Vue.use( VueRouter );

const router = new VueRouter( {
  mode: 'history',
  Routes,
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
