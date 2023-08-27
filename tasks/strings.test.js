const strings = require("./strings");

describe("Strings", () => {
  describe("concatenateStrings", () => {
    test("will concatenate 2 strings", () => {
      const stringValues = {
        value1: "aa",
        value2: "bb",
        correctString: "aabb",
      };
      expect(
        strings.concatenateStrings(stringValues.value1, stringValues.value2)
      ).toEqual(stringValues.correctString);
    });
    test("will return one string if a null value or undefined value exists", () => {
      const stringValues = {
        value1: undefined,
        value2: "bb",
      };
      expect(
        strings.concatenateStrings(stringValues.value1, stringValues.value2)
      ).toEqual(stringValues.value2);
    });
  });

  describe("getStringLength", () => {
    test("will get length of string", () => {
      const stringValue = {
        value: "aaaaa",
        correctLength: 5,
      };

      expect(strings.getStringLength(stringValue.value)).toBe(
        stringValue.correctLength
      );
    });
  });

  describe("getStringFromTemplate", () => {
    test("will get a string from template", () => {
      const stringTemplate = {
        firstName: "John",
        lastName: "Doe",
        correcttemplate: "Hello, John Doe!",
      };
      expect(
        strings.getStringFromTemplate(
          stringTemplate.firstName,
          stringTemplate.lastName
        )
      ).toEqual(stringTemplate.correcttemplate);
    });

    test("will handle empty value", () => {
      const stringTemplate = {
        firstName: "",
        lastName: "Doe",
        correcttemplate: "Hello,  Doe!",
      };
      expect(
        strings.getStringFromTemplate(
          stringTemplate.firstName,
          stringTemplate.lastName
        )
      ).toEqual(stringTemplate.correcttemplate);
    });
  });

  describe("getFirstChar", () => {
    test("will get first character from a string", () => {
      const stringValue = {
        value: "cat",
        correctResult: "c",
      };
      expect(strings.getFirstChar(stringValue.value)).toEqual(
        stringValue.correctResult
      );
    });

    test("will get first character from a string", () => {
      const stringValue = {
        value: "",
        correctResult: undefined,
      };
      expect(strings.getFirstChar(stringValue.value)).toEqual(
        stringValue.correctResult
      );
    });
  });

  describe("removeLeadingAndTrailingWhitespaces", () => {
    test("will remove leading and trailing spaces", () => {
      const stringValue = {
        value: "  Abracadabra",
        correctResult: "Abracadabra",
      };
      expect(
        strings.removeLeadingAndTrailingWhitespaces(stringValue.value)
      ).toEqual(stringValue.correctResult);
    });
    test("will remove leading and trailing spaces", () => {
      const stringValue = {
        value: "\tHello, World! ",
        correctResult: "Hello, World!",
      };
      expect(
        strings.removeLeadingAndTrailingWhitespaces(stringValue.value)
      ).toEqual(stringValue.correctResult);
    });
  });

  describe("repeatString", () => {
    test("will repeat a string by a give number", () => {
      const repeatedString = {
        value: "A",
        number: 5,
        correctResults: "AAAAA",
      };
      expect(
        strings.repeatString(repeatedString.value, repeatedString.number)
      ).toEqual(repeatedString.correctResults);
    });
    test("will repeat a string by a give number", () => {
      const repeatedString = {
        value: 5,
        number: "A",
        output: "Enter value Not a Number",
      };
      expect(
        strings.repeatString(repeatedString.value, repeatedString.number)
      ).toEqual(repeatedString.output);
    });
  });

  describe("removeFirstOccurrences", () => {
    test("will remove first occurence of string", () => {
      const stringValue = {
        str: "To be or not to be",
        value: "not",
        output: "To be or to be",
      };
      expect(
        strings.removeFirstOccurrences(stringValue.str, stringValue.value)
      ).toEqual(stringValue.output);
    });
    test("will remove first occurence of string", () => {
      const stringValue = {
        str: "To be or not to be",
        value: "",
        output: "To be or not to be",
      };
      expect(
        strings.removeFirstOccurrences(stringValue.str, stringValue.value)
      ).toEqual(stringValue.output);
    });
  });

  describe("unbracketTag", () => {
    test("will remove the first and last brackets", () => {
      const tag = {
        str: "<div>",
        correntResults: "div",
      };
      expect(strings.unbracketTag(tag.str)).toEqual(tag.correntResults);
    });
    test("will remove the first and last brackets", () => {
      const tag = {
        str: " <span> ",
        correntResults: "span",
      };
      expect(strings.unbracketTag(tag.str)).toEqual(tag.correntResults);
    });
  });

  describe("convertToUpperCase", () => {
    test("will convert string to upper case", () => {
      const charString = {
        str: "Thunderstruck",
        results: "THUNDERSTRUCK",
      };
      expect(strings.convertToUpperCase(charString.str)).toEqual(
        charString.results
      );
    });
    test("will convert string to upper case", () => {
      const charString = {
        str: 999,
        results: "Enter letters of a value",
      };
      expect(strings.convertToUpperCase(charString.str)).toEqual(
        charString.results
      );
    });
  });

  describe("extractEmails", () => {
    test("will extract email addresses from a string", () => {
      const strvalue = {
        str: "angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com",
        arrStr: [
          "angus.young@gmail.com",
          "brian.johnson@hotmail.com",
          "bon.scott@yahoo.com",
        ],
      };
      expect(strings.extractEmails(strvalue.str)).toEqual(strvalue.arrStr);
    });
  });

  describe("getRectangleString", () => {
    test("will get rectangle string", () => {
      const stringRectangle = {
        width: 12,
        height: 3,
        output:
          "'┌──────────┐\\n'+\n" + "'│          │\\n'+\n" + "'└──────────┘\\n'",
      };
      expect(
        strings.getRectangleString(
          stringRectangle.width,
          stringRectangle.height
        )
      ).toMatch(stringRectangle.output);
    });
    test("will get rectangle string", () => {
      const stringRectangle = {
        width: "yy",
        height: 3,
        output: "Uses Numeric values Only",
      };
      expect(
        strings.getRectangleString(
          stringRectangle.width,
          stringRectangle.height
        )
      ).toEqual(stringRectangle.output);
    });
  });

  describe("encodeToRot13", () => {
    test("will Encode specified string with ROT13 cipher", () => {
      const strValue = {
        str: "hello",
        output: "uryyb",
      };
      expect(strings.encodeToRot13(strValue.str)).toEqual(strValue.output);
    });
  });

  describe("isString", () => {
    test("will Return true if the value is string; otherwise false", () => {
      const stringValue = {
        value: "test",
      };
      expect(strings.isString(stringValue.value)).toBeTruthy();
    });
    test("will Return true if the value is string; otherwise false", () => {
      const stringValue = {
        value: new String("test"),
      };
      expect(strings.isString(stringValue.value)).toBeTruthy();
    });
    test("will Return true if the value is string; otherwise false", () => {
      const stringValue = {
        value: null,
      };
      expect(strings.isString(stringValue.value)).toBeFalsy();
    });
    test("will Return true if the value is string; otherwise false", () => {
      const stringValue = {
        value: [],
      };
      expect(strings.isString(stringValue.value)).toBeFalsy();
    });
  });

  describe("getCardId", () => {
    test("will return playid card id", () => {
      const stringValues = {
        value: "Q♠",
        output: 50,
      };
      expect(strings.getCardId(stringValues.value)).toBe(stringValues.output);
    });
    test("will return playid card id", () => {
      const stringValues = {
        value: "3♣",
        output: 2,
      };
      expect(strings.getCardId(stringValues.value)).toBe(stringValues.output);
    });
  });
});
