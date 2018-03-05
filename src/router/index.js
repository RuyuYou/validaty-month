import Vue from 'vue'
import Router from 'vue-router'
import ValidityMonth from '../components/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ValidityMonth',
      component: ValidityMonth
    }
  ]
})
