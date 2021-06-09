require('@babel/register')({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});



const express = require('express')
const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const compression = require('compression')
const renderRoutes = require('./src/frontend/renderRoutes')
const dotenv = require('dotenv')
const setResponsePWA = require('./src/frontend/pwa/setResponsePWA')



dotenv.config();

const app = express()
app.use(express.static('public'))
app.use(compression())

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webPackConfig = require('./webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webPackConfig);
  const serverConfig = {
    contentBase: `http://localhost:5000`,
    port: 5000,
    publicPath: webPackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});


app.get('*', async function (req, res, next) {
  try {
    res.header('Content-Type: text/html')
    const { component, pwa, isMobile, dynamicServing } = renderRoutes(req)
   if(dynamicServing){
     if(!isMobile){
         res.status(200).send(setResponsePWA(req))
     }else {
        const ampOptimizer = AmpOptimizer.create()
        const html = await ampOptimizer.transformHtml(component)
        res.status(200).send(html)
     }
   }else {
       if(pwa){
       res.status(200).send(setResponsePWA(req))
    }else {
         const ampOptimizer = AmpOptimizer.create()
        const html = await ampOptimizer.transformHtml(component)
        res.status(200).send(html)
    }
  
   }

  } catch (error) {
    res.status(400).send('<h1>Fatal Error</h1>')
    console.log('Registro de Error', error)
  }
})

app.listen(process.env.PORT || 5000)

console.log(`Server run http://localhost:${process.env.PORT || 5000}`)

module.exports = app;