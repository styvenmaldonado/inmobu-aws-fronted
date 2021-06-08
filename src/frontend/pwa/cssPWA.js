
const cssAmp = () => {
  return [
    {
      component: 'Home',
      content: ['**/amp.dev/containers/Home.js','**/amp.dev/componets/Navbar/**.js','**/amp.dev/componets/Home/**.js'],
      outputFilename: 'home'
    },
    {
      component: 'Search',
      content: ['**/amp.dev/containers/Search.js','**/amp.dev/componets/Navbar/**.js','**/amp.dev/componets/Search/**.js'],
      outputFilename: 'search'
    }
  ]
}

module.exports = { cssAmp }