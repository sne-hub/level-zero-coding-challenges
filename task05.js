function areaOfTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0 || a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}
console.log(areaOfTriangle(2, 4, 3));
