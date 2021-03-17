const Home = require('./amp.dev/containers/Home')


const Routes = (props) => {
  return [
    {
      path: '/',
      component: Home(props)
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
          component: '<h1>404 Error</h1>'
        },
        {
          path: '/login',
          component: '<h1>404 Error</h1>'
        },
        {
          path: '/blog',
          component: '<h1>404 Error</h1>'
        }

      ]
    },   
    {
      path: '/:keyword1',
      component: '<h1>404 Error</h1>',
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
