import Extensions       from "@akwaba/object-extensions";
import getElement       from "./get-element";


/**
 * Removes the specified class name from the given element
 *
 * @param {Node|String} element     the element from which to remove the class name
 * @param {String} className        the class name to remove
 */
export default (element, className) => {
    element = Extensions.isString(element) ? getElement(element) : element;
    const pattern = new RegExp(`(^|\\s)${className}(\\s|$)`);
    element.className = String.trim(element.className.replace(pattern, " "));
};
