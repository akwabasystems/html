import Extensions   from "@akwaba/object-extensions";
import getElement   from "./get-element";


/**
 * Sets the HTML content for the specified element
 *
 * @param {Node|String} element     the element for which to set the content
 * @param {String} html             the HTML content to set
 */
export default (element, html) => {
    element = Extensions.isString(element) ? getElement(element) : element;
    element.innerHTML = String.removeScripts(html);
};
