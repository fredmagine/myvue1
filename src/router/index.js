import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyList from '@/components/MyList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/myList',
      name: 'MyList',
      component: MyList
    }
  ]
})
