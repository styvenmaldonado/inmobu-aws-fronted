const Home = require('./amp.dev/containers/Home')
const Search = require('./amp.dev/containers/Search')


const Routes = (props) => {
  return [
    {
      path: '/',
      component: '<h1>Main Page</h1>'
    }
    ,
    {
      path: '/:countryCode',
      component: Home(props),
      routes: [
        {
          path: '/details',
          component: '<h1>404 Error</h1>'
        },
        {
          path: '/search',
          component: Search(props),
          dynamicServing : true,
        },
         {
          path: '/ex',
          pwa:true
        },
        {
          path: '/login',
          pwa: true
        },
        {
          path: '/blog',
          pwa:true,

        }

      ]
    },   
    {
      path: '/:keyword1',
      component: '<h1>Ex</h1>',
      routes: [
        {
          path: "/:k",
          component: '<h1>404 Error</h1>',
          
        }
      ]
    },
    {
      default:true,
      component: '<h1>404 Error</h1>',
    },

  ];
}


module.exports=  Routes;
