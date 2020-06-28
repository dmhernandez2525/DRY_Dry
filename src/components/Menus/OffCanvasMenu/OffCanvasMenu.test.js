
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./OffCanvasMenu.stories";
    
    it("renders a div with DryOffCanvasMenu", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryOffCanvasMenu = div.querySelector(
        '.dry-offCanvasMenu:nth-child(1)'
      );
      expect(dryOffCanvasMenu).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      