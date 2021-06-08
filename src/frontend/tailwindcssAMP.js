const BuildPurgeCSS = require('../../lib/BuildPurgeCSS')
const  {cssAmp}  = require('./amp.dev/cssAmp')


const routesAMP = cssAmp()

routesAMP.forEach(route => { new BuildPurgeCSS(route)})
