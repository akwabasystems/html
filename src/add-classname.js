import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";
import hasClassName     from "./has-classname";


/**
 * Adds the given class name to the specified element
 *
 * @param {Node|String} element     the element to which to add the class name
 * @param className                 the class name to add
 */
export default (element, className) => {
    element = isString(element) ? getElement(element) : element;

    if (!hasClassName(element, className)) {
        element.className += `${element.className ? " " : ""}${className}`;
    }
};
