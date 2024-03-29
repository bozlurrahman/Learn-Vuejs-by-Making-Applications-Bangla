// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.$ = window.jQuery = require('jquery');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

import VueRouter from 'vue-router';

import { routes } from "./router/index";

Vue.use(VueRouter);
const router = new VueRouter({
  routes
})

import Vuex from "vuex";
Vue.use(Vuex)
import { storage } from "./store/index";
const store = new Vuex.Store(storage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
