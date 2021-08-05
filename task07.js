function degreesFahrenheit(celsius){
    var fahrenheit = celsius * (9 / 5) + 32 ;
    return fahrenheit; 
}
console.log(degreesFahrenheit(25));

function degreesCelsius( fahrenheit){
    var celsius = (fahrenheit - 32)* 5 / 9 ;
    return celsius;
}
console.log(degreesCelsius(77));
