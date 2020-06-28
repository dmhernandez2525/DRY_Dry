
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./DraggableHTMLElement.stories";
    
    it("renders a div with DryDraggableHTMLElement", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryDraggableHTMLElement = div.querySelector(
        '.dry-draggableHTMLElement:nth-child(1)'
      );
      expect(dryDraggableHTMLElement).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      