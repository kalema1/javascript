/**
 * Returns the bank account number parsed from specified string.
 *
 * You work for a bank, which has recently purchased an ingenious machine to assist
 * in reading letters and faxes sent in by branch offices.
 * The machine scans the paper documents, and produces a string with a bank account
 * that looks like this:
 *
 *    _  _     _  _  _  _  _
 *  | _| _||_||_ |_   ||_||_|
 *  ||_  _|  | _||_|  ||_| _|
 *
 * Each string contains an account number written using pipes and underscores.
 * Each account number should have 9 digits, all of which should be in the range 0-9.
 *
 * Your task is to write a function that can take bank account string and parse it
 * into actual account numbers.
 *
 * @param {string} bankAccount
 * @return {number}
 *
 * Example of return :
 *
 *   '    _  _     _  _  _  _  _ \n'+
 *   '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
 *   '  ||_  _|  | _||_|  ||_| _|\n'
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
 *   '|_||_  _||_| _||_|  ||_| _|\n',
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
 *   '|_||_  _||_| _||_| _||_| _|\n',
 *
 */

function splitToDigits(lines) {
  const digits = [];
  for (let i = 0; i < lines[0].length; i += 3) {
    digits.push(lines.map((line) => line.slice(i, i + 3)));
  }
  return digits;
}

function parseBankAccount(bankAccount) {
  // Define the mapping of digit patterns represented by pipes and underscores

  const digitPatterns = [
    " _     _  _     _  _  _  _  _ ",
    "| |  | _| _||_||_ |_   ||_||_|",
    "|_|  ||_  _|  | _||_|  ||_| _|",
  ];
  // Split the input string into lines
  const query = bankAccount.split("\n");

  const digits = splitToDigits(query);
  const patternDigits = splitToDigits(digitPatterns);

  const output = digits
    .map((digit) =>
      patternDigits.findIndex(
        (patternDigit) => patternDigit.join("") === digit.join("")
      )
    )
    .join("");
  return Number(output);
}
const bankAccount1 =
  " _  _  _  _  _  _  _  _  _ \n" +
  "|_| _| _||_||_ |_ |_||_||_|\n" +
  "|_||_  _||_| _||_| _||_| _|\n";

console.log(parseBankAccount(bankAccount1));

/**
 * Returns the string, but with line breaks inserted at just the right places to make
 * sure that no line is longer than the specified column number.
 * Lines can be broken at word boundaries only.
 *
 * @param {string} text
 * @param {number} columns
 * @return {Iterable.<string>}
 *
 * @example :
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 26 =>
 *      'The String global object',
 *      'is a constructor for',
 *      'strings, or a sequence of',
 *      'characters.'
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 12 =>
 *      'The String',
 *      'global',
 *      'object is a',
 *      'constructor',
 *      'for strings,',
 *      'or a',
 *      'sequence of',
 *      'characters.'
 */
function* wrapText(text, columns) {
  if (columns <= 0) {
    yield text;
    return;
  }

  const words = text.split(" ");
  let line = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (line.length + 1 + word.length <= columns) {
      line += " " + word;
    } else {
      yield line;
      line = word;
    }
  }

  if (line.length > 0) {
    yield line;
  }
}
const text2 =
  "The String global object is a constructor for strings, or a sequence of characters.";
const columns2 = 12;
for (const line of wrapText(text2, columns2)) {
  console.log(line);
}

/**
 * Returns the rank of the specified poker hand.
 * See the ranking rules here: https://en.wikipedia.org/wiki/List_of_poker_hands.
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
const PokerRank = {
  StraightFlush: 8,
  FourOfKind: 7,
  FullHouse: 6,
  Flush: 5,
  Straight: 4,
  ThreeOfKind: 3,
  TwoPairs: 2,
  OnePair: 1,
  HighCard: 0,
};

function getPokerHandRank(hand) {
  const handOne = hand.join(" ");

  let rankArray = [];
  let suitArray = [];

  //const suits = ["C", "D", "H", "S"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let arrayHandOne = handOne.split(" ");

  function sorted() {
    let sortedHand = [];
    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < arrayHandOne.length; j++) {
        if (ranks[i] === arrayHandOne[j].charAt(0)) {
          sortedHand.push(arrayHandOne[j]);
        }
      }
    }
    return sortedHand;
  }

  //return(sorted());

  let sortedHandOne = sorted(arrayHandOne);

  //return(sortedHandOne);
  function suitAndRank(sortedHandOne) {
    //return(sorted);
    for (let i = 0; i < sortedHandOne.length; i++) {
      let sted = sortedHandOne;
      rankArray.push(sted[i].charAt(0));
      suitArray.push(sted[i].charAt(1));
    }
  }

  suitAndRank(sortedHandOne);

  //return(rankArray, suitArray);

  function countSuites(suitArray) {
    let suitCount = {};
    suitArray.forEach(function (x) {
      suitCount[x] = (suitCount[x] || 0) + 1;
    });
    return suitCount;
  }

  function countRanks(rankArray) {
    let rankCount = {};
    rankArray.forEach(function (x) {
      rankCount[x] = (rankCount[x] || 0) + 1;
    });
    return rankCount;
  }

  function isFlush() {
    let cS = countSuites(suitArray);
    if (Object.keys(cS).find((key) => cS[key] === 5)) {
      return true;
    } else {
      return false;
    }
  }

  function isStraight() {
    let index = ranks.indexOf(rankArray[0]);
    let ref = ranks.slice(index, index + 5).join("");
    let section = rankArray.slice(0).join("");
    if (section === "10JQKA" && section === ref) {
      return "ROYALSTRAIGHT";
    } else if (section === "A2345" || section === ref) {
      return "STRAIGHT";
    } else {
      return "FALSE";
    }
  }

  function pairs() {
    let rS = countRanks(rankArray);
    return Object.keys(rS).filter((key) => rS[key] === 2).length;
  }

  function whichHand() {
    let rS = countRanks(rankArray);
    if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
      return PokerRank.StraightFlush;
    } else if (isFlush() === true && isStraight() === "STRAIGHT") {
      return PokerRank.StraightFlush;
    } else if (Object.keys(rS).find((key) => rS[key] === 4)) {
      return PokerRank.FourOfKind;
    } else if (Object.keys(rS).find((key) => rS[key] === 3) && pairs() === 1) {
      return PokerRank.FullHouse;
    } else if (isFlush() === true) {
      return PokerRank.Flush;
    } else if (isStraight() === "STRAIGHT") {
      return PokerRank.Straight;
    } else if (Object.keys(rS).find((key) => rS[key] === 3)) {
      return PokerRank.ThreeOfKind;
    } else if (pairs() === 2) {
      return PokerRank.TwoPairs;
    } else if (pairs() === 1) {
      return PokerRank.OnePair;
    } else {
      return PokerRank.HighCard;
    }
  }

  return whichHand();
}

const hand1 = ["4♥", "5♥", "6♥", "7♥", "8♥"];
console.log(getPokerHandRank(hand1));

const hand2 = ["3♥", "4♥", "10♥", "3♦", "A♠"];
console.log(getPokerHandRank(hand2));
/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +,
 * vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectangles does not matter.
 *
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 *
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+        '+------------+\n'+
 *    '|            |\n'+        '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+   =>   '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+        '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'         '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
function* getFigureRectangles(figure) {
  const lines = figure.split("\n");
  const rectangles = [];

  for (let y1 = 0; y1 < lines.length; y1++) {
    for (let x1 = 0; x1 < lines[y1].length; x1++) {
      if (lines[y1][x1] === "+") {
        for (let y2 = y1 + 1; y2 < lines.length; y2++) {
          for (let x2 = x1 + 1; x2 < lines[y1].length; x2++) {
            if (
              lines[y2][x2] === "+" &&
              lines[y1][x2] === "+" &&
              lines[y2][x1] === "+"
            ) {
              const rectangle = [];
              for (let y = y1; y <= y2; y++) {
                rectangle.push(lines[y].substring(x1, x2 + 1));
              }
              rectangles.push(rectangle);

              // Clear the rectangle from the figure
              for (let y = y1; y <= y2; y++) {
                lines[y] =
                  lines[y].substring(0, x1) +
                  " ".repeat(x2 - x1 + 1) +
                  lines[y].substring(x2 + 1);
              }
            }
          }
        }
      }
    }
  }

  for (const rectangle of rectangles) {
    yield rectangle.join("\n");
  }
}

const figure1 =
  "+------------+\n" +
  "|            |\n" +
  "|            |\n" +
  "|            |\n" +
  "+------+-----+\n" +
  "|      |     |\n" +
  "|      |     |\n" +
  "|      |     |\n" +
  "+------+-----+\n";

const figure2 =
  "   +-----+     \n" +
  "   |     |     \n" +
  "+--+-----+----+\n" +
  "|             |\n" +
  "|             |\n" +
  "|             |\n" +
  "+-------------+\n";

for (const rectangle of getFigureRectangles(figure1)) {
  console.log(rectangle);
}
/* for (const rectangle of getFigureRectangles(figure2)) {
  console.log(rectangle);
} */

module.exports = {
  parseBankAccount: parseBankAccount,
  wrapText: wrapText,
  PokerRank: PokerRank,
  getPokerHandRank: getPokerHandRank,
  getFigureRectangles: getFigureRectangles,
};
