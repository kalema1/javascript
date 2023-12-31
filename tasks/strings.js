/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/

const { isNumber } = require("lodash");

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string} concat
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  if (value1 === null || value1 == undefined) {
    return value2;
  }
  if (value2 === null || value2 == undefined) {
    return value1;
  }
  let concat = value1 + value2;
  return concat;
}

let results = concatenateStrings("", "bb");
console.log(results);

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number} Strlen
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  /* let strLen = value.length; */
  return value.length;
}
let len = getStringLength("aaaaa");
console.log(len);

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string} strTemp
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  let strTemp = `Hello, ${firstName} ${lastName}!`;
  return strTemp;
}
let temp = getStringFromTemplate("Doe", "");
console.log(temp);

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string} extractedName
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  let extractedName = value.slice(7, -1);
  return extractedName;
}
let extNme = extractNameFromTemplate("Hello, Chuck Norris!");
console.log(extNme);

/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string} firstChar
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  let firstChar = value[0];
  return firstChar;
}
let char = getFirstChar(`John Doe`);
console.log(char);

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  let newStr = value.trim();
  return newStr;
}
let remLeadTrail = removeLeadingAndTrailingWhitespaces("cat");
console.log(remLeadTrail);

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string} repeatStr
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  if (typeof count !== "number") {
    return "Enter value Not a Number";
  }
  let repeatStr = value.repeat(count);
  return repeatStr;
}
let rep = repeatString("A", 5);
console.log(rep);

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string} occur
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  let index = str.indexOf(value);
  let occur = str.slice(0, index) + str.slice(index + value.length).trim();
  return occur;
}
let remFirst = removeFirstOccurrences("I like legends", "end");
console.log(remFirst);

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string} unbrkt
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  let unbrkt = str.trim().slice(1, -1);
  return unbrkt;
}
let uncova = unbracketTag("<div> ");
console.log(uncova);

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string} convert
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  if (typeof str !== "string") {
    return "Enter letters of a value";
  }
  let convert = str.toUpperCase();
  return convert;
}
let toUpp = convertToUpperCase("Thunderstruck");
console.log(toUpp);

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array} ar
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
 *     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  let ar = str.split(";");
  return ar;
}
let emails = extractEmails(
  "angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com"
);
console.log(emails);

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string} rectangle
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const topLeft = "┌";
  const topRight = "┐";
  const bottomLeft = "└";
  const bottomRight = "┘";
  const horizontalLine = "─";
  const verticalLine = "│";
  const space = " ";
  let rectangle = "";
  if (typeof width !== "number" || typeof height !== "number") {
    return "Uses Numeric values Only";
  }

  rectangle +=
    "'" +
    topLeft +
    horizontalLine.repeat(width - 2) +
    topRight +
    "\\n'+" +
    "\n";
  for (let i = 0; i < height - 2; i++) {
    rectangle +=
      "'" +
      verticalLine +
      space.repeat(width - 2) +
      verticalLine +
      "\\n'+" +
      "\n";
  }
  rectangle +=
    "'" +
    bottomLeft +
    horizontalLine.repeat(width - 2) +
    bottomRight +
    "\\n'" +
    "\n";
  return rectangle;
}
let rect = getRectangleString(12, 3);
console.log(rect);

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string} encoded
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' =>
 *          'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const alphaOriginal =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !?";
  const alphaRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm !?";
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    const index = alphaOriginal.indexOf(str[i]);
    encoded += alphaRot13[index];
  }
  return encoded;
}
let rot13 = encodeToRot13("Why did the chicken cross the road?");
console.log(rot13);

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof value === "string" || value instanceof String) {
    return true;
  } else {
    return false;
  }
}
let s = isString(new String("test"));
console.log(s);

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * Try to solve task without using card stack as pattern,
 * e.g. let pattern = ['A♣',...,'K♠'].
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const symbols = "♣♦♥♠";
  const cat = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let symbolIndex = symbols.indexOf(value[1]);
  let catIndex = cat.indexOf(value[0]);
  let catLen = cat.length;
  let position = symbolIndex * catLen + catIndex;

  return position;
}
let i = getCardId("2♣");
console.log(i);

module.exports = {
  concatenateStrings: concatenateStrings,
  getStringLength: getStringLength,
  getStringFromTemplate: getStringFromTemplate,
  extractNameFromTemplate: extractNameFromTemplate,
  getFirstChar: getFirstChar,
  removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
  repeatString: repeatString,
  removeFirstOccurrences: removeFirstOccurrences,
  unbracketTag: unbracketTag,
  convertToUpperCase: convertToUpperCase,
  extractEmails: extractEmails,
  getRectangleString: getRectangleString,
  encodeToRot13: encodeToRot13,
  isString: isString,
  getCardId: getCardId,
};
