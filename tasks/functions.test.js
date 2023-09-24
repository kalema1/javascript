const functions = require("./functions");

describe("fuctions", () => {
  describe("getComposition", () => {
    test("will return the functions composition of two specified functions f(x) and g(x)", () => {
      expect(functions.getComposition(Math.sin, Math.asin)(1)).toBe(1);
      expect(functions.getComposition(Math.sin, Math.asin)(0.5)).toBeCloseTo(
        0.5
      );
      expect(functions.getComposition(Math.sin, Math.asin)(0)).toBe(0);
    });
  });

  describe("getPowerFunction", () => {
    test("will return the math power function with the specified exponent", () => {
      expect(functions.getPowerFunction(2)(4)).toBe(16);
      expect(functions.getPowerFunction(0.5)(4)).toBe(2);
    });
  });

  describe("getPolynom", () => {
    test("will return the polynom function of one argument based on specified coefficients.", () => {
      expect(functions.getPolynom(2, 3, 5)(2)).toBe(19);
      expect(functions.getPolynom(1, -3)(2)).toBe(-1);
      expect(functions.getPolynom(8)(2)).toBe(8);
      expect(functions.getPolynom()).toBeNull();
    });
  });

  describe("memoize", () => {
    test("Memoizes passed function and returns function", () => {
      const originalFunction = jest.fn(() => Math.random());
      const memoizer = functions.memoize(originalFunction);
      const result1 = memoizer();
      const result2 = memoizer();
      const result3 = memoizer();

      /* expect(functions.memoize(() => Math.random())).toBe(Math.random()); 
      expect(functions.memoize(originalFunction)).toHaveBeenCalledTimes(1); */
      expect(result1).toEqual(result2);
      expect(result2).toEqual(result3);
    });
  });

  describe("retry", () => {
    test("Returns the function trying to call the passed function and if it throws", () => {
      let attempts = 0;
      const maxAttempts = 2;
      const retryer = functions.retry(() => {
        attempts++;
        if (attempts < maxAttempts) {
          throw new Error("Test error");
        } else {
          return attempts;
        }
      }, maxAttempts);

      // Call the retryer function
      const result = retryer();

      // Ensure that the function was retried until success
      expect(attempts).toBe(maxAttempts);
      // Ensure that the result is the expected value
      expect(result).toBe(maxAttempts);
    });
  });

  describe("logger", () => {
    test("Returns the logging wrapper for the specified method", () => {
      const mockLogFunc = jest.fn(); // Create a mock log function
      const cosLogger = functions.logger(Math.cos, mockLogFunc);

      const result = cosLogger(Math.PI);

      // Ensure that the log function was called twice
      expect(mockLogFunc).toHaveBeenCalledTimes(2);

      // Check the first log message
      expect(mockLogFunc.mock.calls[0][0]).toMatch(/cos\(.+\) starts/);

      // Check the second log message
      expect(mockLogFunc.mock.calls[1][0]).toMatch(/cos\(.+\) ends/);

      // Ensure that the result is as expected
      expect(result).toBe(-1);
    });
  });

  describe("partialUsingArguments", () => {
    test("Return the function with partial applied arguments", () => {
      var fn = function (x1, x2, x3, x4) {
        return x1 + x2 + x3 + x4;
      };
      var partiallyApplied1 = functions.partialUsingArguments(fn, "a")(
        "b",
        "c",
        "d"
      );
      const results = "abcd";
      expect(partiallyApplied1).toEqual(results);

      var partiallyApplied2 = functions.partialUsingArguments(
        fn,
        "a",
        "b"
      )("c", "d");
      expect(partiallyApplied2).toEqual(results);
    });
  });

  describe("getIdGeneratorFunction", () => {
    test("Returns the id generator function that returns next integer starting from specified number", () => {
      const getId4 = functions.getIdGeneratorFunction(4);
      const getId10 = functions.getIdGeneratorFunction(10);

      // Test initial values
      expect(getId4()).toBe(4);
      expect(getId10()).toBe(10);

      // Test incrementing values
      expect(getId4()).toBe(5);
      expect(getId4()).toBe(6);
      expect(getId4()).toBe(7);
      expect(getId10()).toBe(11);
    });
  });
});
