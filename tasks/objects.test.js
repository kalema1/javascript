const objects = require("./objects");

describe("objcts", () => {
  describe("Rectangle", () => {
    test("Returns the rectagle object with width and height parameters and getArea() method", () => {
      var r = new objects.Rectangle(10, 20);
      expect(r.width).toBe(10);
      expect(r.height).toBe(20);
      expect(r.getArea()).toBe(200);
    });
  });

  describe("getJSON", () => {
    test("Returns the JSON representation of specified object", () => {
      expect(objects.getJSON([1, 2, 3])).toEqual("[1,2,3]");
      expect(objects.getJSON({ width: 10, height: 20 })).toEqual(
        '{"width":10,"height":20}'
      );
    });
  });

  describe("fromJSON", () => {
    test("Returns the object of specified type from JSON representation", () => {
      const Rectangle = {};
      expect(
        objects.fromJSON(Rectangle.prototype, '{"width":10, "height":20}')
      ).toEqual({ width: 10, height: 20 });
    });
  });

  describe("cssSelectorBuilder", () => {
    beforeEach(() => {
      // Reset the value property before each test
      objects.cssSelectorBuilder.value = "";
    });

    test("should build a simple selector with an ID and classes", () => {
      const selector = objects.cssSelectorBuilder
        .id("main")
        .class("container")
        .class("editable")
        .stringify();
      expect(selector).toBe("#main.container.editable");
    });

    test("should build a selector with element, attribute, and pseudo-class", () => {
      const selector = objects.cssSelectorBuilder
        .element("a")
        .attr('href$=".png"')
        .pseudoClass("focus")
        .stringify();
      expect(selector).toBe('a[href$=".png"]:focus');
    });
  });
});
