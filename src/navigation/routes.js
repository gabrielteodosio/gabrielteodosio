import LoginPage from '../pages/login'

const routes = [
  {
    path: '/',
    exact: true,
    layout: false,
    private: false,
    component: LoginPage
  },
  {
    path: '/login',
    exact: true,
    layout: false,
    private: false,
    component: LoginPage
  }
]

export default routes
