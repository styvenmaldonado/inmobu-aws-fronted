const FocusSidebarSearchMobil = require('./FocusSidebarSearchMobil')

const MainSearchBar = () => {
    return `
        <div class="hidden lg:flex items-center h-16  w-full shadow-md  rounded-lg  border border-gray-100 mt-5">

      

            <div class="w-full  m-5">

                


                <div class="font-bold text-xs">Ciudad,sector o barrio</div>
                <div> <input on="input-throttled:AMP.setState({textSearch: event.value }); focus:AMP.setState({focus:1})" class="inputfocus bg-transparent w-full" placeholder="¿Dónde buscas?"/></div> 
                
          
                <div class="hidden" [class]="textSearch.length > 0 && 'dropdown absolute shadow-md mt-10 rounded-lg  w-2/5 left-16' ">
              
          

                        <div class="block" [class]="textSearch.length > 3 ? 'hidden' : 'block w-full'">


      
                                <button class="w-full" > 
                                <div class="flex items-center h-10  w-full hover:bg-gray-100 px-4">
                                  <div style="padding-right: 10px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" style="height:15px" viewBox="0 0 512 512">
                                          <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                                    </svg>
                                  </div>
                                  <div class="flex items-baseline"> 
                                    <div class="text-left text-sm leading-4 pr-1">Localiza los inmuebles más cercanos</div>
                                  </div>
                                </div>
                              </button> 
                 
             


                    

                      
                        </div>

                      

                            <div class="hidden" [class]="textSearch.length > 3 ? 'block' : 'hidden'">
                              <amp-list items="predictions" layout="fixed" class="w-full h-52 "
                                  src=""
                                  [src]="'https://rjb20zmcaa.execute-api.us-east-1.amazonaws.com/dev/hello?input=' + textSearch "
                                  class="w-full"
                                  >
                                <template type="amp-mustache">
                                  <a target="_top" href="search?main_text={{structured_formatting.main_text}}&secondary_text={{structured_formatting.secondary_text}}"> 
                                    <div class="flex items-center h-10  w-full hover:bg-gray-100 px-4">
                                      <div style="padding-right: 10px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="height:15px" viewBox="0 0 512 512">
                                              <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                                        </svg>
                                      </div>
                                      <div class="flex items-baseline"> 
                                        <div class="text-left text-sm leading-4 pr-1">{{{structured_formatting.main_text}}},</div>
                                        <div class="text-left text-gray-500 text-xs font-light">{{{structured_formatting.secondary_text}}}</div>
                                      </div>
                                    </div>
                                  </a> 
                                </template>
                              </amp-list>
                            </div>


                                </div> 
                
                            </div>

        

            <button class="flex items-center font-bold bg-blue-500 rounded-lg px-5 py-2 ml-10 mr-5 text-white">
            <svg style="height:15px;fill:#fff" viewBox="0 0 515.558 515.558"
                    xmlns="http://www.w3.org/2000/svg">
                   <path
                d="M378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333C418.889 93.963 324.928.002 209.444.002S0 93.963 0 209.447s93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564L378.344 332.78zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
             </svg>
            <div class="pl-3">Buscar</div>
            </button>
        </div>







        <div class="flex items-center lg:hidden w-full h-12 shadow-md rounded-lg border border-gray-200 my-6">
            <div class="px-3">
            <svg style="height:15px;fill:#000" viewBox="0 0 515.558 515.558"
            xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333C418.889 93.963 324.928.002 209.444.002S0 93.963 0 209.447s93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564L378.344 332.78zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
            </svg>
            </div>
            <input on="tap:quote-lb" class="w-full font-medium text-black" placeholder="Ciudad, sector, dirección, codigo postal"/>
        </div>

        ${FocusSidebarSearchMobil()}
    `
}

module.exports = MainSearchBar;