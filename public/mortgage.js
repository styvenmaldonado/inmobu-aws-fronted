var data = [{
    fill:20,
    color:"#80e080"
},{
    fill:45,
    color:"#4fc3f7"
},{
    fill:15,
    color:"#9575cd"
},{
    fill:30,
    color:"#f06292"
}]


var svg= document.querySelector('#mortgage'),
filled = 0;
data.forEach(function(o,i){
    var circle = document.createElementNS("http://www.w3.org/2000/svg","circle"),
    startAngle = -90,
    radius = 30,
    cx = 50,
    cy = 50,
    strokeWidth = 5,
    dashArray = 2*Math.PI*radius,
    dashOffset = dashArray - (dashArray * o.fill / 100),
    angle = (filled * 360 / 100) + startAngle;
    circle.setAttribute("r",radius);
    circle.setAttribute("cx",cx);
    circle.setAttribute("cy",cy);
    circle.setAttribute("fill","transparent");
    circle.setAttribute("stroke",o.color);
    circle.setAttribute("stroke-width",strokeWidth);
    circle.setAttribute("stroke-dasharray",dashArray);
    circle.setAttribute("stroke-dashoffset",dashOffset);
    circle.setAttribute("transform","rotate("+(angle)+" "+cx+" "+cy+")");
    svg.appendChild(circle);
    filled+= o.fill;
})