/**
 * Returns the array of 32 compass points and heading.
 * See details here:
 * https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points
 *
 * @return {array}
 *
 * Example of return :
 *  [
 *     { abbreviation : 'N',     azimuth : 0.00 },
 *     { abbreviation : 'NbE',   azimuth : 11.25 },
 *     { abbreviation : 'NNE',   azimuth : 22.50 },
 *       ...
 *     { abbreviation : 'NbW',   azimuth : 348.75 }
 *  ]
 */

function Point(abbr, azimuth) {
  this.abbreviation = abbr;
  this.azimuth = azimuth;
}

function createCompassPoints(sides = ["N", "E", "S", "W"]) {
  /* use array of cardinal directions only! it is a default parameter! */

  let res = new Array(32);

  sides.forEach((val, idx) => (res[idx * 8] = val));
  function rec_travel(start_str, finish_str, start_pos, finish_pos) {
    let medium_pos = (finish_pos + start_pos) / 2;
    if (!Number.isInteger(medium_pos)) return;
    let medium_str = start_str + finish_str;
    if (medium_str.length > 3) {
      let main_idx =
        (finish_pos - start_pos > 0 ? Math.ceil : Math.trunc)(medium_pos / 8) %
        4;
      medium_str = start_str + "b" + sides[main_idx];
    }
    if (!res[medium_pos]) {
      res[medium_pos] = medium_str;
    }
    rec_travel(start_str, res[medium_pos], start_pos, medium_pos);
    rec_travel(finish_str, res[medium_pos], finish_pos, medium_pos);
  }
  rec_travel("N", "N", 0, 32);
  return res.map((abbr, idx) => new Point(abbr, 11.25 * idx));
}
const compass = createCompassPoints();
console.log(compass);

/**
 * Expand the braces of the specified string.
 * See https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion
 *
 * In the input string, balanced pairs of braces containing comma-separated substrings
 * represent alternations that specify multiple alternatives which are to appear
 * at that position in the output.
 *
 * @param {string} str
 * @return {Iterable.<string>}
 *
 * NOTE: The order of output string does not matter.
 *
 * Example:
 *   '~/{Downloads,Pictures}/*.{jpg,gif,png}'  => '~/Downloads/*.jpg',
 *                                                '~/Downloads/*.gif'
 *                                                '~/Downloads/*.png',
 *                                                '~/Pictures/*.jpg',
 *                                                '~/Pictures/*.gif',
 *                                                '~/Pictures/*.png'
 *
 *   'It{{em,alic}iz,erat}e{d,}, please.'  => 'Itemized, please.',
 *                                            'Itemize, please.',
 *                                            'Italicized, please.',
 *                                            'Italicize, please.',
 *                                            'Iterated, please.',
 *                                            'Iterate, please.'
 *
 *   'thumbnail.{png,jp{e,}g}'  => 'thumbnail.png'
 *                                 'thumbnail.jpeg'
 *                                 'thumbnail.jpg'
 *
 *   'nothing to do' => 'nothing to do'
 */
function* expandBraces(str) {
  yield* expandR("", str, "");
}

function* expandR(pre, s, suf) {
  let i1 = -1;
  let i2 = 0;
  let noEscape = s.replace(/(\\\\\\|\\\\[,}{])/g, "  ");
  let sb = null;

  outer: while ((i1 = noEscape.indexOf("{", i1 + 1)) !== -1) {
    i2 = i1 + 1;
    sb = s.slice();
    let depth = 1;

    for (; i2 < s.length && depth > 0; i2++) {
      let c = noEscape[i2];
      depth = c === "{" ? depth + 1 : depth;
      depth = c === "}" ? depth - 1 : depth;

      if (c === "," && depth === 1) {
        sb = sb.substring(0, i2) + "\u0000" + sb.substring(i2 + 1);
      } else if (c === "}" && depth === 0 && sb.indexOf("\u0000") !== -1) {
        break outer;
      }
    }
  }

  if (i1 === -1) {
    if (suf.length > 0) {
      yield* expandR(pre + s, suf, "");
    } else {
      yield pre + s + suf;
    }
  } else {
    for (let m of sb.substring(i1 + 1, i2).split("\u0000")) {
      yield* expandR(pre + s.substring(0, i1), m, s.substring(i2 + 1) + suf);
    }
  }
}

const expressions = [
  "It{{em,alic}iz,erat}e{d,}, please.",
  "~/{Downloads,Pictures}/*.{jpg,gif,png}",
  "thumbnail.{png,jp{e,}g}",
  "nothing to do",
];

for (let s of expressions) {
  console.log();
  for (let result of expandBraces(s)) {
    console.log(result);
  }
}

/**
 * Returns the ZigZag matrix
 *
 * The fundamental idea in the JPEG compression algorithm is to sort coefficient
 * of given image by zigzag path and encode it.
 * In this task you are asked to implement a simple method to create a zigzag square matrix.
 * See details at https://en.wikipedia.org/wiki/JPEG#Entropy_coding
 * and zigzag path here: https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/JPEG_ZigZag.svg/220px-JPEG_ZigZag.svg.png
 *
 * @param {number} n - matrix dimension
 * @return {array}  n x n array of zigzag path
 *
 * @example
 *   1  => [[0]]
 *
 *   2  => [[ 0, 1 ],
 *          [ 2, 3 ]]
 *
 *         [[ 0, 1, 5 ],
 *   3  =>  [ 2, 4, 6 ],
 *          [ 3, 7, 8 ]]
 *
 *         [[ 0, 1, 5, 6 ],
 *   4 =>   [ 2, 4, 7,12 ],
 *          [ 3, 8,11,13 ],
 *          [ 9,10,14,15 ]]
 *
 */
function getZigZagMatrix(n) {
  if (n <= 0) return [];

  // Initialize the matrix with zeros
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let row = 0;
  let col = 0;
  let value = 0;

  for (let i = 0; i < n * n; i++) {
    matrix[row][col] = value;
    value++;

    // Check if we need to move up or down the zigzag path
    if ((row + col) % 2 === 0) {
      if (col < n - 1) {
        col++;
      } else {
        row += 2;
      }

      if (row > 0) {
        row--;
      }
    } else {
      if (row < n - 1) {
        row++;
      } else {
        col += 2;
      }

      if (col > 0) {
        col--;
      }
    }
  }

  return matrix;
}
const res = getZigZagMatrix(4);
console.log(res);

/**
 * Returns true if specified subset of dominoes can be placed in a row accroding to the game rules.
 * Dominoes details see at: https://en.wikipedia.org/wiki/Dominoes
 *
 * Each domino tile presented as an array [x,y] of tile value.
 * For example, the subset [1, 1], [2, 2], [1, 2] can be arranged in a row
 *  (as [1, 1] followed by [1, 2] followed by [2, 2]),
 * while the subset [1, 1], [0, 3], [1, 4] can not be arranged in one row.
 * NOTE that as in usual dominoes playing any pair [i, j] can also be treated as [j, i].
 *
 * @params {array} dominoes
 * @return {bool}
 *
 * @example
 *
 * [[0,1],  [1,1]] => true
 * [[1,1], [2,2], [1,5], [5,6], [6,3]] => false
 * [[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]]  => true
 * [[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]] => false
 *
 */
function canDominoesMakeRow(dominoes) {
  const graph = new Map();

  // Create a graph to represent the dominoes and their connections
  for (const [x, y] of dominoes) {
    if (!graph.has(x)) {
      graph.set(x, []);
    }
    if (!graph.has(y)) {
      graph.set(y, []);
    }
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  function dfs(node) {
    visited.add(node);
    for (const neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  const visited = new Set();
  let oddDegreeCount = 0;

  for (const node of graph.keys()) {
    if (graph.get(node).length % 2 !== 0) {
      oddDegreeCount++;
    }
  }

  // A valid domino row should have either zero or two nodes with odd degrees
  if (oddDegreeCount === 0 || oddDegreeCount === 2) {
    // Check if the graph is connected
    for (const node of graph.keys()) {
      if (!visited.has(node)) {
        dfs(node);
        break;
      }
    }

    return visited.size === graph.size;
  }

  return false;
}
console.log(
  canDominoesMakeRow([
    [0, 1],
    [1, 1],
  ])
);
console.log(
  canDominoesMakeRow([
    [1, 1],
    [2, 2],
    [1, 5],
    [5, 6],
    [6, 3],
  ])
);
console.log(
  canDominoesMakeRow([
    [1, 3],
    [2, 3],
    [1, 4],
    [2, 4],
    [1, 5],
    [2, 5],
  ])
);
console.log(
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
);

/**
 * Returns the string expression of the specified ordered list of integers.
 *
 * A format for expressing an ordered list of integers is to use a comma separated list of either:
 *   - individual integers
 *   - or a range of integers denoted by the starting integer separated from the end
 *     integer in the range by a dash, '-'.
 *     (The range includes all integers in the interval including both endpoints)
 *     The range syntax is to be used only for, and for every range that expands to
 *     more than two values.
 *
 * @params {array} nums
 * @return {bool}
 *
 * @example
 *
 * [ 0, 1, 2, 3, 4, 5 ]   => '0-5'
 * [ 1, 4, 5 ]            => '1,4,5'
 * [ 0, 1, 2, 5, 7, 8, 9] => '0-2,5,7-9'
 * [ 1, 2, 4, 5]          => '1,2,4,5'
 */
function extractRanges(nums) {
  if (nums.length === 0) {
    return "";
  }

  const ranges = [];
  let currentRange = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      currentRange.push(nums[i]);
    } else {
      if (currentRange.length > 2) {
        ranges.push(
          `${currentRange[0]}-${currentRange[currentRange.length - 1]}`
        );
      } else {
        ranges.push(currentRange.join(","));
      }
      currentRange = [nums[i]];
    }
  }

  if (currentRange.length > 2) {
    ranges.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`);
  } else {
    ranges.push(currentRange.join(","));
  }

  return ranges.join(",");
}
console.log(extractRanges([0, 1, 2, 3, 4, 5]));
console.log(extractRanges([1, 4, 5]));
console.log(extractRanges([0, 1, 2, 5, 7, 8, 9]));
console.log(extractRanges([1, 2, 4, 5]));

module.exports = {
  createCompassPoints: createCompassPoints,
  expandBraces: expandBraces,
  getZigZagMatrix: getZigZagMatrix,
  canDominoesMakeRow: canDominoesMakeRow,
  extractRanges: extractRanges,
};
