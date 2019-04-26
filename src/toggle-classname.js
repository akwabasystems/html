import isString             from "@akwaba/object-extensions/src/is-string";
import getElement           from "./get-element";
import hasClassName         from "./has-classname";
import addClassName         from "./add-classname";
import removeClassName      from "./remove-classname";


/**
 * Toggles a class name on the specified element: adds it if the element doesn't have it,
 * and removes it otherwise.
 *
 * @param {Node|String} element     the element for which to toggle the class name
 * @param {String} className        the class name to toggle
 */
export default (element, className) => {
    element = isString(element) ? getElement(element) : element;

    if (hasClassName(element, className)) {
        removeClassName(element, className);
    } else {
        addClassName(element, className);
    }
};
