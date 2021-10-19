function degreesFahrenheit(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(degreesFahrenheit(25));

function degreesCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
console.log(degreesCelsius(77));
