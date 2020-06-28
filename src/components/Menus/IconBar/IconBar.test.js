
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./IconBar.stories";
    
    it("renders a div with DryIconBar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryIconBar = div.querySelector(
        '.dry-iconBar:nth-child(1)'
      );
      expect(dryIconBar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      