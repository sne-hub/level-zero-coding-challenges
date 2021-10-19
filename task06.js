function maxNumber(a, b, c) {
  if ((a > b && a > c) || (c === b && a > b) || (a === b && a > c)) {
    return a;
  }
  if ((b > a && b > c) || (c === a && b > c) || (b === c && b > a)) {
    return b;
  }
  if ((c > a && c > b) || (a === b && c > a) || (a === c && c > b)) {
    return c;
  }
  return c;
}
const max = maxNumber(1, -6, 1);
console.log(' The maximum number is :', max);
