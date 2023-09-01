const date = require("./date");

describe("date", () => {
  describe("parseDataFromRfc2822", () => {
    test("will Parses a rfc2822 string date representation into date value", () => {
      const dateValue = {
        value: "December 17, 1995 03:24:00",
        correctOutput: 819159840000,
      };
      expect(date.parseDataFromRfc2822(dateValue.value)).toEqual(
        dateValue.correctOutput
      );
    });
  });

  describe("parseDataFromIso8601", () => {
    test("will Parses a ISO 8601 string date representation into date value", () => {
      const dateValue = {
        value: "2016-01-19T16:07:37+00:00",
        correctOutput: 1453219657000,
      };
      expect(date.parseDataFromIso8601(dateValue.value)).toEqual(
        dateValue.correctOutput
      );
    });
  });

  describe("isLeapYear", () => {
    test("will return false if specified date is leap year", () => {
      const datevalue = {
        date: "1900,1,1",
      };
      expect(date.isLeapYear(datevalue.date)).toBeFalsy();
    });
    test("will return true if specified date is leap year", () => {
      const datevalue = {
        date: "2012,1,1",
      };
      expect(date.isLeapYear(datevalue.date)).toBeTruthy();
    });
  });

  describe("timeSpanToString", () => {
    test("will return the string represention of the timespan between two dates", () => {
      const timeSpan = {
        startDate: (2000, 1, 1, 10, 0, 0),
        endDate: (2000, 1, 1, 11, 0, 0),
        correctResults: "01:00:00.000",
      };
      expect(
        date.timeSpanToString(timeSpan.startDate, timeSpan.endDate)
      ).toEqual(timeSpan.correctResults);
    });
  });

  describe("angleBetweenClockHands", () => {
    test("will return the angle (in radians) between the hands of an analog clock for the specified Greenwich time", () => {
      const dateValue = {
        date: (2016, 2, 5, 0, 0),
        correctOutput: 0,
      };
      expect(date.angleBetweenClockHands(dateValue.date)).toBe(
        dateValue.correctOutput
      );
    });
  });
});
