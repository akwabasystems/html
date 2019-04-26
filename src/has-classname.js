import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Returns true if the element has the specified class name; otherwise, returns false
 *
 * @param {Node|String} element     the element to query for the class
 * @param {String} className        the class name to look for
 * @return true if the element has the specified class name; otherwise, returns false
 */
export default (element, className) => {
    element = isString(element) ? getElement(element) : element;
    return (new RegExp(`(^|\\s)${className}(\\s|$)`).test(element.className));
};
