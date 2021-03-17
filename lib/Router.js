const levenshtein = require('fast-levenshtein')

class Router {

  constructor(req) {
    this.params = req.params
    this.query = req.query
    this.location = req.location
    this.url = req.url
  }
    
  useParams() {
    return this.params[0].split("/").filter(param => param)
  }
  
  static extractKeys(params, keys) {
    let keysArray = []
    params.forEach(key => {
      let f = keys.filter(cf => levenshtein.get(cf, key) < 2)
      f.length == !0 && keysArray.push(f[0])
    })

    return keysArray
  }
}

module.exports=  Router;