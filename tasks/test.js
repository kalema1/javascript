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