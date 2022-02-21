const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]
export default routes