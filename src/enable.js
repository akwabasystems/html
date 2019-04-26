import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Enables the specified element
 *
 * @param {Node|String} element     the element to enable
 */
export default (element) => {
    element = isString(element) ? getElement(element) : element;
    element.disabled = false;
};
