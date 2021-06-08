const fs = require('fs')
const { join } = require('path')

class RenderCSS {
     static render(components){
        let manifest =   fs.readFileSync(join(__dirname, '../src/frontend/amp.dev/assets/manifestCSSamp.json',),'utf-8')
        let manifestObject =  JSON.parse(manifest)
        let purgeCSS

        components && components.forEach(element => {
            let c = manifestObject.find(c => c.component === element)
            let css = fs.readFileSync(join(__dirname,'../public/assets/css/'+c.path))
            components.length > 1 ? purgeCSS += css : purgeCSS = css
        });
        return purgeCSS.toString()
    }
}

module.exports = RenderCSS;
