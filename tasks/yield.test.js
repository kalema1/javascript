const {
  get99BottlesOfBeer,
  getFibonacciSequence,
  depthTraversalTree,
  breadthTraversalTree,
  mergeSortedSequences,
} = require("./yield");

describe("yield", () => {
  describe("get99BottlesOfBeer", () => {
    test("Returns the lines sequence of '99 Bottles of Beer' song:", () => {
      const gen = get99BottlesOfBeer();
      expect(gen.next().value).toEqual(
        "99 bottles of beer on the wall, 99 bottles of beer."
      );
      expect(gen.next().value).toEqual(
        "Take one down and pass it around, 98 bottles of beer on the wall."
      );
      expect(gen.next().value).toEqual(
        "98 bottles of beer on the wall, 98 bottles of beer."
      );
      expect(gen.next().value).toEqual(
        "Take one down and pass it around, 97 bottles of beer on the wall."
      );
    });
  });
  describe("getFibonacciSequence", () => {
    test("Returns the Fibonacci sequence:", () => {
      const fibonacciSequence = getFibonacciSequence();
      expect(fibonacciSequence.next().value).toBe(0);
      expect(fibonacciSequence.next().value).toBe(1);
      expect(fibonacciSequence.next().value).toBe(1);
      expect(fibonacciSequence.next().value).toBe(2);
      expect(fibonacciSequence.next().value).toBe(3);
      expect(fibonacciSequence.next().value).toBe(5);
      expect(fibonacciSequence.next().value).toBe(8);
      expect(fibonacciSequence.next().value).toBe(13);
    });
  });

  describe("depthTraversalTree", () => {
    test("Traverses a tree using the depth-first strategy", () => {
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

      // Call the depthTraversalTree function and collect the result
      const result = [...depthTraversalTree(node1)];

      // Define the expected order of nodes
      const expectedOrder = [
        node1,
        node2,
        node3,
        node4,
        node5,
        node6,
        node7,
        node8,
      ];

      expect(result).toEqual(expectedOrder);
    });
  });

  describe("breadthTraversalTree", () => {
    test("Traverses a tree using the breadth-first strategy", () => {
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

      const result = [...breadthTraversalTree(node1)];

      const expectedOrder = [
        node1,
        node2,
        node3,
        node4,
        node5,
        node6,
        node7,
        node8,
      ];

      expect(result).toEqual(expectedOrder);
    });
  });

  describe("mergeSortedSequences", () => {
    test("Merges two yield-style sorted sequences into the one sorted sequence.", () => {
      const source1 = [1, 3, 5];
      const source2 = [-1];
      const mergedIterator = mergeSortedSequences(source1, source2);
      const mergedArray = [...mergedIterator];
      expect(mergedArray).toEqual([-1, 1, 3, 5]);
    });

    test("Merges two yield-style sorted sequences into the one sorted sequence.", () => {
      const source1 = [1, 3, 5];
      const source2 = [2, 4, 6];
      const mergedIterator = mergeSortedSequences(source1, source2);
      const mergedArray = [...mergedIterator];
      expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
