import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Shows an element by setting its display to "block"
 *
 * @param {Node|String} element     the element to show
 */
export default (element) => {
    element = isString(element) ? getElement(element) : element;
    element.style.display = "";
};
