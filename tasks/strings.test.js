const strings = require('./strings');

// concantenate string test
test('concatenates function exists', () => {
    expect(strings.concatenateStrings()).toBeDefined();
});

test('concatenates of two strings', () => {
    expect(strings.concatenateStrings( 'aa', 'bb')).toEqual('aabb');
});
test('concatenates of two strings', () => {
    expect(strings.concatenateStrings( 'aa', '')).toEqual('aa');
});
test('concatenates of two strings', () => {
    expect(strings.concatenateStrings( '', 'bb')).toEqual('bb');
});

//length of given string test

test('length of given string function exist', () => {
    expect(strings.getStringLength).toBeDefined();
});

test('length of a give string test', () => {
    const result = strings.getStringLength("");
    expect(result).toBe(0);
});
test('length of a give string test', () => {
    const result = strings.getStringLength("aaaaa");
    expect(result).toBe(5);
});
test('length of a give string test', () => {
    const result = strings.getStringLength("b");
    expect(result).toBe(1);
});

//the result of string template and given parameters firstName and lastName test

test('string template exists', () => {
    expect('strings.getStringFromTemplate').toBeDefined();
});
test('return string template', () => {
    expect(strings.getStringFromTemplate('John','Doe' )).toEqual('Hello, John Doe!');
});
test('return string template', () => {
    expect(strings.getStringFromTemplate('Chuck','Norris' )).toEqual('Hello, Chuck Norris!');
});



//Extracts a name from template string 'Hello, First_Name Last_Name!' test
test('Extracts a name from template string function exists' , () => {
    expect(strings.extractNameFromTemplate).toBeDefined();
});
test('Extracts a name from template string function test' , () => {
    expect(strings.extractNameFromTemplate('Hello, John Doe!')).toEqual('John Doe');
});
test('Extracts a name from template string function test' , () => {
    expect(strings.extractNameFromTemplate('Hello, Chuck Norris!')).toEqual('Chuck Norris');
});


//Returns a first char of the given string test
test('Returns a first char of the given string function exists', () => {
    expect(strings.getFirstChar).toBeDefined();
});
test('Returns a first char of the given string function test', () => {
    expect(strings.getFirstChar('John Doe')).toEqual('J');
});
test('Returns a first char of the given string function test', () => {
    expect(strings.getFirstChar('cat')).toEqual('c');
});

//Removes a leading and trailing whitespace characters from string test
test('Removes a leading and trailing whitespace characters from string function exist', () => {
    expect(strings.removeLeadingAndTrailingWhitespaces).toBeDefined();
});
test('Removes a leading and trailing whitespace characters from string function test', () => {
    expect(strings.removeLeadingAndTrailingWhitespaces('  Abracadabra')).toEqual('Abracadabra');
});
test('Removes a leading and trailing whitespace characters from string function test', () => {
    expect(strings.removeLeadingAndTrailingWhitespaces('\tHello, World! ')).toEqual('Hello, World!');
});
test('Removes a leading and trailing whitespace characters from string function test', () => {
    expect(strings.removeLeadingAndTrailingWhitespaces('cat')).toEqual('cat');
});


//Returns a string that repeated the specified number of times test
test('Returns a string that repeated the specified number of times function exists', () => {
    expect(strings.repeatString).toBeDefined();
});
test('Returns a string that repeated the specified number of times function test', () => {
    expect(strings.repeatString('A', 5)).toEqual('AAAAA');
});
test('Returns a string that repeated the specified number of times function test', () => {
    expect(strings.repeatString('cat', 3)).toEqual('catcatcat');
});


//Remove the first occurrence of string inside another string test
test('Remove the first occurrence of string inside another string function exists', () => {
    expect(strings.removeFirstOccurrences).toBeDefined();
});
test('Remove the first occurrence of string inside another string function test', () => {
    expect(strings.removeFirstOccurrences('To be or not to be', 'not')).toEqual('To be or to be');
});
test('Remove the first occurrence of string inside another string function test', () => {
    expect(strings.removeFirstOccurrences('I like legends', 'end')).toEqual('I like legs',);
});
test('Remove the first occurrence of string inside another string function test', () => {
    expect(strings.removeFirstOccurrences('ABABAB','BA')).toEqual('ABAB');
});


//Remove the first and last angle brackets from tag string test
test('Remove the first and last angle brackets from tag string function exists', () => {
    expect(strings.unbracketTag).toBeDefined();
});
test('Remove the first and last angle brackets from tag string function test', () => {
    expect(strings.unbracketTag('<div>')).toEqual('div');
});
test('Remove the first and last angle brackets from tag string function test', () => {
    expect(strings.unbracketTag('<span>')).toEqual('span');
});
test('Remove the first and last angle brackets from tag string function test', () => {
    expect(strings.unbracketTag('<a>')).toEqual('a');
});


//Converts all characters of the specified string into the upper case
test('Converts all characters of the specified string into the upper case function exists', () => {
    expect(strings.convertToUpperCase).toBeDefined();
});
test('Converts all characters of the specified string into the upper case function test', () => {
    expect(strings.convertToUpperCase('Thunderstruck')).toEqual('THUNDERSTRUCK');
});
test('Converts all characters of the specified string into the upper case function test', () => {
    expect(strings.convertToUpperCase('abcdefghijklmnopqrstuvwxyz')).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});


//Extracts e-mails from single string with e-mails list delimeted by semicolons test
test('Extracts e-mails from single string with e-mails list delimeted by semicolons function exists', () => {
    expect(strings.extractEmails).toBeDefined();
});
test('Extracts e-mails from single string with e-mails list delimeted by semicolons function test', () => {
    expect(strings.extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com')).toEqual(['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']);
});
test('Extracts e-mails from single string with e-mails list delimeted by semicolons function test', () => {
    expect(strings.extractEmails('info@gmail.com')).toEqual(['info@gmail.com']);
});


//Returns the string representation of rectangle with specified width and height using pseudograhic chars
test('string representation of rectangle with specified width and height using pseudograhic chars function exists', () => {
    expect(strings.getRectangleString).toBeDefined();
});
test('string representation of rectangle with specified width and height using pseudograhic chars function test', () => {
    expect(strings.getRectangleString(6,4)).toMatch(
        "'┌────┐\\n'+\n" +
        "'│    │\\n'+\n" +
        "'│    │\\n'+\n" +
        "'└────┘\\n'"
    );
});
test('string representation of rectangle with specified width and height using pseudograhic chars function test', () => {
    expect(strings.getRectangleString(2,2)).toMatch(
        "'┌┐\\n'+\n" +
        "'└┘\\n'"
    );
});
test('string representation of rectangle with specified width and height using pseudograhic chars function test', () => {
    expect(strings.getRectangleString(12, 3)).toMatch(
        "'┌──────────┐\\n'+\n" +
        "'│          │\\n'+\n" +
        "'└──────────┘\\n'"
    );
});


//Encode specified string with ROT13 cipher test

test('Encode specified string with ROT13 cipher function exist', () => {
    expect(strings.encodeToRot13).toBeDefined();
});
test('Encode specified string with ROT13 cipher function test', () => {
    expect(strings.encodeToRot13('hello')).toMatch('uryyb');
});
test('Encode specified string with ROT13 cipher function test', () => {
    expect(strings.encodeToRot13('Why did the chicken cross the road?')).toMatch('Jul qvq gur puvpxra pebff gur ebnq?');
});
test('Encode specified string with ROT13 cipher function test', () => {
    expect(strings.encodeToRot13('Gb trg gb gur bgure fvqr!')).toMatch('To get to the other side!');
});
test('Encode specified string with ROT13 cipher function test', () => {
    expect(strings.encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')).toMatch('NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm');
});


//Returns true if the value is string; otherwise false.
test('Returns true if the value is string; otherwise false function exists', () =>{
    expect(strings.isString).toBeDefined();
});
test('Returns true if the value is string; otherwise false function test', () =>{
    expect(strings.isString('test')).toBeTruthy();
});
test('Returns true if the value is string; otherwise false function test', () =>{
    expect(strings.isString()).toBeFalsy();
});
test('Returns true if the value is string; otherwise false function test', () =>{
    expect(strings.isString([])).toBeFalsy();
});
test('Returns true if the value is string; otherwise false function test', () =>{
    expect(strings.isString(new String('test'))).toBeTruthy();
});


//Returns playid card id.
test('Returns playid card id function exists', () => {
    expect(strings.getCardId).toBeDefined();
});
test('Returns playid card id function test', () => {
    expect(strings.getCardId('A♣')).toBe(0);
});
test('Returns playid card id function test', () => {
    expect(strings.getCardId('2♣')).toBe(1);
});
test('Returns playid card id function test', () => {
    expect(strings.getCardId('3♣')).toBe(2);
});
test('Returns playid card id function test', () => {
    expect(strings.getCardId('Q♠')).toBe(50);
});
test('Returns playid card id function test', () => {
    expect(strings.getCardId('K♠')).toBe(51);
});