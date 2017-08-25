import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyList from '@/components/MyList'
import Login from '@/components/Login'
import Markdown from '@/components/Markdown'
import Github from '@/components/Github'
import SearchGrid from '@/components/SearchGrid'


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
    },
     {
      path: '/markdown',
      name: 'Markdown',
      component: Markdown
    },
    {
      path: '/github',
      name: 'Github',
      component: Github
    },
    {
      path: '/searchGrid',
      name: 'SearchGrid',
      component: SearchGrid
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
