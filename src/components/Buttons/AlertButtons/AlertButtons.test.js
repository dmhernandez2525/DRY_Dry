
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./AlertButtons.stories";
    
    it("renders a div with DryAlertButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryAlertButtons = div.querySelector(
        '.dry-alertButtons:nth-child(1)'
      );
      expect(dryAlertButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      