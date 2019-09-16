import Home from "./components/Home.vue"
import User from "./components/user/User.vue"
import UserDetail from "./components/user/UserDetails.vue"
import UserEdit from "./components/user/UserEdit.vue"
import UserStart from "./components/user/UserStart.vue"
export const routes = [{
    path: '',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/user-detail/:id',
    component: UserDetail
  },
  {
    path: '/user-edit',
    component: UserEdit
  },
  {
    path: '/user-start',
    component: UserStart
  }


]
