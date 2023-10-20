const {
  parseBankAccount,
  wrapText,
  PokerRank,
  getPokerHandRank,
  getFigureRectangles,
} = require("./problems-2");

describe("problems-2", () => {
  describe("parseBankAccount", () => {
    test("Returns the bank account number parsed from specified string", () => {
      [
        {
          accontNumber:
            "    _  _     _  _  _  _  _ \n" +
            "  | _| _||_||_ |_   ||_||_|\n" +
            "  ||_  _|  | _||_|  ||_| _|\n",
          results: 123456789,
        },
        {
          accontNumber:
            " _  _  _  _  _  _  _  _  _ \n" +
            "| | _| _|| ||_ |_   ||_||_|\n" +
            "|_||_  _||_| _||_|  ||_| _|\n",
          results: 23056789,
        },
        {
          accontNumber:
            " _  _  _  _  _  _  _  _  _ \n" +
            "|_| _| _||_||_ |_ |_||_||_|\n" +
            "|_||_  _||_| _||_| _||_| _|\n",
          results: 823856989,
        },
      ].forEach((data) => {
        expect(parseBankAccount(data.accontNumber)).toEqual(data.results);
      });
    });
  });

  describe("wrapText", () => {
    test("Returns the string, but with line breaks inserted at just the right places to make", () => {
      const text =
        "The String global object is a constructor for strings, or a sequence of characters.";
      const columns = 12;
      const wrapT = wrapText(text, columns);
      expect(wrapT.next().value).toEqual("The String");
      expect(wrapT.next().value).toEqual("global");
      expect(wrapT.next().value).toEqual("object is a");
      expect(wrapT.next().value).toEqual("constructor");
      expect(wrapT.next().value).toEqual("for strings,");
      expect(wrapT.next().value).toEqual("or a");
      expect(wrapT.next().value).toEqual("sequence of");
      expect(wrapT.next().value).toEqual("characters.");
    });

    test("Returns the string, but with line breaks inserted at just the right places to make", () => {
      const text =
        "The String global object is a constructor for strings, or a sequence of characters.";
      const columns = 26;
      const wrapT = wrapText(text, columns);
      expect(wrapT.next().value).toEqual("The String global object");
      expect(wrapT.next().value).toEqual("is a constructor for");
      expect(wrapT.next().value).toEqual("strings, or a sequence of");
      expect(wrapT.next().value).toEqual("characters.");
    });
  });

  describe("getPokerHandRank", () => {
    test("Returns the rank of the specified poker hand", () => {
      [
        {
          hand: ["4♥", "5♥", "6♥", "7♥", "8♥"],
          results: PokerRank.StraightFlush,
        },
        {
          hand: ["A♠", "4♠", "3♠", "5♠", "2♠"],
          results: PokerRank.Flush,
        },
        {
          hand: ["4♣", "4♦", "4♥", "4♠", "10♥"],
          results: PokerRank.FourOfKind,
        },
        {
          hand: ["4♣", "4♦", "5♦", "5♠", "5♥"],
          results: PokerRank.FullHouse,
        },
        {
          hand: ["4♣", "5♣", "6♣", "7♣", "Q♣"],
          results: PokerRank.Flush,
        },
        {
          hand: ["2♠", "3♥", "4♥", "5♥", "6♥"],
          results: PokerRank.Straight,
        },
        {
          hand: ["2♥", "4♦", "5♥", "A♦", "3♠"],
          results: PokerRank.HighCard,
        },
        {
          hand: ["2♥", "2♠", "2♦", "7♥", "A♥"],
          results: PokerRank.ThreeOfKind,
        },
        {
          hand: ["2♥", "4♦", "4♥", "A♦", "A♠"],
          results: PokerRank.TwoPairs,
        },
        {
          hand: ["3♥", "4♥", "10♥", "3♦", "A♠"],
          results: PokerRank.OnePair,
        },
        {
          hand: ["A♥", "K♥", "Q♥", "2♦", "3♠"],
          results: PokerRank.HighCard,
        },
      ].forEach((data) => {
        expect(getPokerHandRank(data.hand)).toBe(data.results);
      });
    });
  });
});
