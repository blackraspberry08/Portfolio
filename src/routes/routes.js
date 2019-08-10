const Home = () => import('@/views/Home')
const InProgress = () => import('@/views/SitePages/InProgress')

export default [
  {
    name: 'Home',
    path: '/',
    component: InProgress
    // component: Home
  }
]