
const Routes = require('./Routes.js')
const Router = require('../../lib/Router')

const countries = ['co', 'es', 'en']
const categories = ['casa', 'apartamento', 'oficina']
const offers = ['venta', 'arriendo']


const renderRoutes = (req) => {
  const routes = new Router(req)
  const params = routes.useParams()
  const categoriesParams = Router.extractKeys(params ,categories) 
  const offerParams = Router.extractKeys(params ,offers) 
  const props = { categoriesParams, offerParams, params, query: routes.query, url: routes.url}
  const serverRoutes = Routes(props)
  const { component } = serverRoutes.find(route => {
      if(!params[0]) return route.path === '/';
      if(params[0].length <=3 &&  countries.includes(params[0])){
        if(params.length > 1 && route.routes) return route.routes.find(r => r.path === ('/'+params[1]))
        else return route.path === '/:countryCode'
      }
      if(params[0].length > 3 && route.path === ('/'+ params[0])) return route.path === ('/'+ params[0])
      else return route.default === true

  })
 return component
}

module.exports = renderRoutes;

