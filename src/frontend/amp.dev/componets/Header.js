const renderSaas = require('../renderSaas')

const Header = () => {
    return(` <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Hello, AMPs</title>
    <link rel="canonical" href="https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup/">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta property="og:title" content="Fusagasugá, Cundinamarca, Colombia"/><meta property="og:description" content="Casa quinta fusagasuga via al cub el bosquem2 de terreno y 130 m2 de construcción circuito cerrado de tv vigilancia las 24 horas conjunto cerrado 4 habitaciones la principal con baño dos baños auxiliares cocina semi integral piscina propia 50 m2 parque infantil zonas verdes arboles frutales precio 550.000.000 recibo casa en bogota estrato 3 de área 7x20 de fondo como mínimo para remodelar.
"/><meta property="og:type" content="article"/><meta property="og:url" content="https://conexionjs.com.co/property/finca-en-venta-fusagasuga/"/><meta property="og:site_name" content="Conexion JS Inmobiliaria SAS"/><meta property="og:image" content="https://conexionjs.com.co/wp-content/uploads/2020/02/FINCA-4-536x370.jpeg"/>
    <style amp-custom>
    ${
      renderSaas('../../assets/Layout.scss'
     )}
    </style>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
  </head>`)
}

export default Header;