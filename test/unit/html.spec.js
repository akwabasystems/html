import HTML from "../../index";


describe("HTML API", () => {

    it("should contain an enum of different node types", () => {
        expect(HTML.nodeType.ELEMENT_NODE).toBe(1);
        expect(HTML.nodeType.TEXT_NODE).toBe(3);
        expect(HTML.nodeType.COMMENT_NODE).toBe(8);
        expect(HTML.nodeType.DOCUMENT_NODE).toBe(9);
        expect(HTML.nodeType.DOCUMENT_FRAGMENT_NODE).toBe(11);
    });

    it("should create an element with attributes and content", () => {
        let element = HTML.createElement("div");
        expect(element).toBeDefined();
        expect(element.nodeType).toBe(HTML.nodeType.ELEMENT_NODE);

        element = HTML.createElement("div", { id: "container", className: "content-wrapper"});
        expect(element.id).toBe("container");
        expect(element.className).toBe("content-wrapper");

        let paragraph = HTML.createElement("p", "Lorem Ipsum Dolor");
        element = HTML.createElement("div", [paragraph, "Some text content"]);
        expect(element.children.length).toBe(1);

        paragraph = HTML.createElement("div", "Sit amet");
        element = HTML.createElement("div", {}, paragraph);
        expect(element.children.length).toBe(1);
        expect(element.children[0].innerHTML).toBe("Sit amet");
    });

    it("should find an element by ID", () => {
        const container = HTML.createElement("div", { 
            id: "container",
            className: "content-wrapper"
        }, "Akwaba. Welcome.");
        document.body.appendChild(container);

        const node = HTML.getElement("container");
        expect(node).toBeDefined();
        expect(node.id).toBe("container");
        expect(node.className).toBe("content-wrapper");
        expect(node.innerHTML).toBe("Akwaba. Welcome.");
    });

    it("should add, remove, or toggle class names for an element", () => {
        const {
            createElement,
            addClassName,
            removeClassName,
            hasClassName,
            toggleClassName
        } = HTML;

        const modal = createElement("div", { id: "modalDialog" });
        document.body.appendChild(modal);
        expect(modal.className).toBe("");

        addClassName(modal, "modal-dialog");
        expect(modal.className).toBe("modal-dialog");

        addClassName("modalDialog", "is-open");
        expect(modal.className).toBe("modal-dialog is-open");
        expect(hasClassName(modal, "is-open")).toBeTruthy();

        addClassName("modalDialog", "is-open");
        expect(modal.className).toBe("modal-dialog is-open");

        removeClassName(modal, "is-open");
        expect(modal.className).toBe("modal-dialog");

        removeClassName("modalDialog", "is-showing");
        expect(modal.className).toBe("modal-dialog");

        toggleClassName("modalDialog", "is-open");
        expect(modal.className).toBe("modal-dialog is-open");
        expect(hasClassName("modalDialog", "is-open")).toBeTruthy();
        toggleClassName(modal, "is-open");
        expect(modal.className).toBe("modal-dialog");
    });

    it("should set the content of an element", () => {
        const element = HTML.createElement("p", { id: "intro" });
        document.body.appendChild(element);
        expect(element.innerHTML).toBe("");

        HTML.setContent(element, "Lorem Ipsum Dolor");
        expect(element.innerHTML).toBe("Lorem Ipsum Dolor");

        HTML.setContent("intro", "Sit amet");
        expect(element.innerHTML).toBe("Sit amet");
    });

    it("should show or hide an element", () => {
        const element = HTML.createElement("div", { id: "modalDialog" });
        document.body.appendChild(element);
        expect(HTML.isVisible(element)).toBeTruthy();
        
        HTML.hide(element);
        expect(HTML.isVisible(element)).toBeFalsy();

        HTML.show(element);
        expect(HTML.isVisible("modalDialog")).toBeTruthy();

        HTML.hide("modalDialog");
        HTML.show("modalDialog");
        expect(HTML.isVisible("modalDialog")).toBeTruthy();
    });

    it("should get or set the style of an element", () => {
        const {
            createElement,
            setStyle,
            getStyle
        } = HTML;

        const element = createElement("div", { 
            id: "main"
        });
        document.body.appendChild(element);
        
        expect(getStyle(element, "opacity")).toBe(1);
        expect(getStyle(element, "unknownStyle")).toBeUndefined();

        setStyle(element, { 
            display: "flex", 
            "margin-top": "20px",
            opacity: 1,
            float: "left",
            overflow: null,
            width: "auto"
        });
        expect(getStyle(element, "display")).toBe("flex");
        expect(getStyle(element, "marginTop")).toBe("20px");
        expect(getStyle(element, "opacity")).toBe(1);
        expect(getStyle(element, "float")).toBe("left");
        expect(getStyle("main", "overflow")).toBe("");
        expect(getStyle("main", "width")).toBeNull();
        expect(getStyle("main", "invalid-style")).toBeUndefined();

        setStyle("main", "position:absolute;padding:8px;");
        expect(getStyle("main", "padding")).toBe("8px");
    });

    it("should remove an element", () => {
        const paragraph = HTML.createElement("p", "Lorem Ipsum Dolor");
        const element = HTML.createElement("div", [paragraph]);
        expect(element.children.length).toBe(1);

        HTML.remove(paragraph);
        expect(element.children.length).toBe(0);

        const orphanElement = HTML.createElement("div");
        const notRemoved = HTML.remove(orphanElement);
        expect(notRemoved === orphanElement);
    });

    it("should enable and disable an element", () => {
        const inputField = HTML.createElement("input", {id: "username", type: "text"});
        document.body.appendChild(inputField);
        expect(inputField.disabled).toBeFalsy();

        HTML.disable(inputField);
        expect(inputField.disabled).toBeTruthy();

        HTML.enable(inputField);
        expect(inputField.disabled).toBeFalsy();

        HTML.disable("username");
        HTML.enable("username");
        expect(inputField.disabled).toBeFalsy();
    });

});
