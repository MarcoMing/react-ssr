

import { fetchData } from './api'

import Home from './module/home';
import Login from './module/login';
import User from './module/user';


export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    fetchInitialData: () => fetchData()
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/user",
    exact: true,
    component: User,
  }
]
