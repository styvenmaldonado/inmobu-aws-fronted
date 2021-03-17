
const cssAmp = () => {
  return [
    {
      component: 'Home',
      content: ['**/amp.dev/containers/Home.js','**/amp.dev/componets/Navbar/**.js','**/amp.dev/componets/Home/**.js'],
      outputFilename: 'home'
    },
  ]
}

module.exports = { cssAmp }