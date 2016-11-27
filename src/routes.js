import Home from './views/Home'
import Login from './views/Login'
import Doc from './components/Doc'

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    children: [
      {
        name: 'doc',
        path: 'docs/:group/:path',
        component: Doc
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]
