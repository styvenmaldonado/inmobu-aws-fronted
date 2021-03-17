const RenderCSS = require('../../../../lib/RenderCSS')
const Navbar = require('../componets/Navbar/Navbar')
const NavbarMobil = require('../componets/Navbar/NavbarMobil')
const MainTitle = require('../componets/Home/MainTitle')
const MainSearchBar = require('../componets/Home/MainSearchBar')
const MainButtonsMobil = require('../componets/Home/MainButtonsMobil')

const Home =  (props) => {
  const css = RenderCSS.render(['Home'])
  return (`
  <!DOCTYPE HTML><html amp lang="es-CO">
   <head>
  <style amp-custom>${css}</style>
  <link rel="canonical" href="${props.url}"
     <title>Inmobu.com | Colombia</title>
   </head>
  <body class="font-sans">
            <amp-install-serviceworker data-iframe-src="https://amp.dev/serviceworker.html" src="/assets/serviceworker.js" layout="nodisplay">
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
    <div class="px-5 lg:px-0 lg:pl-16 lg:pt-20 lg:w-full lg:flex lg:h-screen"> 
        <div class="lg:w-9/12 lg:m-auto lg:pb-52 ">
        ${MainTitle()}
        ${MainSearchBar(props)}
        </div>
        <div class="hidden lg:flex w-full ml-32 relative ">
            <amp-img alt="Inmobu.com"  width="1" height="1" layout="fill"
            src="https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></amp-img> 
        </div>
    </div>
    ${MainButtonsMobil()}
  </body>
</html>`)
}

module.exports = Home;