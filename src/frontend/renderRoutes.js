
const Routes = require('./Routes.js')
const Router = require('../../lib/Router')
const UserAgentSwitcher = require('../../lib/UserAgentSwitcher')

const countries = ['co', 'es', 'en']
const categories = ['casa', 'apartamento', 'oficina']
const offers = ['venta', 'arriendo']



const renderRoutes = (req) => {
  const routes = new Router(req)
  const userAgent = req.headers['user-agent']
  const { isMobile } = new UserAgentSwitcher(userAgent)
  const params = routes.useParams()
  const categoriesParams = Router.extractKeys(params ,categories) 
  const offerParams = Router.extractKeys(params ,offers) 
  const props = { categoriesParams, offerParams, params, query: routes.query, url: routes.url}
  const serverRoutes = Routes(props)
  const path = () => {
    if(!params[0])  return serverRoutes.find(route => route.path === '/')
    if(params[0].length <=3 &&  countries.includes(params[0])){
          let countryCode = serverRoutes.find(r => r.path === '/:countryCode')
          if(params.length >= 2 ) return countryCode.routes.find(x => x.path === ('/'+params[1]))
          else return serverRoutes.find(route => route.path === '/:countryCode')
    }
    if(params[0].length >= 4 && serverRoutes.find(route => route.path === ('/'+ params[0]))) return serverRoutes.find(route => route.path === ('/'+ params[0]))
    else return serverRoutes.find(route => route.default == true)
  }
  const { component , pwa , dynamicServing} = path()
 return {component,pwa, isMobile, dynamicServing}
}





//   const { component } = serverRoutes.find(route => {
//       if(!params[0]) return route.path === '/';
//       if(params[0].length <=3 &&  countries.includes(params[0])){
//         if(params.length > 1 && route.routes) return route.routes.find(r => r.path === ('/'+params[1])) && true
//         else return route.path === '/:countryCode'
//       }
//       if(params[0].length >= 4 && route.path === ('/'+ params[0])) return route.path === ('/'+ params[0])
//       else return route.default === true
//   })
//  return component
// }

module.exports = renderRoutes;

