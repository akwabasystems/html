/**
 * Removes the specified element from its parent
 *
 * @param {Node|String} element      the element to remove
 * @return {Node} the element that was removed
 */
export default (element) => {
    return (element && element.parentNode) ? element.parentNode.removeChild(element) : element;
};
