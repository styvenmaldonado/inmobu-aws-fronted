const BuildPurgeCSS = require('../../lib/BuildPurgeCSS')
const { cssAmp } = require('./cssAmp')

const routes = cssAmp()

routes.forEach(route => { new BuildPurgeCSS(route)})
