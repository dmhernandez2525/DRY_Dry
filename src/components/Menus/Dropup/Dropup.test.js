
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Dropup.stories";
    
    it("renders a div with DryDropup", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryDropup = div.querySelector(
        '.dry-dropup:nth-child(1)'
      );
      expect(dryDropup).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      