
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./TypicalDeviceBreakpoints.stories";
    
    it("renders a div with DryTypicalDeviceBreakpoints", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTypicalDeviceBreakpoints = div.querySelector(
        '.dry-typicalDeviceBreakpoints:nth-child(1)'
      );
      expect(dryTypicalDeviceBreakpoints).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      