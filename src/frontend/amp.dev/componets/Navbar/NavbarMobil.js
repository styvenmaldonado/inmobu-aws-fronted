const Sidebar = require('./Sidebar')

const NavbarMobil = () => {
    return `
    <nav class="flex lg:hidden p-5">
        <div style="width:48vw">
            <button style="border:none;background:none;">
                <svg style="height:2em" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 102.21 166.4">
                    <line x1="102.21" y1="146.4" x2="83.21" y2="166.4" style="fill:none" />
                    <rect x="203.26" y="116.44" width="27.17" height="117.24"
                        transform="translate(-226.06 144.01) rotate(-45)" />
                    <rect x="203.44" y="53.1" width="27.17" height="116.74"
                        transform="translate(125.87 283.16) rotate(-135)" />
                </svg>
            </button>
        </div>
        <div style="width:48vw" class="text-right">
            <!-- <button style="border:none;background:none;">
                <div>
                    <svg version="1.1" style="height: 4vh;" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04
                       V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483
                       c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419
                       H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" />
                            </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                    <div class="notify-circle"><a>24</a>
                    </div>
                </div>

            </button> -->
            <button on="tap:sidebar" style="border:none;background:none;">
                <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style="display: block; fill: none; height: 4vh; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                    <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                    </g>
                </svg>
            </button>
        </div>
    </nav>
    ${Sidebar()}
    `
}

module.exports= NavbarMobil;