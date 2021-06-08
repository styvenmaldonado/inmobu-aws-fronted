const RenderCSS = require('../../../../lib/RenderCSS')
const Navbar = require('../componets/Navbar/Navbar')
const NavbarMobil = require('../componets/Navbar/NavbarMobil')
const FilterSearch = require('../componets/Search/FilterSearch')
const Map = require('../componets/Search/Map')
const Search =  (props) => {
  const css = RenderCSS.render(['Search'])
  return (`
  <!DOCTYPE HTML><html amp lang="es-CO">
   <head>
  <style amp-custom>${css}</style>
  <link rel="canonical" href=""
     <title>Inmobu.com | Colombia</title>
   </head>
  <body class="font-sans">
            <amp-install-serviceworker  src="/assets/serviceworker.js" layout="nodisplay">
            </amp-install-serviceworker>
            <amp-state id="initialState">
            <script type="application/json">
              {
                "coordinates": {
                  "lat": "0",
                  "lng": "0"
                }
              }
            </script>
          </amp-state>

    ${Navbar()}
    ${NavbarMobil()}
    <div class="lg:h-screen"> 
        ${FilterSearch()}
        <div class="hidden lg:block lg:h-auto" >
            <div style="height: calc(100% - 9rem);" class="w-4/6 absolute" >
               ${Map()}
            </div>
            <div class="w-2/6"></div>
        </div>

    </div>
  </body>
</html>`)
}

module.exports = Search;