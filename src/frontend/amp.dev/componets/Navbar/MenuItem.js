const MenuItem = ({title}) => {
    return`
    <div class="menuItem flex list-none items-center text-right pr-10 h-full">
      <div class="flex items-center text-left h-26 pr-2 font-sans"><a href="#">${title}</a></div>
      <div class="dropdown-content hidden w-full shadow-2xl px-16 py-12 bg-white border-t border-gray-200">
                <div style="width:25vw" class="text-left"><div class="text-3xl font-bold pb-3">Tipo de propiedad</div>
                    <ul class="list-none pl-0">
                        <li class="pb-1">Casa en venta</li>
                        <li class="pb-1">Apartamento en venta</li>
                        <li class="pb-1">Oficinas en venta</li>
                        <li class="pb-1">Locales en venta</li>
                        <li class="pb-1">Consultorios en venta</li>
                        <li class="pb-1">Fincas en venta</li>
                        <li class="pb-1">>Edificio en venta</li>
                    </ul>
                </div>
                <div style="width:30vw" class="text-left"><div class="text-3xl font-bold pb-3">Zonas populares</div>
                    <ul class="list-none pl-0">
                        <li class="pb-1">Rosales, Bogotá</li>
                        <li class="pb-1">Ciudadela colsubsidio, Bogotá</li>
                        <li class="pb-1">Poblado, Medellín</li>
                        <li class="pb-1">Chapinero, Bogotá</li>
                        <li class="pb-1">Ciudad Montes, Bogotá</li>
                        <li class="pb-1">Ciudad Jardin Sur, Bogotá</li>
                        <li class="pb-1">>Sabaneta, Antioquia</li>
                    </ul>
                </div>
                    <div style="width:30vw" class="text-left">
                        <ul class="list-none pl-0">
                        <li class="pb-1">Proyectos Nuevos</li>
                        <li class="pb-1">Proyectos próximos</li>
                        <li class="pb-1">Remates</li>
                        </ul>
                    </div>
       </div>
    </div>
    `
} 

module.exports= MenuItem;