function areaOfTriangle(a,b,c){
    var s = (a + b + c ) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
   var a = 2;
   var b = 1;
   var c = 2;
console.log(areaOfTriangle(a,b,c));
