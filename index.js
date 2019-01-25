import transform from "lodash/transform";
import isEqual from "lodash/isEqual";
import isObject from "lodash/isObject";

/**
 *  get deeply Difference object from two objects
 * @param { Object } object compared Object
 * @param { Object } target compare with
 * @return { Object } reutrn a new Object
 */

function deepDifference(object, target) {
  function changes(object, target) {
    return transform(
      object,

      function(result, value, key) {
        if (!isEqual(value, target[key])) {
          result[key] =
            isObject(value) && isObject(target[key])
              ? changes(value, target[key])
              : value;
        }
      },

      {}
    );
  }

  return changes(object, target);
}

export default deepDifference;
