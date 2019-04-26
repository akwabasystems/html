# @akwaba/html

## Overview

A collection of HTML utility methods.

Published on [npmjs.com](https://www.npmjs.com) as `@akwaba/html`.


## API

- `addClassName(element, className)` - Adds the given class name to the specified element
- `createElement(tagName, attributes, children)` - Creates an HTML element with the specified tag name, attributes, and children
- `disable(element)` - Disables the specified element
- `enable(element)` - Enables the specified element
- `getElement(id)` - Returns the HTML element with the specified ID (alias for `document.getElementById`)
- `getStyle(element, style)` - Retrieves the given style declaration on the specified element
- `hasClassName(element, className)` - Returns true if the element has the specified class name; otherwise, returns false
- `hide(element)` - Hides the specified element by setting its display to `none`
- `isVisible(element)` - Returns true if the specified element is visible (display not set to `none`); otherwise, returns false
- `removeClassName(element, className)` - Removes the specified class name from the given element
- `remove(element)` - Removes the specified element from its parent
- `setContent(element, html)` - Sets the HTML content for the specified element
- `setStyle(element, styles)` - Sets CSS styles on the specified element
- `show(element)` - Shows an element by setting its display to `block`
- `toggleClassName(element, className)` - Toggles a class name on the specified element


### Usage

```js

import HTML from '@akwaba/html';

const element = HTML.createElement("div", { className: "container" });
console.log(element);   // <div class="container"></div>

```


## License
Copyright (c) 2019 Akwaba Systems, Inc.
