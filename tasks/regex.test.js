const regex = require("./regex");

describe("regex", () => {
  describe("getRegexForGuid", () => {
    test("will return the regexp that matches a GUID string representation", () => {
      expect(
        "{3F2504E0-4F89-41D3-9A0C-0305E82C3301}".match(regex.getRegexForGuid())
      ).toBeTruthy();
    });
    test("will return the regexp that matches a GUID string representation", () => {
      expect(
        "{5EDEB36C-9006-467A8D04-AFB6F62CD7D2}".match(regex.getRegexForGuid())
      ).toBeFalsy();
    });
  });

  describe("getRegexForPitSpot", () => {
    test("Returns the regexp that matches the strings", () => {
      ["pit", "spot", "spate", "slap two", "respite"].forEach((data) => {
        expect(data.match(regex.getRegexForPitSpot())).toBeTruthy();
      });
    });
    test("Returns the regexp that dont  matches the strings", () => {
      [" pt", "Pot", "peat", "part"].forEach((data) => {
        expect(data.match(regex.getRegexForPitSpot())).toBeFalsy();
      });
    });
  });

  describe("getRegexForIPv4", () => {
    test("Returns the regexp that matches all IPv4 strings", () => {
      [
        "0.0.0.0",
        "127.0.0.1",
        "10.10.1.1",
        "46.61.155.237",
        "010.234.015.001",
      ].forEach((data) => {
        expect(data.match(regex.getRegexForIPv4())).toBeTruthy();
      });
    });
    test("Returns the regexp that dont match all none IPv4 strings", () => {
      [
        "300.0.0.0",
        "127.0.0.-1",
        "23.24.25.26.27",
        "Set dns to 8.8.8.8",
      ].forEach((data) => {
        expect(data.match(regex.getRegexForIPv4())).toBeFalsy();
      });
    });
  });

  describe("getRegexForSSN", () => {
    test("Returns the regexp that matches all Social Security Number codes in 'XXX-XX-XXXX' format where X is digit", () => {
      ["123-45-6789", "234-56-2349", "875-43-0298", "034-01-0008"].forEach(
        (data) => {
          expect(data.match(regex.getRegexForSSN())).toBeTruthy();
        }
      );
    });
    test("Returns the regexp that do not  match none Social Security Number codes in 'XXX-XX-XXXX' format where X is digit", () => {
      [
        "123456789",
        "000-56-2349",
        "875-00-0298",
        "034-01-0000",
        "0S4-H1-HACK",
      ].forEach((data) => {
        expect(data.match(regex.getRegexForSSN())).toBeFalsy();
      });
    });
  });

  describe("getPasswordValidator", () => {
    test("will Returns the password validator regex", () => {
      const minLength = 6;
      ["Pa55Word", "PASSw0rd"].forEach((data) => {
        expect(data.match(regex.getPasswordValidator(minLength))).toBeTruthy();
      });
    });
    test("will Returns the password validator regex", () => {
      const minLength = 6;
      ["Pa55", "password", "PASSW0RD"].forEach((data) => {
        expect(data.match(regex.getPasswordValidator(minLength))).toBeFalsy();
      });
    });
  });
});
