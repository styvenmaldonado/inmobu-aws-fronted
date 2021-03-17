const Sidebar = () => {
    return `
    <amp-lightbox id="sidebar" layout="nodisplay" scrollable>
        <div class="p-5 w-screen bg-white absolute top-0 left-0">
            <div class="flex h-16 items-center border-b border-gray-200">
                <button on="tap:sidebar.close" style="width:10vw;border:none;background:none;">
                    <svg style="width:5vw;color: #007BF5" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 294.18 294.18">
                        <path
                            d="M249.76,260.12c-3,3-5.87,5.94-8.81,8.88L138.58,371.41l-7.24,7.24a16.57,16.57,0,1,1-23.51-23.36Q133.44,329.63,159.1,304l66.77-66.77c.16-.16.31-.34.57-.62-2.26-2.23-4.5-4.42-6.71-6.64l-98.8-98.82q-6.53-6.54-13.08-13.06a16.55,16.55,0,0,1,6.45-27.65c6.41-2,12.19-.56,17,4.21q13.48,13.41,26.89,26.88L238.59,202q5.25,5.23,10.49,10.49c.25.24.5.46.86.79,3-3,5.95-6,8.91-9l96.56-96.58q6.49-6.5,13-13A16.51,16.51,0,0,1,396,100.83c2.14,6.21,1,12.09-3.7,16.78q-36.78,37-73.72,73.79l-44.7,44.7c-.16.16-.3.34-.59.66,2.15,2.11,4.29,4.18,6.39,6.28l95.48,95.47Q383.59,347,392,355.42a16.58,16.58,0,1,1-23.61,23.28l-60.76-60.78-57.18-57.19C250.28,260.54,250.07,260.38,249.76,260.12Z"
                            transform="translate(-102.82 -89.55)" /></svg>
                </button>
                <div class="w-full text-center">
                    <svg style="height:4vh" class="m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 457.18 98.58">
                        <path
                            d="M24.82,122.14a8.35,8.35,0,0,1,2.59-6.25,9.09,9.09,0,0,1,6.6-2.51,8.76,8.76,0,1,1,0,17.51,9.09,9.09,0,0,1-6.6-2.51A8.35,8.35,0,0,1,24.82,122.14Zm16.65,87.53a15.49,15.49,0,0,1-2.8.79,21.76,21.76,0,0,1-4.09.36c-2.78,0-4.83-.53-6.17-1.58s-2-2.82-2-5.31v-60.7l2.94-.72a17.47,17.47,0,0,1,4.09-.43q4.17,0,6.1,1.58t1.94,5.45Z"
                            transform="translate(-24.82 -113.38)" style="fill:#0d3a63" />
                        <path
                            d="M103.39,156.14q-4-3.3-10.69-3.3a28.81,28.81,0,0,0-9,1.29A40.08,40.08,0,0,0,76.91,157v52.66a15.25,15.25,0,0,1-2.8.79,20.81,20.81,0,0,1-3.94.36c-2.78,0-4.83-.53-6.17-1.58s-2-2.82-2-5.31V156.57a9.73,9.73,0,0,1,1.29-5.31,14.94,14.94,0,0,1,4.3-4,47.57,47.57,0,0,1,10.48-4.45,49.17,49.17,0,0,1,14.64-2q13.9,0,21.81,6.24t7.89,18.87v43.77a15.31,15.31,0,0,1-2.87.79,22,22,0,0,1-4,.36q-4.16,0-6.17-1.58t-2-5.31V166.48Q107.33,159.45,103.39,156.14Z"
                            transform="translate(-24.82 -113.38)" style="fill:#0d3a63" />
                        <path
                            d="M222.2,155.78c-2.34-1.95-5.52-2.94-9.54-2.94a20.07,20.07,0,0,0-7.68,1.51,24.49,24.49,0,0,0-6.67,4.09,19.64,19.64,0,0,1,.43,2.44,24.78,24.78,0,0,1,.14,2.58v46.21a15.31,15.31,0,0,1-2.87.79,21.17,21.17,0,0,1-3.87.36c-2.78,0-4.83-.53-6.17-1.58s-2-2.82-2-5.31V165q0-6.31-3.59-9.26c-2.39-1.95-5.6-2.94-9.61-2.94a22.32,22.32,0,0,0-7.61,1.29,29.79,29.79,0,0,0-6,2.88v52.66a15.34,15.34,0,0,1-2.79.79,20.92,20.92,0,0,1-4,.36c-2.78,0-4.83-.53-6.17-1.58s-2-2.82-2-5.31V156.57a9.73,9.73,0,0,1,1.29-5.31,14.86,14.86,0,0,1,4.31-4,39.6,39.6,0,0,1,10.47-4.6A45,45,0,0,1,171,140.79a37,37,0,0,1,12.13,1.86,22,22,0,0,1,8.82,5.46,35.57,35.57,0,0,1,9.55-5.24,36.24,36.24,0,0,1,12.84-2.08,38.82,38.82,0,0,1,10.48,1.36,22.28,22.28,0,0,1,8.39,4.31,20.43,20.43,0,0,1,5.52,7.39,25.61,25.61,0,0,1,2,10.62v45.2a20,20,0,0,1-2.94.79,20.89,20.89,0,0,1-3.94.36q-4.17,0-6.17-1.58c-1.35-1.05-2-2.82-2-5.31V165Q225.72,158.73,222.2,155.78Z"
                            transform="translate(-24.82 -113.38)" style="fill:#0d3a63" />
                        <path
                            d="M325,176.38a42.54,42.54,0,0,1-2.44,14.78,32.14,32.14,0,0,1-6.82,11.19,29.67,29.67,0,0,1-10.69,7.1,40.66,40.66,0,0,1-28.13,0,29.67,29.67,0,0,1-10.69-7.1,32,32,0,0,1-6.81-11.19,46,46,0,0,1,0-29.56,31.54,31.54,0,0,1,6.89-11.2,30.44,30.44,0,0,1,10.76-7.1,39.85,39.85,0,0,1,27.84,0,30.05,30.05,0,0,1,10.76,7.18,32.52,32.52,0,0,1,6.89,11.19A41.9,41.9,0,0,1,325,176.38Zm-34-23.54q-8.61,0-13.63,6.17t-5,17.37q0,11.19,4.88,17.29t13.78,6.1q8.89,0,13.77-6.1t4.88-17.29q0-11.06-5-17.29T291,152.84Z"
                            transform="translate(-24.82 -113.38)" style="fill:#0d3a63" />
                        <path
                            d="M373.23,140.79A35.5,35.5,0,0,1,385.86,143a28.2,28.2,0,0,1,10.19,6.6,30.49,30.49,0,0,1,6.74,11,45.21,45.21,0,0,1,2.44,15.57A45.3,45.3,0,0,1,402.72,192a29.16,29.16,0,0,1-7.1,11.12,30,30,0,0,1-11,6.6A42.84,42.84,0,0,1,370.5,212a46,46,0,0,1-13.7-1.86,39,39,0,0,1-9.69-4.31,14.67,14.67,0,0,1-4.3-4,9.41,9.41,0,0,1-1.29-5.17V116.83c.67-.2,1.62-.43,2.87-.72a17.64,17.64,0,0,1,4-.43c2.77,0,4.8.52,6.09,1.58s1.94,2.82,1.94,5.31v22.67a43.32,43.32,0,0,1,7.32-3.09A30.32,30.32,0,0,1,373.23,140.79Zm-2.44,12.05a21,21,0,0,0-8.18,1.51,27.24,27.24,0,0,0-6.17,3.51V196a20.9,20.9,0,0,0,5.6,2.58,27.16,27.16,0,0,0,8.32,1.15q8.75,0,14.21-5.74t5.45-17.8q0-12.19-5.38-17.79A18.38,18.38,0,0,0,370.79,152.84Z"
                            transform="translate(-24.82 -113.38)" style="fill:#0d3a63" />
                        <path
                            d="M421.59,142.94c.67-.19,1.62-.4,2.87-.64a21.16,21.16,0,0,1,4-.36c2.77,0,4.8.52,6.09,1.58s1.94,2.87,1.94,5.45v35.44q0,8.33,4.38,11.84T453,199.77a30.65,30.65,0,0,0,8.47-1,25.47,25.47,0,0,0,5.45-2.15V142.94c.77-.19,1.75-.4,2.94-.64a20.2,20.2,0,0,1,3.95-.36c2.77,0,4.83.52,6.17,1.58s2,2.87,2,5.45v48.36a11.68,11.68,0,0,1-1,5.16,10.42,10.42,0,0,1-4,3.88,44.26,44.26,0,0,1-9.83,3.87A52.8,52.8,0,0,1,452.87,212q-14.78,0-23-6.53t-8.25-20.73Z"
                            transform="translate(-24.82 -113.38)" style="fill:#0d3a63" />
                    </svg>
                </div>
            </div>


            <div>


                <button class="flex w-full h-full pr-0 no-underline border-none bg-transparent">
                    <div class="flex items-center h-14 border-b border-gray-200 w-full mr-auto">
                        <div class="font-normal text-blue-500  mr-auto" >Ingresa o Registrate</div>
                        <svg style="width:2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.2 386">
                            <path
                                d="M283.6,241.48c-43.77-43.13-86.36-85-128.82-127C141,100.87,137,85,146.26,67.28c8.58-16.28,23.5-20.86,40.14-17,7.81,1.83,15.66,7.28,21.53,13.07q74.81,73.85,148.77,148.55c20.58,20.8,20.75,38.8.46,59.33q-74.73,75.6-150.31,150.36c-17.06,16.89-40,17.64-54.66,3.09-15.32-15.27-15.11-36.86,2.41-54.63C196.57,327.52,239.23,285.63,283.6,241.48Z"
                                transform="translate(-141.06 -49)" /></svg>
                    </div>
                </button>

                <button class="flex w-full h-full pr-0 no-underline border-none bg-transparent">
                <div class="flex items-center h-14 border-b border-gray-200 w-full mr-auto">
                    <div class="font-normal text-blue-500  mr-auto" >Publica tu inmueble <a class="font-black">GRATIS</a></div>
                    <svg style="width:2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.2 386">
                        <path
                            d="M283.6,241.48c-43.77-43.13-86.36-85-128.82-127C141,100.87,137,85,146.26,67.28c8.58-16.28,23.5-20.86,40.14-17,7.81,1.83,15.66,7.28,21.53,13.07q74.81,73.85,148.77,148.55c20.58,20.8,20.75,38.8.46,59.33q-74.73,75.6-150.31,150.36c-17.06,16.89-40,17.64-54.66,3.09-15.32-15.27-15.11-36.86,2.41-54.63C196.57,327.52,239.23,285.63,283.6,241.48Z"
                            transform="translate(-141.06 -49)" /></svg>
                </div>
               </button>


               <button class="flex w-full h-full pr-0 no-underline border-none bg-transparent">
               <div class="flex items-center h-14 border-b border-gray-200 w-full mr-auto">
                   <div class="font-normal text-blue-500  mr-auto" >Agrega una cuenta empresarial <a class="font-black">GRATIS</a></div>
                   <svg style="width:2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.2 386">
                       <path
                           d="M283.6,241.48c-43.77-43.13-86.36-85-128.82-127C141,100.87,137,85,146.26,67.28c8.58-16.28,23.5-20.86,40.14-17,7.81,1.83,15.66,7.28,21.53,13.07q74.81,73.85,148.77,148.55c20.58,20.8,20.75,38.8.46,59.33q-74.73,75.6-150.31,150.36c-17.06,16.89-40,17.64-54.66,3.09-15.32-15.27-15.11-36.86,2.41-54.63C196.57,327.52,239.23,285.63,283.6,241.48Z"
                           transform="translate(-141.06 -49)" /></svg>
               </div>
               </button>



     


      


                <amp-accordion>
                    <section>
                    <button class="flex w-full h-full pr-0 no-underline border-none bg-transparent">
                    <div class="flex items-center h-14 border-b border-gray-200 w-full mr-auto">
                     <div class="flex font-normal mr-auto" >
                     <div class="pr-1">
                            <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style="display: block; width:4.5vw; fill: currentcolor;">
                            <path
                                d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                            </path>
                            </svg>
                     </div>

                    <div class="underline">Español (CO)</div> 
                     
                     </div>
                      <svg style="width:2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.2 386">
                        <path
                               d="M283.6,241.48c-43.77-43.13-86.36-85-128.82-127C141,100.87,137,85,146.26,67.28c8.58-16.28,23.5-20.86,40.14-17,7.81,1.83,15.66,7.28,21.53,13.07q74.81,73.85,148.77,148.55c20.58,20.8,20.75,38.8.46,59.33q-74.73,75.6-150.31,150.36c-17.06,16.89-40,17.64-54.66,3.09-15.32-15.27-15.11-36.86,2.41-54.63C196.57,327.52,239.23,285.63,283.6,241.48Z"
                                transform="translate(-141.06 -49)" /></svg>
                       </div>
                      </button>

                        <div class="px-5">
                            <div><div class="font-bold py-4">Elige un idioma</div>
                                <ul>
                                    <li class="text-blue-500 pb-2">Español</li>
                                    <li class="text-blue-500 pb-2">English</li>
                                    <li class="text-blue-500 pb-2">Português</li>
                                    <li class="text-blue-500 pb-2">Français</li>
                                </ul>
                            </div>
                            <div><div class="font-bold py-4">Elige una región/pais</div>
                                <ul>
                                    <li class="text-blue-500 pb-2">Colombia</li>
                                    <li class="text-blue-500 pb-2">Brasil</li>
                                    <li class="text-blue-500 pb-2">Argentina</li>
                                    <li class="text-blue-500 pb-2">México</li>
                                    <li class="text-blue-500 pb-2">Costa Rica</li>
                                    <li class="text-blue-500 pb-2">Panama</li>
                                    <li class="text-blue-500 pb-2">Venezuela</li>
                                    <li class="text-blue-500 pb-2">Chile</li>
                                    <li class="text-blue-500 pb-2">Estados Unidos</li>
                                    <li class="text-blue-500 pb-2">Canada</li>
                                    <li class="text-blue-500 pb-2">España</li>
                                    <li class="text-blue-500 pb-2">Francia</li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    
                    <section>
                        <button class="flex w-full h-full pr-0 no-underline border-none bg-transparent">
                                <div class="flex items-center h-14 border-b border-gray-200 w-full mr-auto">
                                 <div class="font-normal mr-auto" >Venta</div>
                                  <svg style="width:2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.2 386">
                                    <path
                                           d="M283.6,241.48c-43.77-43.13-86.36-85-128.82-127C141,100.87,137,85,146.26,67.28c8.58-16.28,23.5-20.86,40.14-17,7.81,1.83,15.66,7.28,21.53,13.07q74.81,73.85,148.77,148.55c20.58,20.8,20.75,38.8.46,59.33q-74.73,75.6-150.31,150.36c-17.06,16.89-40,17.64-54.66,3.09-15.32-15.27-15.11-36.86,2.41-54.63C196.57,327.52,239.23,285.63,283.6,241.48Z"
                                            transform="translate(-141.06 -49)" /></svg>
                                   </div>
                         </button>


                         <div class="px-5">
                         <div><div class="font-bold py-4">Tipo de propiedad</div>
                                <ul>
                                <li class="text-blue-500 pb-2">Casa en venta</li>
                                <li class="text-blue-500 pb-2">Apartamento en venta</li>
                                <li class="text-blue-500 pb-2">Oficinas en venta</li>
                                <li class="text-blue-500 pb-2">Locales en venta</li>
                                <li class="text-blue-500 pb-2">Consultorios en venta</li>
                                <li class="text-blue-500 pb-2">Fincas en venta</li>
                                <li class="text-blue-500 pb-2">Edificio en venta</li>
                                </ul>
                            </div>


                            <div><div class="font-bold py-4">Zonas populares</div>
                                <ul>
                                <li class="text-blue-500 pb-2">Rosales, Bogotá</li>
                                <li class="text-blue-500 pb-2">Ciudadela colsubsidio, Bogotá</li>
                                <li class="text-blue-500 pb-2">Poblado, Medellín</li>
                                <li class="text-blue-500 pb-2">Chapinero, Bogotá</li>
                                <li class="text-blue-500 pb-2">Ciudad Montes, Bogotá</li>
                                <li class="text-blue-500 pb-2">Ciudad Jardin Sur, Bogotá</li>
                                <li class="text-blue-500 pb-2">Sabaneta, Antioquia</li>
                                </ul>
                            </div>
                            <div class="py-4">
                                <ul>
                                <li class="text-blue-500 pb-2">Proyectos Nuevos</li>
                                <li class="text-blue-500 pb-2">Proyectos próximos</li>
                                <li class="text-blue-500 pb-2">Remates</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </amp-accordion>
            </div>
        </div>
    </amp-lightbox>
    
    `
}

module.exports  = Sidebar;