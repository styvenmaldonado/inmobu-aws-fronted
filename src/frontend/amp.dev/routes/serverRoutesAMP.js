import Layout from '../componets/Layout'
import Home from '../containers/Home'
import Search from '../containers/Search'


const serverRoutesAMP = (props) => {
  return [
    {
      path: '/',
      component: Layout(props)
    }
    ,
    {
      path: '/:countryCode',
      component: Home(props),
      routes: [
        {
          path: '/details',
          component: Layout(props)
        },
        {
          path: '/search',
          component: Search(props)
        },
        {
          path: '/login',
          component: Search(props)
        },
        {
          path: '/blog',
          component: Search(props)
        }

      ]
    },   
    {
      path: '/:keyword1',
      component: Layout(props),
      routes: [
        {
          path: "/:k",
          component: Layout(props),
          
        }
      ]
    },
    {
      default:true,
      component: '<h1>404 Error</h1>',
    },

  ];
}


export default serverRoutesAMP;
