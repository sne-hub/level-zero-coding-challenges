function degreesFahrenheit(celsius){
    let fahrenheit = celsius * (9 / 5) + 32 ;
    return fahrenheit; 
}
console.log(degreesFahrenheit(25));

function degreesCelsius( fahrenheit){
    let celsius = (fahrenheit - 32)* 5 / 9 ;
    return celsius;
}
console.log(degreesCelsius(77));
