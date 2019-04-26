import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Returns true if the specified element is visible (display not "none"); otherwise, returns false
 *
 * @param {Node|String} element     the DOM element to check
 * @return {Boolean} true if the element is visible; otherwise, returns false
 */
export default (element) => {
    element = isString(element) ? getElement(element) : element;
    return element.style.display !== "none";
};
