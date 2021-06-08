import Search from './containers/Search.jsx'
import Blog from './containers/Blog.jsx'
import Login from './containers/Login.jsx'


const RoutesPWA = [
  {
    path: '/co/search',
    component: Search
  },
  {
    path: '/co/login',
    exact: true,
    component: Login,
  },
  {
    path: '/co/blog',
    exact: true,
    component: Blog,
  },
];

export default RoutesPWA;
