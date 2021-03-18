const express = require('express')
const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const compression = require('compression')
const renderRoutes = require('./src/frontend/renderRoutes')

const app = express()
app.use(compression())
 

app.get('*', async function (req,res,next) {
    try {
        res.setHeader('Content-Type', 'text/html')
        const ampOptimizer = AmpOptimizer.create()
        const routes = renderRoutes(req)
        const html = await ampOptimizer.transformHtml(routes)
        res.status(200).send(html)
      } catch (error) {
          console.log(error)
      }
})

app.listen(process.env.PORT || 5000)

console.log(`Server run http://localhost:${process.env.PORT || 5000}`)

module.exports = app;