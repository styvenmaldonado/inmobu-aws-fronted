const { PurgeCSS } = require('purgecss')
const fs = require('fs')
const { join } = require('path')


class BuildPurgeCSS {
    constructor({component,content, outputFilename}){
        this.build(component, content, outputFilename)
        this.filename
     

    }
     build(component, content, outputFilename){
     new PurgeCSS().purge({
            content: content,
            css: ['**/style.css'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            keyframes: true
          })

        .then( data => {
            this.filename = outputFilename+'.'+this.UUID()+'.css'
            fs.writeFile('public/assets/css/'+this.filename,data[0].css, (err) => {
                if(err) console.log(err)
                this.createManifestJSON(component)
            })
            
        })
    }
    UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
    createManifestJSON(component){ 
       let manifest =   fs.readFileSync(join(__dirname, '../src/frontend/amp.dev/assets/manifestCSSamp.json',),'utf-8')
       let manifestObject =  JSON.parse(manifest)
       let c = manifestObject.filter(c => c.component !== component)
       c.push({component,path:this.filename}) 
       let data = JSON.stringify(c)
       fs.writeFileSync('src/frontend/amp.dev/assets/manifestCSSamp.json', data )
    }
    

}

module.exports = BuildPurgeCSS 