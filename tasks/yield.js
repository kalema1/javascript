/** ******************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ****************************************************************************************** */

/**
 * Returns the lines sequence of "99 Bottles of Beer" song:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 * See the full text at
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * NOTE: Please try to complete this task faster then original song finished:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
function* get99BottlesOfBeer() {
  for (let bottles = 99; bottles > 0; bottles--) {
    yield `${bottles} bottle${
      bottles === 1 ? "" : "s"
    } of beer on the wall, ${bottles} bottle${
      bottles === 1 ? "" : "s"
    } of beer.`;
    if (bottles === 1) {
      yield `Take one down and pass it around, no more bottles of beer on the wall.`;
    } else {
      yield `Take one down and pass it around, ${bottles - 1} bottle${
        bottles === 2 ? "" : "s"
      } of beer on the wall.`;
    }
  }

  yield `No more bottles of beer on the wall, no more bottles of beer.`;
  yield `Go to the store and buy some more, 99 bottles of beer on the wall.`;
}
const beerIterator = get99BottlesOfBeer();
for (const line of beerIterator) {
  console.log(line);
}

/**
 * Returns the Fibonacci sequence:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * See more at: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
function* getFibonacciSequence() {
  let num1 = 0;
  let num2 = 1;

  while (true) {
    yield num1;
    [num1, num2] = [num2, num1 + num2];
  }
}
const fibonacciIterator = getFibonacciSequence();
for (let i = 0; i < 15; i++) {
  console.log(fibonacciIterator.next().value);
}

/**
 * Traverses a tree using the depth-first strategy
 * See details: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in depth-first order
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */
function* depthTraversalTree(root) {
  if (root) {
    yield root; // Yield the current node

    if (root.children) {
      for (let child of root.children) {
        yield* depthTraversalTree(child); // Recursively yield nodes in children
      }
    }
  }
}
var node1 = { n: 1 },
  node2 = { n: 2 },
  node3 = { n: 3 },
  node4 = { n: 4 },
  node5 = { n: 5 },
  node6 = { n: 6 },
  node7 = { n: 7 },
  node8 = { n: 8 };
node1.children = [node2, node6, node7];
node2.children = [node3, node4];
node4.children = [node5];
node7.children = [node8];

const result = [...depthTraversalTree(node1)];
console.log(result);

/**
 * Traverses a tree using the breadth-first strategy
 * See details: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * Avoid using recursion due to maximum call stack size exceed.
 * See test for detail.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in breadth-first order
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
function* breadthTraversalTree(root) {
  if (!root) return;

  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    yield currentNode;

    if (currentNode.children && currentNode.children.length > 0) {
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
  }
}
var node1 = { n: 1 },
  node2 = { n: 2 },
  node3 = { n: 3 },
  node4 = { n: 4 },
  node5 = { n: 5 },
  node6 = { n: 6 },
  node7 = { n: 7 },
  node8 = { n: 8 };
node1.children = [node2, node3, node4];
node2.children = [node5, node6];
node4.children = [node7];
node6.children = [node8];

const traversalGenerator = breadthTraversalTree(node1);
const traversedNodes = [...traversalGenerator];
console.log(traversedNodes);

/**
 * Merges two yield-style sorted sequences into the one sorted sequence.
 * The result sequence consists of sorted items from source iterators.
 *
 * Avoid using recursion due to maximum call stack size exceed.
 * See test for detail.
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} the merged sorted sequence
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
function* mergeSortedSequences(source1, source2) {
  const iterator1 = source1[Symbol.iterator]();
  const iterator2 = source2[Symbol.iterator]();

  let result1 = iterator1.next();
  let result2 = iterator2.next();

  while (!result1.done || !result2.done) {
    if (result1.done) {
      yield result2.value;
      result2 = iterator2.next();
    } else if (result2.done) {
      yield result1.value;
      result1 = iterator1.next();
    } else {
      if (result1.value < result2.value) {
        yield result1.value;
        result1 = iterator1.next();
      } else {
        yield result2.value;
        result2 = iterator2.next();
      }
    }
  }
}

const source1 = [1, 3, 5];
const source2 = [-1];
const mergedIterator = mergeSortedSequences(source1, source2);
const mergedArray = [...mergedIterator];
console.log(mergedArray);

module.exports = {
  get99BottlesOfBeer: get99BottlesOfBeer,
  getFibonacciSequence: getFibonacciSequence,
  depthTraversalTree: depthTraversalTree,
  breadthTraversalTree: breadthTraversalTree,
  mergeSortedSequences: mergeSortedSequences,
};
