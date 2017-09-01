import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyList from '@/components/MyList'
import Login from '@/components/Login'
import Markdown from '@/components/Markdown'
import Github from '@/components/Github'
import SearchGrid from '@/components/SearchGrid'
import AppendTree from '@/components/AppendTree'
import OlTree from '@/components/OlTree'
import SvgCircle from '@/components/SvgCircle'
import ModalExample from '@/components/ModalExample'
import FlexHeader from '@/components/FlexHeader'
import SelectOpt2 from '@/components/SelectOpt2'


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
      path: '/appendTree',
      name: 'AppendTree',
      component: AppendTree
    },
    {
      path: '/olTree',
      name: 'OlTree',
      component: OlTree
    },
    {
      path: '/svgCircle',
      name: 'SvgCircle',
      component: SvgCircle
    },
    {
      path: '/modalExample',
      name: 'ModalExample',
      component: ModalExample
    },
    {
      path: '/flexHeader',
      name: 'FlexHeader',
      component: FlexHeader
    },
    {
      path: '/selectOpt2',
      name: 'SelectOpt2',
      component: SelectOpt2
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
