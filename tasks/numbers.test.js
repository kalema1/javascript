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
    test(" will get an area of a rectangle given by width and heigth", () => {
      const rectangle = {
        width: "A",
        height: 10,
        output: "Enter Numbers only",
      };
      expect(
        numbers.getRectangleArea(rectangle.width, rectangle.height)
      ).toEqual(rectangle.output);
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
    test("will return statment of circumference of a circle", () => {
      const circle = {
        radius: "a",
        results: "Enter Number only",
      };
      expect(numbers.getCicleCircumference(circle.radius)).toEqual(
        circle.results
      );
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
    test("will return error if not a number of 2 values", () => {
      const average = {
        value1: "a",
        value2: 7,
        results: "Enter Number only",
      };
      expect(numbers.getAverage(average.value1, average.value2)).toEqual(
        average.results
      );
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
    test(" will return a message if not a number of any of points", () => {
      const points = {
        x1: "a",
        y1: 0,
        x2: 0,
        y2: 1,
        correctResults: "Enter Number only",
      };
      expect(
        numbers.getDistanceBetweenPoints(
          points.x1,
          points.y1,
          points.x2,
          points.y2
        )
      ).toEqual(points.correctResults);
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
    test("will return a message if  coefficient not a number", () => {
      const coeficent = {
        a: "a",
        b: -10,
        correctResults: "Enter Number only",
      };
      expect(numbers.getLinearEquationRoot(coeficent.a, coeficent.b)).toBe(
        coeficent.correctResults
      );
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
    test("will return a message if not a number", () => {
      const vectorPoints = {
        x1: "d",
        y1: 0,
        x2: 0,
        y2: 1,
        correctAngle: "Enter Number only",
      };
      expect(
        numbers.getAngleBetweenVectors(
          vectorPoints.x1,
          vectorPoints.y1,
          vectorPoints.x2,
          vectorPoints.y2
        )
      ).toEqual(vectorPoints.correctAngle);
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
        correctResults: "Enter Number only",
      };
      expect(numbers.getLastDigit(digits.value)).toEqual(digits.correctResults);
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
    test("will return message if not a number from string", () => {
      const stringValue = {
        value: "t",
        correctResults: "Enter Number only",
      };
      expect(numbers.parseNumberFromString(stringValue.value)).toEqual(
        stringValue.correctResults
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
    test("will return a message if not a number", () => {
      const length = {
        a: "a",
        b: 1,
        c: 1,
        correctDiagonal: "Enter Number only",
      };
      expect(
        numbers.getParallelipidedDiagonal(length.a, length.b, length.c)
      ).toEqual(length.correctDiagonal);
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
        correctNumber: "Enter Number only",
      };
      expect(
        numbers.roundToPowerOfTen(roundNumber.num, roundNumber.pow)
      ).toEqual(roundNumber.correctNumber);
    });
  });

  describe("isPrime", () => {
    test("will return true if number is prime", () => {
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
