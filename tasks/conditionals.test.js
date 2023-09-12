const conditionals = require("./conditionals");

describe("conditionals", () => {
  describe("getFizzBuzz", () => {
    test("Returns the 'Fizz','Buzz' or an original number", () => {
      [
        {
          num: 2,
          expected: 2,
        },
        {
          num: 3,
          expected: "Fizz",
        },
        {
          num: 5,
          expected: "Buzz",
        },
        {
          num: 15,
          expected: "FizzBuzz",
        },
      ].forEach((data) => {
        expect(conditionals.getFizzBuzz(data.num)).toEqual(data.expected);
      });
    });
    test("throw an errow if not a number", () => {
      const FizzBuzz = {
        num: "aa",
      };
      expect(() => conditionals.getFizzBuzz(FizzBuzz.num)).toThrow();
    });
  });

  describe("getFactorial", () => {
    test("will Return the factorial of the integer n", () => {
      const factorial = {
        n: 5,
        correctResults: 120,
      };
      expect(conditionals.getFactorial(factorial.n)).toBe(
        factorial.correctResults
      );
    });
    test("will throw if not  a number", () => {
      const factorial = {
        n: "ee",
      };
      expect(() => conditionals.getFactorial(factorial.n)).toThrow();
    });
  });

  describe("getSumBetweenNumbers", () => {
    test("will return the sum of integer numbers between n1 and n2 (inclusive)", () => {
      const sumNumbers = {
        n1: 5,
        n2: 10,
        correctResults: 45,
      };
      expect(
        conditionals.getSumBetweenNumbers(sumNumbers.n1, sumNumbers.n2)
      ).toBe(sumNumbers.correctResults);
    });
    test("will throw an errow if not a number", () => {
      const sumNumbers = {
        n1: "t",
        n2: 10,
      };
      expect(() =>
        conditionals.getSumBetweenNumbers(sumNumbers.n1, sumNumbers.n2)
      ).toThrow();
    });
  });

  describe("isTriangle", () => {
    test("will return true, if a triangle can be built with the specified sides a,b,c", () => {
      const triangle = {
        a: 10,
        b: 10,
        c: 10,
      };
      expect(
        conditionals.isTriangle(triangle.a, triangle.b, triangle.c)
      ).toBeTruthy();
    });
    test("will return false, if a triangle can not be built with the specified sides a,b,c", () => {
      const triangle = {
        a: 1,
        b: 2,
        c: 3,
      };
      expect(
        conditionals.isTriangle(triangle.a, triangle.b, triangle.c)
      ).toBeFalsy();
    });
    test("will throw if not a number", () => {
      const triangle = {
        a: "ff",
        b: 10,
        c: 10,
      };
      expect(() =>
        conditionals.isTriangle(triangle.a, triangle.b, triangle.c)
      ).toThrow();
    });
  });

  describe("doRectanglesOverlap", () => {
    test("will return true, if two specified axis-aligned rectangles overlap", () => {
      const rect1 = {
        top: 0,
        left: 0,
        width: 10,
        height: 10,
      };
      const rect2 = {
        top: 5,
        left: 5,
        width: 20,
        height: 20,
      };
      expect(conditionals.doRectanglesOverlap(rect1, rect2)).toBeTruthy();
    });
    test("will return true, if two specified axis-aligned rectangles overlap", () => {
      const rect1 = {
        top: 0,
        left: 0,
        width: 10,
        height: 10,
      };
      const rect2 = {
        top: 20,
        left: 20,
        width: 20,
        height: 20,
      };
      expect(conditionals.doRectanglesOverlap(rect1, rect2)).toBeFalsy();
    });
  });

  describe("isInsideCircle", () => {
    test("will return true, if point lies inside the circle", () => {
      const circle = { center: { x: 0, y: 0 }, radius: 10 };
      const point = { x: 0, y: 0 };
      expect(conditionals.isInsideCircle(circle, point)).toBeTruthy();
    });
    test("will return false, if point lies outside the circle", () => {
      const circle = { center: { x: 0, y: 0 }, radius: 10 };
      const point = { x: 10, y: 10 };
      expect(conditionals.isInsideCircle(circle, point)).toBeFalsy();
    });
  });

  describe("findFirstSingleChar", () => {
    test("will return the first non repeated char in the specified strings", () => {
      const string = {
        str: "abracadabra",
        correctResults: "c",
      };
      expect(conditionals.findFirstSingleChar(string.str)).toEqual(
        string.correctResults
      );
    });
    test("will return null if no first non repeated char in the specified strings", () => {
      const string = {
        str: "entente",
      };
      expect(conditionals.findFirstSingleChar(string.str)).toBeNull();
    });
  });

  describe("getIntervalString", () => {
    test("will return the string representation of math interval, specified by two points", () => {
      [
        {
          a: 0,
          b: 1,
          isStartIncluded: true,
          isEndIncluded: true,
          correctResults: "[0, 1]",
        },
        {
          a: 0,
          b: 1,
          isStartIncluded: true,
          isEndIncluded: false,
          correctResults: "[0, 1)",
        },
        {
          a: 0,
          b: 1,
          isStartIncluded: false,
          isEndIncluded: true,
          correctResults: "(0, 1]",
        },
        {
          a: 0,
          b: 1,
          isStartIncluded: false,
          isEndIncluded: false,
          correctResults: "(0, 1)",
        },
        {
          a: 5,
          b: 3,
          isStartIncluded: true,
          isEndIncluded: true,
          correctResults: "[3, 5]",
        },
      ].forEach((data) => {
        expect(
          conditionals.getIntervalString(
            data.a,
            data.b,
            data.isStartIncluded,
            data.isEndIncluded
          )
        ).toEqual(data.correctResults);
      });
    });
  });

  describe("reverseString", () => {
    test("will Reverse the specified string", () => {
      const reverseString = {
        str: "The quick brown fox jumps over the lazy dog",
        correctResults: "god yzal eht revo spmuj xof nworb kciuq ehT",
      };
      expect(conditionals.reverseString(reverseString.str)).toEqual(
        reverseString.correctResults
      );
    });
  });

  describe("reverseInteger", () => {
    test("Reverse the specified integer number", () => {
      const reverseInterger = {
        num: 12345,
        correctResults: 54321,
      };
      expect(conditionals.reverseInteger(reverseInterger.num)).toEqual(
        reverseInterger.correctResults
      );
    });
    test("will throw an error if not a number", () => {
      const reverseInterger = {
        num: "abcde",
      };
      expect(() => conditionals.reverseInteger(reverseInterger.num)).toThrow();
    });
  });

  describe("isCreditCardNumber", () => {
    test(" will Validate the CCN (credit card number) and return true if CCN is valid", () => {
      const CreditCardNumber = 79927398713;
      expect(conditionals.isCreditCardNumber(CreditCardNumber)).toBeTruthy();
    });
    test(" will Validate the CCN (credit card number) and return true if CCN is valid", () => {
      const CreditCardNumber = 4916123456789012;
      expect(conditionals.isCreditCardNumber(CreditCardNumber)).toBeFalsy();
    });
  });

  describe("getDigitalRoot", () => {
    test("will return the digital root of integer", () => {
      const DigitalRoot = { num: 12345, correctResults: 6 };
      expect(conditionals.getDigitalRoot(DigitalRoot.num)).toBe(
        DigitalRoot.correctResults
      );
    });
    test("will throw an error if not a number", () => {
      const DigitalRoot = { num: "dd" };
      expect(() => conditionals.getDigitalRoot(DigitalRoot.num)).toThrow();
    });
  });
  describe("isBracketsBalanced", () => {
    test("will return true if the specified string has the balanced brackets", () => {
      [
        {
          balancedBracket: "",
        },
        {
          balancedBracket: "[]",
        },
        {
          balancedBracket: "{}",
        },
        {
          balancedBracket: "()",
        },
        {
          balancedBracket: "[[][][[]]]",
        },
        {
          balancedBracket: "{[(<{[]}>)]}",
        },
      ].forEach((data) => {
        expect(
          conditionals.isBracketsBalanced(data.balancedBracket)
        ).toBeTruthy();
      });
    });
    test("will return false if the specified string has no balanced brackets", () => {
      [
        {
          unBalancedBracket: "[[]",
        },
        {
          unBalancedBracket: "][",
        },
        {
          unBalancedBracket: "[[][]][",
        },
        {
          unBalancedBracket: "{)",
        },
      ].forEach((data) => {
        expect(
          conditionals.isBracketsBalanced(data.unBalancedBracket)
        ).toBeFalsy();
      });
    });
  });

  describe("timespanToHumanString", () => {
    test("Returns the human readable string of time period specified by the start and end time", () => {
      [
        {
          startDate: "2000-01-01 01:00:00.100",
          endDate: "2000-01-01 01:00:00.200",
          correctResults: "a few seconds ago",
        },
        {
          startDate: "2000-01-01 01:00:00.100",
          endDate: "2000-01-02 03:00:05.000",
          correctResults: "a day ago",
        },
        {
          startDate: "2000-01-01 01:00:00.100",
          endDate: "2015-01-02 03:00:05.000",
          correctResults: "15 years ago",
        },
      ].forEach((data) => {
        expect(
          conditionals.timespanToHumanString(
            new Date(data.startDate),
            new Date(data.endDate)
          )
        ).toEqual(data.correctResults);
      });
    });
  });

  describe("toNaryString", () => {
    test("Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of  anumber", () => {
      [
        {
          num: 1024,
          n: 2,
          correctResults: "10000000000",
        },
        {
          num: 6561,
          n: 3,
          correctResults: "100000000",
        },
        {
          num: 365,
          n: 2,
          correctResults: "101101101",
        },
        {
          num: 365,
          n: 3,
          correctResults: "111112",
        },
        {
          num: 1024,
          n: 2,
          correctResults: "10000000000",
        },
        {
          num: 365,
          n: 4,
          correctResults: "11231",
        },
        {
          num: 365,
          n: 10,
          correctResults: "365",
        },
      ].forEach((data) => {
        expect(conditionals.toNaryString(data.num, data.n)).toEqual(
          data.correctResults
        );
      });
    });
    test("will throw if not a number", () => {
      const naryString = {
        num: "dd",
        n: 4,
      };
      expect(() =>
        conditionals.toNaryString(naryString.num, naryString.n)
      ).toThrow();
    });
  });

  describe("getCommonDirectoryPath", () => {
    test("will return the commom directory path for specified array of full filenames", () => {
      [
        {
          pathes: ["/web/images/image1.png", "/web/images/image2.png"],
          correctResults: "/web/images/",
        },
        {
          pathes: [
            "/web/assets/style.css",
            "/web/scripts/app.js",
            "home/setting.conf",
          ],
          correctResults: "/",
        },
        {
          pathes: ["/web/assets/style.css", "/.bin/mocha", "/read.me"],
          correctResults: "/",
        },
        {
          pathes: ["/web/favicon.ico", "/web-scripts/dump", "/webalizer/logs"],
          correctResults: "/",
        },
      ].forEach((data) => {
        expect(conditionals.getCommonDirectoryPath(data.pathes)).toEqual(
          data.correctResults
        );
      });
    });
  });

  describe("getMatrixProduct", () => {
    test("will return the product of two specified matrixes", () => {
      const matrixProduct = {
        m1: [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ],
        m2: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        correctResults: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      };
      expect(
        conditionals.getMatrixProduct(matrixProduct.m1, matrixProduct.m2)
      ).toEqual(matrixProduct.correctResults);
    });
    test("will throw an error if matrix not compatible for multiplication", () => {
      const matrixProduct = {
        m1: [[4], [5], [6]],
        m2: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      };
      expect(() =>
        conditionals.getMatrixProduct(matrixProduct.m1, matrixProduct.m2)
      ).toThrow();
    });
  });

  describe("evaluateTicTacToePosition", () => {
    test("will return the evaluation of the specified tic-tac-toe position", () => {
      [
        {
          position: [
            ["X", , "0"],
            [, "X", "0"],
            [, , "X"],
          ],
          correctResults: "X",
        },
        {
          position: [
            ["0", "0", "0"],
            [, "X"],
            ["X", , "X"],
          ],
          correctResults: "0",
        },
        {
          position: [
            ["0", "X", "0"],
            [, "X"],
            ["X", "0", "X"],
          ],
          correctResults: undefined,
        },
        {
          position: [
            [, ,],
            [, ,],
            [, ,],
          ],
          correctResults: undefined,
        },
      ].forEach((data) => {
        expect(conditionals.evaluateTicTacToePosition(data.position)).toEqual(
          data.correctResults
        );
      });
    });
  });
});
