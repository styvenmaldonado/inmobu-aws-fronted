import React from 'react'
import { StaticRouter } from  'react-router-dom'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import RoutesPWA from './RoutesPWA'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/'


const setResponse = (req,html) => {
  const helmet = Helmet.renderStatic();
   let h = `  
   <!DOCTYPE html>
   <html lang="es">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <meta charset="utf-8" />
       ${helmet.title.toString()}
       ${helmet.style.toString()}
     </head>
     <body>
       <div id="app">${html}</div>
       <script src="/assets/bundle.js" type="text/javascript"></script>
     </body>
   </html>
   ` 
   let j = h.replace(/\n/g, "").replace(/[\t ]+\</g, "<").replace(/\>[\t ]+\</g, "><").replace(/\>[\t ]+$/g, ">")
    return j
}



const setResponsePWA =  (req) => {
  const store = createStore(reducers, {});
  
   const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
          {renderRoutes(RoutesPWA)}
      </StaticRouter>
     </Provider> 
  )
  return setResponse(req, html)
 
}

module.exports = setResponsePWA