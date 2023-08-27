/** ******************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates          *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math    *
 *                                                                                          *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number} area
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    return "Enter Numbers only";
  }

  let mult = width * height;
  return mult;
}
let area = getRectangleArea(5, 5);
console.log(area);

/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number} circum
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCicleCircumference(radius) {
  const pi = 3.141592653589793;
  let circum = 2 * pi * radius;
  if (isNaN(radius)) {
    return "Enter Number only";
  }
  return circum;
}
let circleCircum = getCicleCircumference(5);
console.log(circleCircum);

/**
 * Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number} average
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    return "Enter Number only";
  }
  let average = (value1 + value2) / 2;
  return average;
}
let av = getAverage(-3, 3);
console.log(av);

/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number} dist
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 *   (4, 2) (1, 6) => 5
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return "Enter Number only";
  }
  let l1 = Math.abs(x1 - x2);
  let l2 = Math.abs(y1 - y2);
  let cal1 = Math.pow(l1, 2);
  let cal2 = Math.pow(l2, 2);
  let sumCal = cal1 + cal2;
  let dist = Math.pow(sumCal, 0.5);

  return dist;
}
let d = getDistanceBetweenPoints(4, 2, 1, 6);
console.log(d);

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number} x
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Enter Number only";
  }
  let x = (-1 * b) / a;
  if (x === -0) {
    return Math.abs(x);
  }
  return x;
}
let xResults = getLinearEquationRoot(5, 0);
console.log(xResults);

/**
 * Returns an angle (in radians) between two vectors given by xi and yi, coordinates
 * in Cartesian plane
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} angle
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return "Enter Number only";
  }
  let p1 = x1 * x2;
  let p2 = y1 * y2;
  let adj = p1 + p2;
  let mp1 = Math.pow(Math.pow(x1, 2) + Math.pow(y1, 2), 0.5);
  let mp2 = Math.pow(Math.pow(x2, 2) + Math.pow(y2, 2), 0.5);
  let hyp = mp1 * mp2;
  let angle = Math.acos(adj / hyp);
  return angle;
}
let ang = getAngleBetweenVectors(1, 0, 0, 1);
console.log(ang);

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number} lastDigit
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  if (isNaN(value)) {
    return "Enter Number only";
  }
  let lastDigit = value % 10;
  return lastDigit;
}
let ld = getLastDigit(5);
console.log(ld);

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number} num
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  if (isNaN(value)) {
    return "Enter Number only";
  }
  let num = +value;
  return num;
}
let numb = parseNumberFromString("a");
console.log(numb);

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} diag
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelipidedDiagonal(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Enter Number only";
  }
  let diag = Math.pow(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2), 0.5);
  return diag;
}
let di = getParallelipidedDiagonal(1, 2, 3);
console.log(di);

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number} rd
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  if (isNaN(num) || isNaN(pow)) {
    return "Enter Number only";
  }
  let multipler = Math.pow(10, pow);
  let rd = Math.round(num / multipler) * multipler;
  return rd;
}
let round = roundToPowerOfTen(1234, 3);
console.log(round);

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
let prime = isPrime(17);
console.log(prime);

/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  let convert = parseInt(value);
  if (isNaN(convert)) {
    return def;
  } else {
    return convert;
  }
}
let cov = toNumber(42, 0);
console.log(cov);

module.exports = {
  getRectangleArea: getRectangleArea,
  getCicleCircumference: getCicleCircumference,
  getAverage: getAverage,
  getDistanceBetweenPoints: getDistanceBetweenPoints,
  getLinearEquationRoot: getLinearEquationRoot,
  getAngleBetweenVectors: getAngleBetweenVectors,
  getLastDigit: getLastDigit,
  parseNumberFromString: parseNumberFromString,
  getParallelipidedDiagonal: getParallelipidedDiagonal,
  roundToPowerOfTen: roundToPowerOfTen,
  isPrime: isPrime,
  toNumber: toNumber,
};
