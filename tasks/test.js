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