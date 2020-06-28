
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ContainedButton.stories";
    
    it("renders a div with DryContainedButton", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryContainedButton = div.querySelector(
        '.dry-containedButton:nth-child(1)'
      );
      expect(dryContainedButton).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      