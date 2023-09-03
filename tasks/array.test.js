const array = require("./array");

describe("array", () => {
  describe("findElement", () => {
    test("will return the", () => {
      const arrayValue = {
        arr: ["Ace", 10, true],
        value: 10,
        correctResults: 1,
      };
      expect(array.findElement(arrayValue.arr, arrayValue.value)).toEqual(
        arrayValue.correctResults
      );
    });
  });
  describe("generateOdds", () => {
    test("will generate odd numbers from array", () => {
      const oddArray = {
        len: 5,
        correctResults: [1, 3, 5, 7, 9],
      };
      expect(array.generateOdds(oddArray.len)).toEqual(oddArray.correctResults);
    });
    test("will generate return a message if not a number", () => {
      const oddArray = {
        len: null,
        correctResults: "Use numbers only",
      };
      expect(array.generateOdds(oddArray.len)).toEqual(oddArray.correctResults);
    });
    test("will generate return a message if not a number", () => {
      const oddArray = {
        len: "k",
        correctResults: "Use numbers only",
      };
      expect(array.generateOdds(oddArray.len)).toEqual(oddArray.correctResults);
    });

    describe("doubleArray", () => {
      test("will retun the doubled array elements of the array are repeated twice using original order", () => {
        const doubleArray = {
          arr: ["Ace", 10, true],
          correctResults: ["Ace", 10, true, "Ace", 10, true],
        };
        expect(array.doubleArray(doubleArray.arr)).toEqual(
          doubleArray.correctResults
        );
      });
    });
  });

  describe("getArrayOfPositives", () => {
    test("will return an array of positive numbers", () => {
      const positiveArray = {
        arr: [-1, 2, -5, -4, 0],
        correctResults: [2],
      };
      expect(array.getArrayOfPositives(positiveArray.arr)).toEqual(
        positiveArray.correctResults
      );
    });
  });

  describe("getArrayOfStrings", () => {
    test("will return the array with strings only", () => {
      const stringArray = {
        arr: [0, 1, "cat", 3, true, "dog"],
        correctResults: ["cat", "dog"],
      };
      expect(array.getArrayOfStrings(stringArray.arr)).toEqual(
        stringArray.correctResults
      );
    });
  });

  describe("removeFalsyValues", () => {
    test("will remove falsy values from the array", () => {
      const falsyValuesArray = {
        arr: [0, false, "cat", NaN, true, ""],
        correctResults: ["cat", true],
      };
      expect(array.removeFalsyValues(falsyValuesArray.arr)).toEqual(
        falsyValuesArray.correctResults
      );
    });
  });

  describe("getUpperCaseStrings", () => {
    test("will return the array of useprcase strings from the array", () => {
      const upperCaseStringsArray = {
        arr: [
          "permanent-internship",
          "glutinous-shriek",
          "multiplicative-elevation",
        ],
        correctResults: [
          "PERMANENT-INTERNSHIP",
          "GLUTINOUS-SHRIEK",
          "MULTIPLICATIVE-ELEVATION",
        ],
      };
      expect(array.getUpperCaseStrings(upperCaseStringsArray.arr)).toEqual(
        upperCaseStringsArray.correctResults
      );
    });
  });

  describe("getStringsLength", () => {
    test("will get the array of string lengths from the string array", () => {
      const stringLengthArray = {
        arr: ["", "a", "bc", "def", "ghij"],
        correctResults: [0, 1, 2, 3, 4],
      };
      expect(array.getStringsLength(stringLengthArray.arr)).toEqual(
        stringLengthArray.correctResults
      );
    });
  });

  describe("insertItem", () => {
    test("will insert item in a array at an index", () => {
      const insertItemArray = {
        arr: [1, 3, 4, 5],
        item: 2,
        index: 1,
        correctResults: [1, 2, 3, 4, 5],
      };
      expect(
        array.insertItem(
          insertItemArray.arr,
          insertItemArray.item,
          insertItemArray.index
        )
      ).toEqual(insertItemArray.correctResults);
    });
  });

  describe("getHead", () => {
    test("will return the n first items of the array", () => {
      const firstItemAraay = {
        arr: [1, 3, 4, 5],
        n: 2,
        correctResults: [1, 3],
      };
      expect(array.getHead(firstItemAraay.arr, firstItemAraay.n)).toEqual(
        firstItemAraay.correctResults
      );
    });
  });

  describe("getTail", () => {
    test("will return n last items of the array", () => {
      const lastItemsArray = {
        arr: [1, 3, 4, 5],
        n: 2,
        correctResults: [4, 5],
      };
      expect(array.getTail(lastItemsArray.arr, lastItemsArray.n)).toEqual(
        lastItemsArray.correctResults
      );
    });
  });

  describe("toCsvTex", () => {
    test("will retun CSV represebtation of two-dimentional numeric array", () => {
      const csvArray = {
        arr: [
          [0, 1, 2, 3, 4],
          [10, 11, 12, 13, 14],
          [20, 21, 22, 23, 24],
          [30, 31, 32, 33, 34],
        ],
        correctResults:
          "0,1,2,3,4\\n" +
          "\n" +
          "+" +
          "10,11,12,13,14\\n" +
          "\n" +
          "+" +
          "20,21,22,23,24\\n" +
          "\n" +
          "+" +
          "30,31,32,33,34",
      };
      expect(array.toCsvText(csvArray.arr)).toEqual(csvArray.correctResults);
    });
  });

  describe("toArrayOfSquares", () => {
    test("will transform the numeric array into the according array of squares", () => {
      const arraySqaure = {
        arr: [0, 1, 2, 3, 4, 5],
        correctResults: [0, 1, 4, 9, 16, 25],
      };
      expect(array.toArrayOfSquares(arraySqaure.arr)).toEqual(
        arraySqaure.correctResults
      );
    });
    test("will transform the numeric array into the according array of squares", () => {
      const arraySqaure = {
        arr: ["d", 1, 2, 3, 4, 5],
        correctResults: "use numbers only",
      };
      expect(array.toArrayOfSquares(arraySqaure.arr)).toEqual(
        arraySqaure.correctResults
      );
    });
  });

  describe("getMovingSum", () => {
    test("will transform the numeric array to the according moving sum array", () => {
      const movingSumArray = {
        arr: [1, 1, 1, 1, 1],
        correctResults: [1, 2, 3, 4, 5],
      };
      expect(array.getMovingSum(movingSumArray.arr)).toEqual(
        movingSumArray.correctResults
      );
    });
    test("will return message if an element in the array in not a number", () => {
      const movingSumArray = {
        arr: [1, 1, "g", 1, 1],
        correctResults: "Please provide Numbers Only",
      };
      expect(array.getMovingSum(movingSumArray.arr)).toEqual(
        movingSumArray.correctResults
      );
    });
  });

  describe("getSecondItems", () => {
    test("will return every second item from the array:", () => {
      const secondItemsArray = {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        correctResults: [2, 4, 6, 8, 10],
      };
      expect(array.getSecondItems(secondItemsArray.arr)).toEqual(
        secondItemsArray.correctResults
      );
    });
  });

  describe("propagateItemsByPositionIndex", () => {
    test("will Return an array that consists of: one first item, two second items, tree third items etc", () => {
      const prpagateItemsArray = {
        arr: [1, 2, 3, 4, 5],
        correctResults: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
      };
      expect(
        array.propagateItemsByPositionIndex(prpagateItemsArray.arr)
      ).toEqual(prpagateItemsArray.correctResults);
    });
  });

  describe("get3TopItems", () => {
    test("will Return the 3 largest numbers from the specified array", () => {
      const top3ItemsArray = {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        correctResults: [10, 9, 8],
      };
      expect(array.get3TopItems(top3ItemsArray.arr)).toEqual(
        top3ItemsArray.correctResults
      );
    });
  });

  describe("getPositivesCount", () => {
    test("will Return the number of positive numbers from array", () => {
      const positiveCountValue = {
        arr: [-1, 0, 1],
        correctResults: 1,
      };
      expect(array.getPositivesCount(positiveCountValue.arr)).toEqual(
        positiveCountValue.correctResults
      );
    });
  });

  describe("sortDigitNamesByNumericOrder", () => {
    test("will sort digit names", () => {
      const digitNamesarray = {
        arr: ["nine", "one"],
        correctResults: ["one", "nine"],
      };
      expect(array.sortDigitNamesByNumericOrder(digitNamesarray.arr)).toEqual(
        digitNamesarray.correctResults
      );
    });
  });

  describe("getItemsSum", () => {
    test("will return the sum of all items in the array of numbers", () => {
      const itemSumArrayValue = {
        arr: [1, 2, 3],
        correctResults: 6,
      };
      expect(array.getItemsSum(itemSumArrayValue.arr)).toEqual(
        itemSumArrayValue.correctResults
      );
    });
    test("will return a message if provided element is not number", () => {
      const itemSumArrayValue = {
        arr: [1, "a", 3],
        correctResults: "Use Numbers Only",
      };
      expect(array.getItemsSum(itemSumArrayValue.arr)).toEqual(
        itemSumArrayValue.correctResults
      );
    });
  });

  describe("getFalsyValuesCount", () => {
    test("will return the number of all falsy value in the array", () => {
      const falsyValuesCount = {
        arr: [null, undefined, NaN, false, 0, ""],
        correctResults: 6,
      };
      expect(array.getFalsyValuesCount(falsyValuesCount.arr)).toEqual(
        falsyValuesCount.correctResults
      );
    });
  });

  describe("findAllOccurences", () => {
    test("will return a number of all occurences of the item in an array", () => {
      const allOccurences = {
        arr: [0, 0, 1, 1, 1, 2],
        item: 1,
        correctResults: 3,
      };
      expect(
        array.findAllOccurences(allOccurences.arr, allOccurences.item)
      ).toEqual(allOccurences.correctResults);
    });
  });

  describe("toStringList", () => {
    test("will concatenate all elements from array into single string with ',' delimeter", () => {
      const stringList = {
        arr: [0, false, "cat", NaN, true, ""],
        correctResults: "0,false,cat,NaN,true,",
      };
      expect(array.toStringList(stringList.arr)).toEqual(
        stringList.correctResults
      );
    });
  });

  describe("sortCitiesArray", () => {
    test("Sorts the specified array by country name first and city name", () => {
      const arraySortCities = {
        arr: [
          { country: "Russia", city: "Moscow" },
          { country: "Belarus", city: "Minsk" },
          { country: "Poland", city: "Warsaw" },
          { country: "Russia", city: "Saint Petersburg" },
          { country: "Poland", city: "Krakow" },
          { country: "Belarus", city: "Brest" },
        ],
        correctResults: [
          { country: "Belarus", city: "Brest" },
          { country: "Belarus", city: "Minsk" },
          { country: "Poland", city: "Krakow" },
          { country: "Poland", city: "Warsaw" },
          { country: "Russia", city: "Moscow" },
          { country: "Russia", city: "Saint Petersburg" },
        ],
      };
      expect(array.sortCitiesArray(arraySortCities.arr)).toEqual(
        arraySortCities.correctResults
      );
    });
  });

  describe("getIdentityMatrix", () => {
    test("will create an indentity matrix of the specified size", () => {
      const indentityMatrix = {
        n: 2,
        correctResults: [
          [1, 0],
          [0, 1],
        ],
      };
      expect(array.getIdentityMatrix(indentityMatrix.n)).toEqual(
        indentityMatrix.correctResults
      );
    });
  });

  describe("getIntervalArray", () => {
    test("will create an array of integers from the specified start to end (inclusive)", () => {
      const intervalArray = {
        start: 1,
        end: 5,
        correctArray: [1, 2, 3, 4, 5],
      };
      expect(
        array.getIntervalArray(intervalArray.start, intervalArray.end)
      ).toEqual(intervalArray.correctArray);
    });
    test("will return message if start or end value is ont number", () => {
      const intervalArray = {
        start: "j",
        end: 5,
        correctArray: "Use Numbers Only",
      };
      expect(
        array.getIntervalArray(intervalArray.start, intervalArray.end)
      ).toEqual(intervalArray.correctArray);
    });
  });

  describe("distinct", () => {
    test("will return array containing only unique values from the array", () => {
      const distinctArray = {
        arr: [1, 2, 3, 3, 2, 1],
        correctResults: [1, 2, 3],
      };
      expect(array.distinct(distinctArray.arr)).toEqual(
        distinctArray.correctResults
      );
    });
  });

  describe("group", () => {
    test("will return multimap of keys extracted from array elements via keySelector callback and values extracted via valueSelector callback.", () => {
      const groupArray = {
        array: [
          { country: "Belarus", city: "Brest" },
          { country: "Russia", city: "Omsk" },
          { country: "Russia", city: "Samara" },
          { country: "Belarus", city: "Grodno" },
          { country: "Belarus", city: "Minsk" },
          { country: "Poland", city: "Lodz" },
        ],
        keySelector: (item) => item.country,
        valueSelector: (item) => item.city,
        correctResults: new Map([
          ["Belarus", ["Brest", "Grodno", "Minsk"]],
          ["Russia", ["Omsk", "Samara"]],
          ["Poland", ["Lodz"]],
        ]),
      };
      expect(
        array.group(
          groupArray.array,
          groupArray.keySelector,
          groupArray.valueSelector
        )
      ).toEqual(groupArray.correctResults);
    });
  });

  describe("selectMany", () => {
    test("will project each element of the specified array to a sequence and flattens the resulting sequences into one array", () => {
      const flatenedArray = {
        arr: [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        childrenSelector: (x) => x,
        correctArray: [1, 2, 3, 4, 5, 6],
      };
      expect(
        array.selectMany(flatenedArray.arr, flatenedArray.childrenSelector)
      ).toEqual(flatenedArray.correctArray);
    });
  });

  describe("getElementByIndexes", () => {
    test("wil return an element from the multidimentional array by the specified indexes.", () => {
      const elementByIndex = {
        arr: [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        indexes: [0, 0],
        correctResults: 1,
      };
      expect(
        array.getElementByIndexes(elementByIndex.arr, elementByIndex.indexes)
      ).toEqual(elementByIndex.correctResults);
    });
  });

  describe("swapHeadAndTail", () => {
    test("will Swaps the head and tail of the array", () => {
      const swappedArray = {
        arr: [1, 2, 3, 4, 5, 6, 7, 8],
        correctArray: [5, 6, 7, 8, 1, 2, 3, 4],
      };
      expect(array.swapHeadAndTail(swappedArray.arr)).toEqual(
        swappedArray.correctArray
      );
    });
  });
});
