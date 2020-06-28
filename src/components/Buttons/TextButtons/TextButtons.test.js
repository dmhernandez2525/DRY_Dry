
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./TextButtons.stories";
    
    it("renders a div with DryTextButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTextButtons = div.querySelector(
        '.dry-textButtons:nth-child(1)'
      );
      expect(dryTextButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      