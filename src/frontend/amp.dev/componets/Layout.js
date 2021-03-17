import i18next from 'i18next'
import i18nAMP from '../../../../public/i18nAMP'



const Layout = (props) => {
 

  i18next.init({
    lng: 'es-CO',
    debug: false,
    resources: i18nAMP('es-CO')
  })
  return (`
  <!DOCTYPE HTML><html amp lang="es-CO">
   <head>
  <style amp-custom>
  </style>
  <link rel="canonical" href="${props.url}">
   </head>
  <body>

  </body>
</html>`)
}
export default Layout;