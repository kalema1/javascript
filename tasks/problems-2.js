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
  // Split the input string into lines and remove any leading/trailing spaces
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
  return output;
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
  const order = "23456789TJQKA";
  const values = [];
  const suits = new Set();

  for (const card of hand) {
    const value = card.slice(0, -1); // Extract the card value (excluding the suit)
    const suit = card.slice(-1); // Extract the card suit

    values.push(value);
    suits.add(suit);
  }
  values
    .map((a) => String.fromCharCode([77 - order.indexOf(a[0])]))
    .sort((a, b) => a.localeCompare(b));

  const isFlush = suits.size === 1;

  const first = values[0].charCodeAt(0);

  const isStraight = values.every(
    (value, index) => value.charCodeAt(0) - first === index
  );

  const valueCounts = {};
  for (const value of values) {
    valueCounts[value] = (valueCounts[value] || 0) + 1;
  }

  const countValues = Object.values(valueCounts);
  const maxCount = Math.max(...countValues);

  if (isFlush && isStraight) {
    return PokerRank.StraightFlush;
  } else if (maxCount === 4) {
    return PokerRank.FourOfKind;
  } else if (maxCount === 3 && countValues.includes(2)) {
    return PokerRank.FullHouse;
  } else if (isFlush) {
    return PokerRank.Flush;
  } else if (isStraight) {
    return PokerRank.Straight;
  } else if (maxCount === 3) {
    return PokerRank.ThreeOfKind;
  } else if (maxCount === 2 && countValues.includes(2)) {
    return PokerRank.TwoPairs;
  } else if (maxCount === 2) {
    return PokerRank.OnePair;
  } else {
    return PokerRank.HighCard;
  }
}

const hand1 = ["4♥", "5♥", "6♥", "7♥", "8♥"];
console.log(getPokerHandRank(hand1));

const hand2 = ["A♠", "4♠", "3♠", "5♠", "2♠"];
console.log(getPokerHandRank(hand2));
/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +,
 * vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectanles does not matter.
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
  throw new Error("Not implemented");
}

module.exports = {
  parseBankAccount: parseBankAccount,
  wrapText: wrapText,
  PokerRank: PokerRank,
  getPokerHandRank: getPokerHandRank,
  getFigureRectangles: getFigureRectangles,
};
