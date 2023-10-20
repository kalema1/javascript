const { result } = require("lodash");
const {
  createCompassPoints,
  expandBraces,
  getZigZagMatrix,
  canDominoesMakeRow,
  extractRanges,
} = require("./problems-1");

describe("probelem-1", () => {
  describe("createCompassPoints", () => {
    test("Returns the array of 32 compass points and heading", () => {
      const sides = ["N", "E", "S", "W"];
      const result = [
        { abbreviation: "N", azimuth: 0 },
        { abbreviation: "NbE", azimuth: 11.25 },
        { abbreviation: "NNE", azimuth: 22.5 },
        { abbreviation: "NEbN", azimuth: 33.75 },
        { abbreviation: "NE", azimuth: 45 },
        { abbreviation: "NEbE", azimuth: 56.25 },
        { abbreviation: "ENE", azimuth: 67.5 },
        { abbreviation: "EbN", azimuth: 78.75 },
        { abbreviation: "E", azimuth: 90 },
        { abbreviation: "EbS", azimuth: 101.25 },
        { abbreviation: "ESE", azimuth: 112.5 },
        { abbreviation: "SEbE", azimuth: 123.75 },
        { abbreviation: "SE", azimuth: 135 },
        { abbreviation: "SEbS", azimuth: 146.25 },
        { abbreviation: "SSE", azimuth: 157.5 },
        { abbreviation: "SbE", azimuth: 168.75 },
        { abbreviation: "S", azimuth: 180 },
        { abbreviation: "SbW", azimuth: 191.25 },
        { abbreviation: "SSW", azimuth: 202.5 },
        { abbreviation: "SWbS", azimuth: 213.75 },
        { abbreviation: "SW", azimuth: 225 },
        { abbreviation: "SWbW", azimuth: 236.25 },
        { abbreviation: "WSW", azimuth: 247.5 },
        { abbreviation: "WbS", azimuth: 258.75 },
        { abbreviation: "W", azimuth: 270 },
        { abbreviation: "WbN", azimuth: 281.25 },
        { abbreviation: "WNW", azimuth: 292.5 },
        { abbreviation: "NWbW", azimuth: 303.75 },
        { abbreviation: "NW", azimuth: 315 },
        { abbreviation: "NWbN", azimuth: 326.25 },
        { abbreviation: "NNW", azimuth: 337.5 },
        { abbreviation: "NbW", azimuth: 348.75 },
      ];
      expect(createCompassPoints(sides)).toEqual(result);
    });
  });

  describe("expandBraces", () => {
    test("Expand the braces of the specified string", () => {
      const str = "~/{Downloads,Pictures}/*.{jpg,gif,png}";
      expand = expandBraces(str);
      expect(expand.next().value).toEqual("~/Downloads/*.jpg");
      expect(expand.next().value).toEqual("~/Downloads/*.gif");
      expect(expand.next().value).toEqual("~/Downloads/*.png");
      expect(expand.next().value).toEqual("~/Pictures/*.jpg");
      expect(expand.next().value).toEqual("~/Pictures/*.gif");
      expect(expand.next().value).toEqual("~/Pictures/*.png");
    });

    test("Expand the braces of the specified string", () => {
      const str = "It{{em,alic}iz,erat}e{d,}, please.";
      expand = expandBraces(str);
      expect(expand.next().value).toEqual("Itemized, please.");
      expect(expand.next().value).toEqual("Itemize, please.");
      expect(expand.next().value).toEqual("Italicized, please.");
      expect(expand.next().value).toEqual("Italicize, please.");
      expect(expand.next().value).toEqual("Iterated, please.");
      expect(expand.next().value).toEqual("Iterate, please.");
    });

    test("Expand the braces of the specified string", () => {
      const str = "thumbnail.{png,jp{e,}g}";
      expand = expandBraces(str);
      expect(expand.next().value).toEqual("thumbnail.png");
      expect(expand.next().value).toEqual("thumbnail.jpeg");
      expect(expand.next().value).toEqual("thumbnail.jpg");
    });

    test("Expand the braces of the specified string", () => {
      const str = "nothing to do";
      expand = expandBraces(str);
      expect(expand.next().value).toEqual("nothing to do");
    });
  });

  describe("getZigZagMatrix", () => {
    test("Returns the ZigZag matrix", () => {
      [
        {
          n: 1,
          result: [[0]],
        },
        {
          n: 2,
          result: [
            [0, 1],
            [2, 3],
          ],
        },
        {
          n: 3,
          result: [
            [0, 1, 5],
            [2, 4, 6],
            [3, 7, 8],
          ],
        },
        {
          n: 4,
          result: [
            [0, 1, 5, 6],
            [2, 4, 7, 12],
            [3, 8, 11, 13],
            [9, 10, 14, 15],
          ],
        },
      ].forEach((data) => {
        expect(getZigZagMatrix(data.n)).toEqual(data.result);
      });
    });
  });

  describe("canDominoesMakeRow", () => {
    test("Returns true if specified subset of dominoes can be placed in a row accroding to the game rules", () => {
      expect(
        canDominoesMakeRow([
          [0, 1],
          [1, 1],
        ])
      ).toBeTruthy;
      expect(
        canDominoesMakeRow([
          [1, 1],
          [2, 2],
          [1, 5],
          [5, 6],
          [6, 3],
        ])
      ).toBeFalsy;
      expect(
        canDominoesMakeRow([
          [1, 3],
          [2, 3],
          [1, 4],
          [2, 4],
          [1, 5],
          [2, 5],
        ])
      ).toBeTruthy;
      expect(
        canDominoesMakeRow([
          [0, 0],
          [0, 1],
          [1, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [0, 3],
          [1, 3],
          [2, 3],
          [3, 3],
        ])
      ).toBeTruthy;
    });
  });

  describe("extractRanges", () => {
    test("Returns the string expression of the specified ordered list of integers", () => {
      [
        {
          nums: [0, 1, 2, 3, 4, 5],
          results: "0-5",
        },
        {
          nums: [1, 4, 5],
          results: "1,4,5",
        },
        {
          nums: [0, 1, 2, 5, 7, 8, 9],
          results: "0-2,5,7-9",
        },
        {
          nums: [1, 2, 4, 5],
          results: "1,2,4,5",
        },
      ].forEach((data) => {
        expect(extractRanges(data.nums)).toEqual(data.results);
      });
    });
  });
});
