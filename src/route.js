import Home from "./components/Home.vue"
import User from "./components/user/User.vue"
import UserDetail from "./components/user/UserDetails.vue"
import UserEdit from "./components/user/UserEdit.vue"
import UserStart from "./components/user/UserStart.vue"
export const routes = [{
    path: '',
    component: Home,
    name: "home"
  },
  {
    path: '/user',
    component: User,
    children: [{
        path: '',
        component: UserStart
      },
      {
        path: '/user/:id',
        component: UserDetail
      },
      {
        path: '/user/:id/edit',
        component: UserEdit
      }, {
        path: ""
      }
    ]
  }





]
