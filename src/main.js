import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {
  routes
} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

// router.beforeEnter((to, from, next) => {
//   console.log("before Each");
//   next(false)
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
