import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Disables the specified element
 *
 * @param {Node|String} element     the element to disable
 */
export default (element) => {
    element = isString(element) ? getElement(element) : element;
    element.disabled = true;
};
