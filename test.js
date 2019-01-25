import deepDifference from "./index.js";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";

describe("deepDifference", function() {
  it("should get differece objects", function() {
    var compare = { name: "si-hai", age: 6 };
    var compareWith = { name: "shi-hong", age: 11 };
    const result = deepDifference(compare, compareWith);
    expect(isEqual(compare, result)).toBeTruthy();
  });

  it("should get empty object", function() {
    const compare = { name: "si-hai", age: 6 };
    const compareWith = { name: "si-hai", age: 6 };
    const result = deepDifference(compare, compareWith);
    expect(isEmpty(result)).toBeTruthy();
  });

  it("should get empty object with deep compare", function() {
    const compare = {
      name: "si-hai",
      age: 6,
      hobbies: { inSchool: { main: "study" } }
    };

    const compareWith = {
      name: "si-hai",
      age: 6,
      hobbies: { inSchool: { main: "play" } }
    };

    const result = deepDifference(compare, compareWith);
    expect(isEqual(result, { hobbies: compare.hobbies  } )).toBeTruthy();
  });
});
