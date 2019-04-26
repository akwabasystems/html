import isString     from "@akwaba/object-extensions/src/is-string";
import isArray      from "@akwaba/object-extensions/src/is-array";


/**
 * Creates an HTML element with the specified tag name, attributes, and children
 *
 * @param {String} tagname              the tag of the element to create (div, p, etc)
 * @param {Array|String} attributes     the attributes to set for this element (id, className, etc)
 * @param {Element|Text} children       the child nodes to append to this element
 * @return {Element} an HTML element of the given type and with the specified attributes
 */
export default (tagname, ...rest) => {
    let [attributes, children] = rest;

    if (rest.length === 1 && (isArray(attributes) || isString(attributes))) {
        children = attributes;
        attributes = null;
    }

    const element = document.createElement(tagname);

    if (attributes) {
        /* eslint-disable-next-line guard-for-in */
        for (const name in attributes) {
            element[name] = attributes[name];
        }
    }

    if (children) {
        if (isArray(children)) {
            children.forEach((child) => {
                if (isString(child)) {
                    child = document.createTextNode(child);
                }

                element.appendChild(child);
            });

        } else if (isString(children)) {
            element.appendChild(document.createTextNode(children));

        } else {
            element.appendChild(children);
        }
    }

    return element;
};
