const FilterSearch = () => {
    return `
<div class="h-auto">
    <form  class="hidden px-5 lg:px-0 lg:pl-16 lg:pt-24 lg:w-full lg:flex lg:pb-4">
        <div class="h-8">
            <div id="filterPropertyInput" class="flex items-center rounded-lg border-2 border-gray-200 h-8">
                <input class="pl-1 mr-auto " value="El Jazmin, Puente Aranda - Bogotá"></input>
                <svg class="h-4 px-2" viewBox="0 0 515.558 515.558"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333C418.889 93.963 324.928.002 209.444.002S0 93.963 0 209.447s93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564L378.344 332.78zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
                </svg>
            </div>

            <div class="hidden">

                <div>
                    <a class="flex align-items-center text-decoration-none item" href="#"
                        style="padding:30px;border-bottom: 1px solid #e9e7e7;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="height:20px" viewBox="0 0 512 512">
                            <path
                                d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                        </svg>
                        <span style="padding-left: 10px;color:#000">El Jazmin, Puente Aranda, Bogotá</span>
                    </a>
                </div>
                <div>
                    <a class="flex align-items-center text-decoration-none item" href="#"
                    style="padding:30px;border-bottom: 1px solid #e9e7e7;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="height:20px" viewBox="0 0 512 512">
                            <path
                                d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                        </svg>
                        <span style="padding-left: 10px;color:#000">El Jazmin, Puente Aranda, Bogotá</span>
                    </a>
                </div>
                <div>
                    <a class="flex align-items-center text-decoration-none item" href="#"
                        style="padding:30px;border-bottom: 1px solid #e9e7e7;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="height:20px" viewBox="0 0 512 512">
                            <path
                                d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                        </svg>
                        <span style="padding-left: 10px;color:#000">El Jazmin, Puente Aranda, Bogotá</span>
                    </a>
                </div>
            </div>



        </div>


        <div class="px-1 h-8">
            <button id="filterPropertyCategoryType"
                class="flex items-center rounded-lg border-2 border-gray-200 h-8">
                <div class="flex items-center px-3">
                    <a class="pr-2">Venta</a>
                    <svg width="10" viewBox="0 0 9 6" fill="none" style="padding-top:0.25rem;color:rgba(30, 58, 138, var(--tw-border-opacity))">
                        <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </div>
            </button>

            <div id="dropdown-filterPropertyCategoryType" class="hidden">
                <fieldset style="border:none;">
                    <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                        <input type="checkbox" id="male" name="gender" value="male" checked>
                        <label for="male" style="padding-left:10px">Venta</label>
                    </div>
                    <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                        <input type="checkbox" id="male" name="gender" value="male">
                        <label for="male" style="padding-left:10px">Arriendo</label>
                    </div>
                    <div style="padding:20px 10px">
                        <input type="checkbox" id="male" name="gender" value="male">
                        <label for="male" style="padding-left:10px">Alquiler</label>
                    </div>

                </fieldset>
            </div>
        </div>




        <div class="px-1 h-8">
            <button id="filterPropertyCategoryType"
            class="flex items-center rounded-lg border-2 border-gray-200 h-8">
            <div class="flex items-center px-3">
                <a class="pr-2">Tipo propiedad</a>
                <svg width="10" viewBox="0 0 9 6" fill="none" style="padding-top:0.25rem;color:rgba(30, 58, 138, var(--tw-border-opacity))">
                    <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
        </button>

            <div id="dropdown-filterPropertyPropertyType" class="dropdown-filterProperty hidden boder-radius-15px">
                <fieldset style="border:none;">
                    <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                        <input type="checkbox" id="male" name="gender" value="male" checked>
                        <label for="male" style="padding-left:10px">Casa</label>
                    </div>
                    <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                        <input type="checkbox" id="male" name="gender" value="male">
                        <label for="male" style="padding-left:10px">Apartamento</label>
                    </div>
                    <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                        <input type="checkbox" id="male" name="gender" value="male">
                        <label for="male" style="padding-left:10px">Oficina</label>
                    </div>
                    <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                        <input type="checkbox" id="male" name="gender" value="male">
                        <label for="male" style="padding-left:10px">Local</label>
                    </div>
                    <div style="padding:20px 10px">
                        <input type="checkbox" id="male" name="gender" value="male">
                        <label for="male" style="padding-left:10px">Oficina</label>
                    </div>

                </fieldset>
            </div>
        </div>

        <div class="px-1 h-8">
            <button id="filterPropertyCategoryType"
            class="flex items-center rounded-lg border-2 border-gray-200 h-8">
            <div class="flex items-center px-3">
                <a class="pr-2">Precio</a>
                <svg width="10" viewBox="0 0 9 6" fill="none" style="padding-top:0.25rem;color:rgba(30, 58, 138, var(--tw-border-opacity))">
                    <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
         </button>

            
            <div id="dropdown-filterPropertyPrice" class="dropdown-filterProperty hidden">
                <div style="padding:30px 30px 5px;">
                    <a class="bold" style="font-size:1.2em">Rango de precios</a>
                </div>
                <div class="flex">
                    <div style="padding:20px 30px;">
                        <input class="bold boder-radius-10px" style="height: 30px;border: 1px solid;padding-left:10px"
                            type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                            onfocusout="displayNone('min-price')" placeholder="Precio min.">
                    </div>
                    <div style="margin:auto">
                        <a>-</a>
                    </div>
                    <div style="padding:20px 30px;">
                        <input class="bold boder-radius-10px"
                            style="height: 30px;border: 1px solid;padding-left:10px;" type="text"
                            id="male" name="gender" onFocus="displayBlock('max-price')"
                            onfocusout="displayNone('max-price')" placeholder="Precio max.">
                    </div>
                </div>
                <div class="flex">
                    <div style="width: 50%;">
                        <div id="min-price" style="list-style: none;padding-bottom: 30px;">
                            <li style="padding:0px 30px 10px 30px;"><button
                                    style="border:none;background:none;font-size:1em">$0+</button></li>
                            <li style="padding:0px 30px 10px 30px;"><button
                                    style="border:none;background:none;font-size:1em">$100.000.000+</button></li>
                            <li style="padding:0px 30px 10px 30px;"><button
                                    style="border:none;background:none;font-size:1em">$200.000.000+</button></li>
                            <li style="padding:0px 30px 10px 30px;"><button
                                    style="border:none;background:none;font-size:1em">$300.000.000+</button></li>
                            <li style="padding:0px 30px 10px 30px;"><button
                                    style="border:none;background:none;font-size:1em">$400.000.000+</button></li>
                            <li style="padding:0px 30px 10px 30px;"><button
                                    style="border:none;background:none;font-size:1em">$500.000.000+</button></li>
                        </div>
                    </div>
                    <div id="max-price" style="list-style: none;padding-bottom: 30px">
                        <li style="padding:0px 30px 10px 30px;"><button
                                style="border:none;background:none;font-size:1em">$0+</button></li>
                        <li style="padding:0px 30px 10px 30px;"><button
                                style="border:none;background:none;font-size:1em">$100.000.000+</button></li>
                        <li style="padding:0px 30px 10px 30px;"><button
                                style="border:none;background:none;font-size:1em">$200.000.000+</button></li>
                        <li style="padding:0px 30px 10px 30px;"><button
                                style="border:none;background:none;font-size:1em">$300.000.000+</button></li>
                        <li style="padding:0px 30px 10px 30px;"><button
                                style="border:none;background:none;font-size:1em">$400.000.000+</button></li>
                        <li style="padding:0px 30px 10px 30px;"><button
                                style="border:none;background:none;font-size:1em">$500.000.000+</button></li>
                    </div>
                </div>
            </div>

        </div>

        <div class="px-1 h-8">
            <button id="filterPropertyCategoryType"
            class="flex items-center rounded-lg border-2 border-gray-200 h-8">
            <div class="flex items-center px-3">
                <a class="pr-2">Habitaciones y Baños</a>
                <svg width="10" viewBox="0 0 9 6" fill="none" style="padding-top:0.25rem;color:rgba(30, 58, 138, var(--tw-border-opacity))">
                    <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
         </button>



            <div id="dropdown-filterPropertyCategoryRoomsBaths" class="dropdown-filterProperty hidden">

                <div class="flex align-items-center" style="padding:20px 30px;border-bottom: 1px solid #e9e7e7">
                    <div style="margin-right: auto;">
                        <a class="bold" style="font-size:1.2em">Habitaciones</a>
                    </div>
                    <div style="padding-left:10px">
                        <button>
                            <a style="font-size:1.6em;margin:auto;">-</a>
                        </button>
                        <a style="padding:0 10px">3</a>
                        <button>
                            <a style="font-size:1.6em;margin:auto">+</a>
                        </button>
                    </div>
                </div>

                <div class="flex align-items-center" style="padding:20px 30px;border-bottom: 1px solid #e9e7e7">
                    <div style="margin-right: auto;">
                        <a class="bold" style="font-size:1.2em">Baños</a>
                    </div>
                    <div style="padding-left:10px">
                        <button>
                            <a style="font-size:1.6em;margin:auto;">-</a>
                        </button>
                        <a style="padding:0 10px">3</a>
                        <button>
                            <a style="font-size:1.6em;margin:auto;">+</a>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <div style="px-1 h-8">

            <button id="filterPropertyCategoryType"
            class="flex items-center rounded-lg border-2 border-gray-200 h-8">
            <div class="flex items-center px-3">
                <a class="pr-2">Más</a>
                <svg width="10" viewBox="0 0 9 6" fill="none" style="padding-top:0.25rem;color:rgba(30, 58, 138, var(--tw-border-opacity))">
                    <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
        </button>



            <div id="dropdown-filterPropertyMore" class="dropdown-filterProperty hidden" style="overflow-y: scroll;">


                <button
                class="flex align-items-center"
                    style="border:none;width:100%; background:none;padding:20px 30px;border-bottom: 1px solid #e9e7e7;"
                    onclick="toogleDisplay(event,'filterPropertyMore-Keyword')">
                    <a class="bold" style="margin-right:auto;font-size: 1.3em;">Palabras Clave</a>
                    <div>
                        <svg width="12" viewBox="0 0 9 6" fill="none" style="padding-left:10px">
                            <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </button>

                <div id="filterPropertyMore-Keyword" class="subdropdown-filterPropertyMore" style="display: block;">
                    <div>
                        <div class="boder-radius-10px" style="margin:20px 30px;width:85%;border: 1px solid;height:auto;">

                            <div class="flex flex-wrap" style="padding:10px 10px;">

                                <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                                    <a style="padding-right: 10px;">Ascensor</a>
                                    <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 294.18 294.18">
                                        <path
                                            d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                            transform="translate(-102.82 -89.55)" /></svg>
                                </button>
                                <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                                    <a style="padding-right: 10px;">Salón de Juegos</a>
                                    <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 294.18 294.18">
                                        <path
                                            d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                            transform="translate(-102.82 -89.55)" /></svg>
                                </button>


                            </div>



                            <div class="flex align-items-center boder-radius-10px" style="width:100%;height: 30px;">
                                <input class="bold boder-radius-10px"
                                    style="height: 28px;padding-left:10px;border:none;width:85%;"
                                    type="text" id="male" name="gender"
                                    onfocus="displayBlock('dropdown-filterPropertyMore-Keyword')"
                                    onfocusout="displayNone('dropdown-filterPropertyMore-Keyword')"
                                    placeholder="Selecciona o busca una palabra clave.">
                                <button style="border:none;background:none">
                                    <svg style="height:15px;" viewBox="0 0 515.558 515.558"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333C418.889 93.963 324.928.002 209.444.002S0 93.963 0 209.447s93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564L378.344 332.78zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
                                    </svg>
                                </button>
                            </div>
                            <div id="dropdown-filterPropertyMore-Keyword" style="width:100%">
                                <button
                                    style="border:none;background:none;height: 30px;width:90%;text-align:left;margin-left: 10px;border-top: 1px solid #e9e7e7">
                                    <a>Piscina</a>
                                </button>
                                <button
                                    style="border:none;background:none;height: 30px;width:90%;text-align:left;margin-left: 10px;border-top: 1px solid #e9e7e7">
                                    <a>Ascensor</a>
                                </button>
                                <button
                                    style="border:none;background:none;height: 30px;width:90%;text-align:left;margin-left: 10px;border-top: 1px solid #e9e7e7">
                                    <a>Vigilancia</a>
                                </button>
                                <button
                                    style="border:none;background:none;height: 30px;width:90%;text-align:left;margin-left: 10px;border-top: 1px solid #e9e7e7">
                                    <a>Salón de juegos</a>
                                </button>
                            </div>



                        </div>
                    </div>

                    <div class="flex flex-wrap" style="padding:0px 30px;">

                        <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                            <a style="padding-right: 10px;">Piscina</a>
                            <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 294.18 294.18">
                                <path
                                    d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                    transform="translate(-102.82 -89.55)" /></svg>
                        </button>
                        <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                            <a style="padding-right: 10px;">Aire Acondicionado</a>
                            <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 294.18 294.18">
                                <path
                                    d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                    transform="translate(-102.82 -89.55)" /></svg>
                        </button>
                        <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                            <a style="padding-right: 10px;">Ducha electrica</a>
                            <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 294.18 294.18">
                                <path
                                    d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                    transform="translate(-102.82 -89.55)" /></svg>
                        </button>
                        <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                            <a style="padding-right: 10px;">Terraza</a>
                            <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 294.18 294.18">
                                <path
                                    d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                    transform="translate(-102.82 -89.55)" /></svg>
                        </button>
                        <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                            <a style="padding-right: 10px;">Balcon</a>
                            <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 294.18 294.18">
                                <path
                                    d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                    transform="translate(-102.82 -89.55)" /></svg>
                        </button>
                        <button class="flex align-items-center" id="dropdown-filterPropertyMore-buttonKeyword">
                            <a style="padding-right: 10px;">Porteria</a>
                            <svg style="width:8px;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 294.18 294.18">
                                <path
                                    d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                                    transform="translate(-102.82 -89.55)" /></svg>
                        </button>


                    </div>

                </div>

                <button
                    class="flex align-items-center"
                    style="border:none;width:100%; background:none;padding:20px 30px;border-bottom: 1px solid #e9e7e7"
                    onclick="toogleDisplay(event,'filterPropertyMore-area')">
                    <a class="bold" style="margin-right:auto;font-size: 1.3em;">Area</a>
                    <div>
                        <svg width="12" viewBox="0 0 9 6" fill="none" style="padding-left:10px">
                            <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </button>
                <div id="filterPropertyMore-area" class="subdropdown-filterPropertyMore">
                    <div class="flex align-items-center">
                        <div class="flex boder-radius-10px" style="margin:20px 30px;border: 1px solid;">
                            <input class="bold boder-radius-10px"
                                style="height: 30px;border:none;padding-left:10px;width:100%;"
                                type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                                onfocusout="displayNone('min-price')" placeholder="Min.">
                            <select id="cars" class="bold roboto boder-radius-10px" name="cars"
                                style="border:none;width:70px">
                                <option value="volvo">m2</option>
                                <option value="saab">sqft</option>
                                <option value="fiat">Acre</option>
                                <option value="audi">Fanegada</option>
                            </select>
                            </input>
                        </div>
                        <div style="margin:auto">

                            <a>-</a>
                        </div>
                        <div class="flex boder-radius-10px" style="margin:20px 30px;border: 1px solid;">
                            <input class="bold boder-radius-10px"
                                style="height: 30px;border:none;padding-left:10px;width:100%;"
                                type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                                onfocusout="displayNone('min-price')" placeholder="Max.">
                            <select id="cars" class="bold roboto boder-radius-10px" name="cars"
                                style="border:none;width:70px">
                                <option value="volvo">m2</option>
                                <option value="saab">sqft</option>
                                <option value="fiat">Acre</option>
                                <option value="audi">Fanegada</option>
                            </select>
                            </input>
                        </div>
                    </div>
                </div>


                <button
                    class="flex align-items-center"
                    style="border:none;width:100%; background:none;padding:20px 30px;border-bottom: 1px solid #e9e7e7"
                    onclick="toogleDisplay(event,'filterPropertyMore-HOA-Fee')">
                    <a class="bold" style="margin-right:auto;font-size: 1.3em;">Arriendo</a>
                    <div>
                        <svg width="12" viewBox="0 0 9 6" fill="none" style="display: block;padding-left:10px">
                            <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </button>
                <div id="filterPropertyMore-HOA-Fee" class="subdropdown-filterPropertyMore">
                    <div style="display:flex">
                        <div style="padding:20px 30px;">
                            <input class="bold boder-radius-10px"
                                style="height: 30px;border: 1px solid;padding-left:10px;width:100%"
                                type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                                onfocusout="displayNone('min-price')" placeholder="Precio min.">
                        </div>
                        <div style="margin:auto">
                            <a>-</a>
                        </div>
                        <div style="padding:20px 30px;">
                            <input class="bold boder-radius-10px"
                                style="height: 30px;border: 1px solid;padding-left:10px;width:100%"
                                type="text" id="male" name="gender" onFocus="displayBlock('max-price')"
                                onfocusout="displayNone('max-price')" placeholder="Precio max.">
                        </div>
                    </div>
                </div>


                <button
                    class="flex align-items-center"
                    style="border:none;width:100%; background:none;padding:20px 30px;border-bottom: 1px solid #e9e7e7"
                    onclick="toogleDisplay(event,'filterPropertyMore-Parkings')">
                    <a class="bold" style="margin-right:auto;font-size: 1.3em;">Parqueaderos</a>
                    <div>
                        <svg width="12" viewBox="0 0 9 6" fill="none" style="padding-left:10px">
                            <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </button>
                <div id="filterPropertyMore-Parkings" class="subdropdown-filterPropertyMore">
                    <div class="flex" style="padding-left:30px;padding-top:20px;">
                        <button>
                            <a class="bold">0</a>
                        </button>
                        <button>
                            <a class="bold">+1</a>
                        </button>
                        <button>
                            <a class="bold">+2</a>
                        </button>
                        <button>
                            <a class="bold">+3</a>
                        </button>
                        <button>
                            <a class="bold">+4</a>
                        </button>

                    </div>
                </div>


                <button
                    class="flex align-items-center"
                    style="border:none;width:100%; background:none;padding:20px 30px;border-bottom: 1px solid #e9e7e7"
                    onclick="toogleDisplay(event,'filterPropertyMore-YearBuilt')">
                    <a class="bold" style="margin-right:auto;font-size: 1.3em;">Año de Construcción</a>
                    <div>
                        <svg width="12" viewBox="0 0 9 6" fill="none" style="display: block;padding-left:10px">
                            <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </button>
                <div id="filterPropertyMore-YearBuilt" class="subdropdown-filterPropertyMore">
                    <div  class="flex">
                        <div style="padding:20px 30px;">
                            <input class="bold boder-radius-10px"
                                style="height: 30px;border: 1px solid;padding-left:10px;width:100%"
                                type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                                onfocusout="displayNone('min-price')" placeholder="Min.">
                        </div>
                        <div style="margin:auto">
                            <a>-</a>
                        </div>
                        <div style="padding:20px 30px;">
                            <input class="bold boder-radius-10px"
                                style="height: 30px;border: 1px solid;padding-left:10px;width:100%"
                                type="text" id="male" name="gender" onFocus="displayBlock('max-price')"
                                onfocusout="displayNone('max-price')" placeholder="Max.">
                        </div>
                    </div>
                </div>


                <button
                    class="flex align-items-center"
                    style="border:none;width:100%; background:none;padding:20px 30px;border-bottom: 1px solid #e9e7e7"
                    onclick="toogleDisplay(event,'filterPropertyMore-Pets')">
                    <a class="bold" style="margin-right:auto;font-size: 1.3em;">Mascotas</a>
                    <div>
                        <svg width="12" viewBox="0 0 9 6" fill="none" style="padding-left:10px">
                            <path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </button>
                <div id="filterPropertyMore-Pets" class="subdropdown-filterPropertyMore">
                    <fieldset style="border:none;">
                        <div style="padding:20px 10px;border-bottom: 1px solid #e9e7e7">
                            <input type="checkbox" id="male" name="gender" value="male">
                            <label for="male" style="padding-left:10px">Se permiten Mascotas</label>
                        </div>
                    </fieldset>
                </div>




            </div>

        </div>

    </form>
</div>




    
    `
}

module.exports = FilterSearch