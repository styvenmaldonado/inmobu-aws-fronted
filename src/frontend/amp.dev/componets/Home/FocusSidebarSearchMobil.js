const FocusSidebarSearchMobil = () => {
  return `
    <amp-lightbox id="quote-lb" layout="nodisplay">
      <div class="p-4 w-screen h-screen bg-white absolute top-0 left-0">
        <div class="flex items-center border-b border-gray-200 pb-2">
          <button on="tap:quote-lb.close" class="bg-transparent border-0 pr-1"> 
          <svg class="h-7 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
          </button>
          <input class="w-full" on="input-throttled:AMP.setState({myCircle: event.value})"autofocus/>
       </div>
       <amp-list  items="predictions" layout="fixed" class="w-full h-full"
       src=""
       [src]="'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + myCircle +'&types=geocode&components=country:co&key=AIzaSyCo4QWsfxnSPFCc7jsdGLQHpOChd7M4csI'"
       class="w-full"
       >
            <template type="amp-mustache">
                <a target="_top" href="./search?main_text={{structured_formatting.main_text}}&secondary_text={{structured_formatting.secondary_text}}" class="flex items-center bg-transparent border-0 h-16 w-full">
                  <div style="padding-right: 10px;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="height:15px" viewBox="0 0 512 512">
                          <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                    </svg>
                  </div>
                  <div> 
                    <div class="text-left leading-4">{{{structured_formatting.main_text}}}</div>
                    <div class="text-left text-gray-500 font-light">{{{structured_formatting.secondary_text}}}</div>
                  </div>
                </a>
            </template>
         </amp-list>
      </div>
    </amp-lightbox>
    `
}

module.exports = FocusSidebarSearchMobil;