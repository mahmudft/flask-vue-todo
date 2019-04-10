import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
