import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Hides the specified element by setting its display to "none"
 *
 * @param {Node|String} element      the element to hide
 */
export default (element) => {
    element = isString(element) ? getElement(element) : element;
    element.style.display = "none";
};
