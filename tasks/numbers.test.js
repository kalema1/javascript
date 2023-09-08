const numbers = require("./numbers");

describe("Numbers", () => {
  describe("getRectangleArea", () => {
    test(" will get an area of a rectangle given by width and heigth", () => {
      const rectangle = {
        width: 5,
        height: 10,
        correctArea: 50,
      };
      expect(numbers.getRectangleArea(rectangle.width, rectangle.height)).toBe(
        rectangle.correctArea
      );
    });
    test(" will throw an error if given width and height  is not a number for  an area of a rectangle", () => {
      expect(() => numbers.getRectangleArea("v", 10)).toThrowError(
        "Enter Numbers only"
      );
    });
  });

  describe("getCicleCircumference", () => {
    test("will get circumference of a circle", () => {
      const circle = {
        radius: 5,
        results: 31.41592653589793,
      };
      expect(numbers.getCicleCircumference(circle.radius)).toBeCloseTo(
        circle.results
      );
    });
    test("will throw an error if circumference of a circle is not a number", () => {
      expect(() => numbers.getCicleCircumference("h")).toThrow();
    });
  });

  describe("getAverage", () => {
    test("will get avarage of 2 values", () => {
      const average = {
        value1: 10,
        value2: 0,
        results: 5,
      };
      expect(numbers.getAverage(average.value1, average.value2)).toBe(
        average.results
      );
    });
    test("will throw error if not a number of 2 values", () => {
      const average = {
        value1: "a",
        value2: 7,
      };
      expect(() =>
        numbers.getAverage(average.value1, average.value2)
      ).toThrow();
    });
  });

  describe("getDistanceBetweenPoints", () => {
    test(" will get distance between 2 points", () => {
      const points = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        correctResults: 1,
      };
      expect(
        numbers.getDistanceBetweenPoints(
          points.x1,
          points.y1,
          points.x2,
          points.y2
        )
      ).toBe(points.correctResults);
    });
    test(" will throw error if not a number of any of points", () => {
      const points = {
        x1: "a",
        y1: 0,
        x2: 0,
        y2: 1,
        correctResults: "Enter Number only",
      };
      expect(() =>
        numbers.getDistanceBetweenPoints(
          points.x1,
          points.y1,
          points.x2,
          points.y2
        )
      ).toThrow();
    });
  });

  describe("getLinearEquationRoot", () => {
    test("will get linear equation root", () => {
      const coeficent = {
        a: 5,
        b: -10,
        correctResults: 2,
      };
      expect(numbers.getLinearEquationRoot(coeficent.a, coeficent.b)).toBe(
        coeficent.correctResults
      );
    });
    test("will throw  if  coefficient not a number", () => {
      const coeficent = {
        a: "a",
        b: -10,
      };
      expect(() =>
        numbers.getLinearEquationRoot(coeficent.a, coeficent.b)
      ).toThrow();
    });
  });
  describe("getAngleBetweenVectors", () => {
    test("will get angle between 2 vectors", () => {
      const vectorPoints = {
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 1,
        correctAngle: 1.5707963267948966,
      };
      expect(
        numbers.getAngleBetweenVectors(
          vectorPoints.x1,
          vectorPoints.y1,
          vectorPoints.x2,
          vectorPoints.y2
        )
      ).toBeCloseTo(vectorPoints.correctAngle);
    });
    test("will throw if not a number", () => {
      const vectorPoints = {
        x1: "d",
        y1: 0,
        x2: 0,
        y2: 1,
      };
      expect(() =>
        numbers.getAngleBetweenVectors(
          vectorPoints.x1,
          vectorPoints.y1,
          vectorPoints.x2,
          vectorPoints.y2
        )
      ).toThrow();
    });
  });

  describe("getLastDigit", () => {
    test("will get the last value", () => {
      const digits = {
        value: 100,
        correctResults: 0,
      };
      expect(numbers.getLastDigit(digits.value)).toBe(digits.correctResults);
    });
    test("will return a message if not a number", () => {
      const digits = {
        value: "f",
      };
      expect(() => numbers.getLastDigit(digits.value)).toThrow();
    });
  });

  describe("parseNumberFromString", () => {
    test("will return number from a string", () => {
      const stringValue = {
        value: "100",
        correctResults: 100,
      };
      expect(numbers.parseNumberFromString(stringValue.value)).toBe(
        stringValue.correctResults
      );
    });
    test("will throw if not a number from string", () => {
      const stringValue = {
        value: "gg",
      };
      expect(() => numbers.parseNumberFromString(stringValue.value)).toThrow(
        new Error("Enter Number only")
      );
    });
  });

  describe("getParallelipidedDiagonal", () => {
    test("will get a diagonal length of rectangular parallepiped", () => {
      const length = {
        a: 1,
        b: 1,
        c: 1,
        correctDiagonal: 1.7320508075688772,
      };
      expect(
        numbers.getParallelipidedDiagonal(length.a, length.b, length.c)
      ).toBeCloseTo(length.correctDiagonal);
    });
    test("will throw an error if not a number", () => {
      const length = {
        a: "a",
        b: 1,
        c: 1,
      };
      expect(() =>
        numbers.getParallelipidedDiagonal(length.a, length.b, length.c)
      ).toThrow();
    });
  });

  describe("roundToPowerOfTen", () => {
    test("will return number rounded to specified power", () => {
      const roundNumber = {
        num: 1234,
        pow: 1,
        correctNumber: 1230,
      };
      expect(numbers.roundToPowerOfTen(roundNumber.num, roundNumber.pow)).toBe(
        roundNumber.correctNumber
      );
    });
    test("will return message if not a number", () => {
      const roundNumber = {
        num: 1234,
        pow: "a",
      };
      expect(() =>
        numbers.roundToPowerOfTen(roundNumber.num, roundNumber.pow)
      ).toThrow();
    });
  });

  describe("isPrime", () => {
    test("will return false if number is not prime", () => {
      const numbervalue = {
        n: 4,
      };
      expect(numbers.isPrime(numbervalue.n)).toBeFalsy();
    });
    test("will return true if number is prime", () => {
      const numbervalue = {
        n: 5,
      };
      expect(numbers.isPrime(numbervalue.n)).toBeTruthy();
    });
    test("will throw if  not number", () => {
      const numbervalue = {
        n: "bb",
      };
      expect(() => numbers.isPrime(numbervalue.n)).toThrow();
    });
  });

  describe("toNumber", () => {
    test("will convert value to number and returns it", () => {
      const numbervalue = {
        value: "1",
        def: 0,
        correctResults: 1,
      };
      expect(numbers.toNumber(numbervalue.value, numbervalue.def)).toBe(
        numbervalue.correctResults
      );
    });
  });
});
