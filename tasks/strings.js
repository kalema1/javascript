
/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/


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
    let concat = value1 + value2;
    return concat;
  }

  let results = concatenateStrings('Hello', 'world');
  console.log(results);
  
  /**
   * Returns the length of given string.
   *
   * @param {string} value
   * @return {number}
   *
   * @example
   *   'aaaaa' => 5
   *   'b'     => 1
   *   ''      => 0
   */
  function getStringLength(value) {
    let strLen = value.length;
    return strLen;
  }
  let len = getStringLength('hello');
  console.log(len);
  
  /**
   * Returns the result of string template and given parameters firstName and lastName.
   * Please do not use concatenation, use template string :
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
   *
   * @param {string} firstName
   * @param {string} lastName
   * @return {string}
   *
   * @example
   *   'John','Doe'      => 'Hello, John Doe!'
   *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
   */
  function getStringFromTemplate(firstName, lastName) {
    let strTemp = `Hello, ${firstName} ${lastName}`;
    return strTemp;
  }
  let temp = getStringFromTemplate('john', 'Doe');
  console.log(temp);
  
  /**
   * Extracts a name from template string 'Hello, First_Name Last_Name!'.
   *
   * @param {string} value
   * @return {string}
   *
   * @example
   *   'Hello, John Doe!' => 'John Doe'
   *   'Hello, Chuck Norris!' => 'Chuck Norris'
   */
  function  extractNameFromTemplate(value) {
    let extractedName = value.slice(7);
    return extractedName;
  }
  let extNme = extractNameFromTemplate(`hello, John Doe`);
  console.log(extNme);
  
  /**
   * Returns a first char of the given string.
   *
   * @param {string} value
   * @return {string}
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
  let remLeadTrail = removeLeadingAndTrailingWhitespaces('  Abracadabra');
  console.log(remLeadTrail);
  
  /**
   * Returns a string that repeated the specified number of times.
   *
   * @param {string} value
   * @param {string} count
   * @return {string}
   *
   * @example
   *   'A', 5  => 'AAAAA'
   *   'cat', 3 => 'catcatcat'
   */
  function repeatString(value, count) {
    let repeatStr = value.repeat(count);
    return repeatStr;
  }
  let rep =repeatString('cat', 5);
  console.log(rep);
  
  /**
   * Remove the first occurrence of string inside another string
   *
   * @param {string} str
   * @param {string} value
   * @return {string}
   *
   * @example
   *   'To be or not to be', 'not'  => 'To be or to be'
   *   'I like legends', 'end' => 'I like legs',
   *   'ABABAB','BA' => 'ABAB'
   */
  function removeFirstOccurrences(str, value)  {
    let index = str.indexOf(value);
    if (index === -1){
      return str;
    }
    return str.slice(0, index) + (str.slice(index + value.length).trim());
  }
  let remFirst = removeFirstOccurrences('To be or not to be', 'not');
  console.log(remFirst);
  
  /**
   * Remove the first and last angle brackets from tag string
   *
   * @param {string} str
   * @return {string}
   *
   * @example
   *   '<div>' => 'div'
   *   '<span>' => 'span'
   *   '<a>' => 'a'
   */
  function unbracketTag(str) {
    return str.slice(1, -1);
  }
  let uncova = unbracketTag('<div>');
  console.log(uncova);
  
  
  /**
   * Converts all characters of the specified string into the upper case
   *
   * @param {string} str
   * @return {string}
   *
   * @example
   *   'Thunderstruck' => 'THUNDERSTRUCK'
   *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   */
  function convertToUpperCase(str) {
    return str.toUpperCase();
  }
  let toUpp = convertToUpperCase('Thunderstruck');
  console.log(toUpp);
  
  /**
   * Extracts e-mails from single string with e-mails list delimeted by semicolons
   *
   * @param {string} str
   * @return {array}
   *
   * @example
   *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
   *     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
   *   'info@gmail.com' => ['info@gmail.com']
   */
  function extractEmails(str) {
    return str.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
  }
  let emails = extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com');
  console.log(emails);
  
  /**
   * Returns the string representation of rectangle with specified width and height
   * using pseudograhic chars
   *
   * @param {number} width
   * @param {number} height
   * @return {string}
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
    const topLeft = '┌';
    const topRight = '┐';
    const bottomLeft = '└';
    const bottomRight = '┘';
    const horizontalLine = '─';
    const verticalLine = '|';
    const space = ' ';
    let rectangle = '';

    rectangle += '\'' + topLeft + horizontalLine.repeat(width - 2) + topRight + '\\n\'+' + '\n';
    for (let i = 0; i < height - 2; i++){
      rectangle += '\'' + verticalLine + space.repeat(width - 2) + verticalLine +  '\\n\'+' + '\n';
    }
    rectangle += '\'' + bottomLeft + horizontalLine.repeat(width - 2) + bottomRight + '\\n\'' + '\n';
    return rectangle;

  }
  let rect = getRectangleString(12,3);
  console.log(rect);
  
  /**
   * Encode specified string with ROT13 cipher
   * See details:  https://en.wikipedia.org/wiki/ROT13
   *
   * @param {string} str
   * @return {string}
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
    const alphaOriginal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const alphaRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let encoded = "";

    for (let i = 0; i < str.length; i++){
      const index = alphaOriginal.indexOf(str[i]);
      encoded += alphaRot13[index];
    }
    return encoded;

  }
  let rot13 = encodeToRot13("hello");
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
    if (typeof value === 'string'){
      return true;
    }
    else {
      return false;
    }
  }
  let s = isString('test');
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
    const arr = [
      'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
      'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
      'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
      'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ]
    const index = arr.indexOf(value);
    return index;
  }
  let i = getCardId('K♠');
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
    getCardId: getCardId
  };