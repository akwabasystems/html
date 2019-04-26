import isString         from "@akwaba/object-extensions/src/is-string";
import getElement       from "./get-element";


/**
 * Sets CSS styles on the specified element. The style is the normal declaration string as it appears in
 * the CSS file (i.e. margin:0 10px;color: #069;border: 1px solid #ccc)
 *
 * @param {Node|String} element     the element to which to apply the CSS styles
 * @param {String|Object} styles    the CSS styles to set on this element
 */
export default (element, styles) => {
    element = isString(element) ? getElement(element) : element;
    let prop;

    if (isString(styles)) {
        element.style.cssText += `;${styles}`;
    } else {
        /* eslint-disable-next-line guard-for-in */
        for (prop in styles) {
            element.style[prop] = styles[prop];
        }
    }
};
