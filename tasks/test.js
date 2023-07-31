function concatenateStrings(value1, value2) {
    let concat = value1 + value2;
    return concat;
    throw new Error('Not implemented');
  }

  let results = concatenateStrings('Hello', 'world');
  console.log(results);


  function getStringLength(value) {
    let strLen = value.length;
    return strLen;
    throw new Error('Not implemented');
  }
  let len = getStringLength('hello');
  console.log(len);


  function getStringFromTemplate(firstName, lastName) {
    let strTemp = `Hello, ${firstName} ${lastName}`;
    return strTemp;
    throw new Error('Not implemented');
  }
  let temp = getStringFromTemplate('john', 'Doe');
  console.log(temp);

  function  extractNameFromTemplate(value) {
    let extractedName = value.slice(7);
    return extractedName;
    throw new Error('Not implemented');
  }
  let extNme = extractNameFromTemplate(`hello, Chuck Norris`);
  console.log(extNme);


  function getFirstChar(value) {
    let firstChar = value[0];
    return firstChar;
    throw new Error('Not implemented');
  }
  let char = getFirstChar(`John Doe`);
  console.log(char);

  function removeLeadingAndTrailingWhitespaces(value) {
    let newStr = value.trim();
    return newStr;
    throw new Error('Not implemented');
  }
  let remLeadTrail = removeLeadingAndTrailingWhitespaces('\tHello, World! ');
  console.log(remLeadTrail);

  function repeatString(value, count) {
    let repeatStr = value.repeat(count);
    return repeatStr;
    throw new Error('Not implemented');
  }
  let rep =repeatString('A', 5);
  console.log(rep);

  function removeFirstOccurrences(str, value)  {
    let index = str.indexOf(value);
    if (index === -1){
      return str;
    }
    return str.slice(0, index) + (str.slice(index + value.length).trim());
    throw new Error('Not implemented');
  }
  let remFirst = removeFirstOccurrences('To be or not to be', 'not');
  console.log(remFirst);


  function unbracketTag(str) {
    return str.slice(1, -1);
    throw new Error('Not implemented');
  }
  let uncova = unbracketTag('<span>');
  console.log(uncova);

  function convertToUpperCase(str) {
    return str.toUpperCase();
    throw new Error('Not implemented');
  }
  let toUpp = convertToUpperCase('Thunderstruck');
  console.log(toUpp);

  function extractEmails(str) {
    return str.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
    throw new Error('Not implemented');
  }
  let emails = extractEmails('info@gmail.com');
  console.log(emails);