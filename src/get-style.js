import Extensions   from "@akwaba/object-extensions";
import getElement   from "./get-element";


/**
 * Retrieves the given style declaration on the specified element
 *
 * @param {Element|String} element      the element for which to retrieve the style declaration
 * @param {String} style                the CSS declaration to retrieve (i.e width, color, background, etc)
 * @return {String} the style declaration string for the element
 */
export default (element, style) => {
    element = Extensions.isString(element) ? getElement(element) : element;
    style = (style === "float") ? "cssFloat" : String.toCamelCase(style);
    let value = element.style[style];

    if (!value) {
        const css = document.defaultView.getComputedStyle(element, null);
        value = css ? css[style] : null;
    }

    if (style === "opacity") {
        return value ? parseFloat(value) : 1.0;
    }

    return (value === "auto") ? null : value;
};
