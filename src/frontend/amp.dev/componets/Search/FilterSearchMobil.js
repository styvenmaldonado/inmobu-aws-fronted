const FilterSearchMobil = () => {
    return `
    <form id="filterPropertyMobil-container">
        <div>
            <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Categoria</a></div>
            <div class="flex" id="mobilfilterPropertyCategoryType">
                <button onclick="filterPropertyMobilButton(event)" class="active">
                    <a style="padding:0 10px;">Venta</a>
                </button>
                <button onclick="filterPropertyMobilButton(event)" class="inactive">
                    <a style="padding:0 10px;">Arriendo</a>
                </button>
                <button onclick="filterPropertyMobilButton(event)" class="inactive">
                    <a style="padding:0 10px;">Alquiler</a>
                </button>
            </div>
        </div>


        <div style="padding-top: 10px;;" class="mobilfilterPropertyPropertyType">
            <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Tipo de Propiedad</a></div>
            <div id="mobilfilterPropertyHomeType" class="flex flex-wrap">
                <button onclick="filterPropertyMobilButton(event)" class="active">
                    <a style="padding:0 10px;">Casa</a>
                </button>
                <button onclick="filterPropertyMobilButton(event)" class="inactive">
                    <a style="padding:0 10px;">Apartamento</a>
                </button>
                <button onclick="filterPropertyMobilButton(event)" class="inactive">
                    <a style="padding:0 10px;">Oficina</a>
                </button>
                <button onclick="filterPropertyMobilButton(event)" class="inactive">
                    <a style="padding:0 10px;">Local</a>
                </button>
                <button onclick="filterPropertyMobilButton(event)" class="inactive">
                    <a style="padding:0 10px;">Lote</a>
                </button>
            </div>
        </div>

        <div style=" position:fixed;top: 85vh;left:0;width:100%;">
            <button id="filterPropertyButtonFixedButtom" class="flex align-items-center" onclick="toogleDisplay(event,'filterPropertyLightBox')">
                <svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" style="height:12px;fill:#fff"
                    viewBox="0 0 319.89 319.79">
                    <path
                        d="M0 36.41h176.97v33.94H0zM143.63 142.92h175.56v33.94H143.63zM.71 142.92h106.2v33.94H.71zM142.92 249.44h176.97v33.94H142.92z" />
                    <path d="M108.77 109.09v106.76H74.83V109.09z" />
                    <path
                        d="M0 142.92h109.16v33.94H0zM2.26 249.44h109.16v33.94H2.26zM176.86 213.02v106.76h-33.94V213.02zM214.37 36.41h104.82v33.94H214.37z" />
                    <path d="M248.38 0v106.76h-33.94V0z" /></svg>
                <a class="bold" style="padding-left:10px;font-family: 'Exo 2', sans-serif;">FILTRAR</a>
            </button>
        </div>



        <div id="filterPropertyLightBox"
            style=" position: absolute;top:0;left:0;width:94vw;height: auto;background-color:#fff;padding: 5vh 3vw">
            <div>
                <button style="border:none;background:none;">
                    <svg style="height:3.6vh" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 102.21 166.4">
                        <line x1="102.21" y1="146.4" x2="83.21" y2="166.4" style="fill:none" />
                        <rect x="203.26" y="116.44" width="27.17" height="117.24"
                            transform="translate(-226.06 144.01) rotate(-45)" />
                        <rect x="203.44" y="53.1" width="27.17" height="116.74"
                            transform="translate(125.87 283.16) rotate(-135)" />
                    </svg>
                </button>
            </div>
            <div style="padding:10px 0 30px"><a class="bold" style="font-size: 1.2em;">Filtrar busqueda</a></div>
            <div>
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Categoria</a></div>
                <div id="mobilfilterPropertyCategoryType" class="flex">
                    <button onclick="filterPropertyMobilButton(event)" class="active">
                        <a style="padding:0 10px;">Venta</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Arriendo</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Alquiler</a>
                    </button>
                </div>
            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Tipo de Propiedad</a></div>
                <div id="mobilfilterPropertyHomeType" class="flex flex-wrap">
                    <button onclick="filterPropertyMobilButton(event)" class="active">
                        <a style="padding:0 10px;">Casa</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Apartamento</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Oficina</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Local</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Lote</a>
                    </button>
                </div>
            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Estado</a></div>
                <div id="mobilfilterPropertyHomeType" class="flex flex-wrap">
                    <button onclick="filterPropertyMobilButton(event)" class="active">
                        <a style="padding:0 10px;">Nuevo</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Usado</a>
                    </button>
                </div>
            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyRoomsBaths">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Baños y Habitaciones</a></div>
                <div class="flex align-items-center" style="padding:10px 30px;border-bottom: 1px solid #adadad">
                    <div style="margin-right: auto;">
                        <a style="font-size:1em">Habitaciones</a>
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
                <div class="flex align-items-center" style="padding:10px 30px;border-bottom: 1px solid #adadad">
                    <div style="margin-right: auto;">
                        <a style="font-size:1em">Baños</a>
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
            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Precio</a></div>
                <div class="flex" style="padding-top: 5px;width:95%">
                    <div style="width:40vw">
                        <input class="bold boder-radius-10px " style="height: 30px;border: 1px solid;;width: inherit;"
                            type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                            onfocusout="displayNone('min-price')" placeholder="Precio min.">
                    </div>
                    <div style="margin:auto">
                        <a>-</a>
                    </div>
                    <div style="width:40vw">
                        <input class="bold boder-radius-10px" style="height: 30px;border: 1px solid;width: inherit;"
                            type="text" id="male" name="gender" onFocus="displayBlock('max-price')"
                            onfocusout="displayNone('max-price')" placeholder="Precio max.">
                    </div>
                </div>

            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Area</a></div>
                <div class="flex" style="padding-top: 5px;width: 95%;">
                    <div class="flex boder-radius-10px" style="border: 1px solid;">
                        <input class="bold boder-radius-10px"
                            style="height: 30px;border:none;padding-left:10px;width:20vw;" type="text"
                            id="male" name="gender" onFocus="displayBlock('min-price')"
                            onfocusout="displayNone('min-price')" placeholder="Min.">
                        <select id="cars" class="bold roboto boder-radius-10px" name="cars"
                            style="border:none;width:15vw">
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
                    <div class="boder-radius-10px" style="display:flex;border: 1px solid;">
                        <input class="bold boder-radius-10px"
                            style="height: 30px;border:none;padding-left:10px;width:20vw;" type="text"
                            id="male" name="gender" onFocus="displayBlock('min-price')"
                            onfocusout="displayNone('min-price')" placeholder="Min.">
                        <select id="cars" class="bold roboto boder-radius-10px" name="cars"
                            style="border:none;width:15vw">
                            <option value="volvo">m2</option>
                            <option value="saab">sqft</option>
                            <option value="fiat">Acre</option>
                            <option value="audi">Fanegada</option>
                        </select>
                        </input>
                    </div>
                </div>

            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Arriendo</a></div>
                <div class="flex" style="padding-top: 5px;width:95%">
                    <div style="width:40vw">
                        <input class="bold boder-radius-10px" style="height: 30px;border: 1px solid;;width: inherit;"
                            type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                            onfocusout="displayNone('min-price')" placeholder="Precio min.">
                    </div>
                    <div style="margin:auto">
                        <a>-</a>
                    </div>
                    <div style="width:40vw">
                        <input class="bold boder-radius-10px" style="height: 30px;border: 1px solid;width: inherit;"
                            type="text" id="male" name="gender" onFocus="displayBlock('max-price')"
                            onfocusout="displayNone('max-price')" placeholder="Precio max.">
                    </div>
                </div>

            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyParkings">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Parqueaderos</a></div>
                <div class="flex" style="padding-top: 5px;width:95%">
                    <div id="filterPropertyMore-Parkings" class="subdropdown-filterPropertyMore">
                        <div class="flex">
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
                </div>
            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Año de Construcción</a></div>
                <div class="flex" style="padding-top: 5px;width:95%">
                    <div style="width:40vw">
                        <input class="bold boder-radius-10px" style="height: 30px;border: 1px solid;;width: inherit;"
                            type="text" id="male" name="gender" onFocus="displayBlock('min-price')"
                            onfocusout="displayNone('min-price')" placeholder="Precio min.">
                    </div>
                    <div style="margin:auto">
                        <a>-</a>
                    </div>
                    <div style="width:40vw">
                        <input class="bold boder-radius-10px" style="height: 30px;border: 1px solid;width: inherit;"
                            type="text" id="male" name="gender" onFocus="displayBlock('max-price')"
                            onfocusout="displayNone('max-price')" placeholder="Precio max.">
                    </div>
                </div>

            </div>
            <div style="padding-top: 10px;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Mascotas</a></div>
                <div class="flex" style="padding-top: 5px;width:95%">
                    <fieldset style="border:none;">
                        <di>
                            <input type="checkbox" id="male" name="gender" value="male">
                            <label for="male">Se permiten Mascotas</label>
                </div>
                </fieldset>
            </div>
            <div style="padding: 10px 0 200px 0;" class="mobilfilterPropertyPropertyType">
                <div style="padding-bottom: 10px;"><a style="font-size:1em" class="bold">Caracteristicas</a></div>
                <div id="mobilfilterPropertyHomeType" class="flex flex-wrap">
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Casa</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Apartamento</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Oficina</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Local</a>
                    </button>
                    <button onclick="filterPropertyMobilButton(event)" class="inactive">
                        <a style="padding:0 10px;">Lote</a>
                    </button>
                </div>
            </div>

            <div
                class="flex align-items-center"
                style=" position: fixed;top: 88vh;left:0;height:12vh; width:100%;background-color:#fff;border-top: 1px solid rgb(97, 97, 97);">
                <button id="filterPropertyButtonFixedButtom" class="flex align-items-center" style="width:80vw;"
                    onclick="toogleDisplay(event,'filterPropertyLightBox')">
                    <div style="margin:auto">
                        <a class="bold" style="padding-right:10px;font-family: 'Exo 2', sans-serif;">APLICAR</a>
                        <svg style="height:12px;fill:#fff;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.2 386">
                            <path
                                d="M283.6,241.48c-43.77-43.13-86.36-85-128.82-127C141,100.87,137,85,146.26,67.28c8.58-16.28,23.5-20.86,40.14-17,7.81,1.83,15.66,7.28,21.53,13.07q74.81,73.85,148.77,148.55c20.58,20.8,20.75,38.8.46,59.33q-74.73,75.6-150.31,150.36c-17.06,16.89-40,17.64-54.66,3.09-15.32-15.27-15.11-36.86,2.41-54.63C196.57,327.52,239.23,285.63,283.6,241.48Z"
                                transform="translate(-141.06 -49)" /></svg>
                    </div>
                </button>
            </div>

        </div>
    </form>
    `
}
module.exports = FilterSearchMobil;