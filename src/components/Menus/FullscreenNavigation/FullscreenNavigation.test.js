
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./FullscreenNavigation.stories";
    
    it("renders a div with DryFullscreenNavigation", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFullscreenNavigation = div.querySelector(
        '.dry-fullscreenNavigation:nth-child(1)'
      );
      expect(dryFullscreenNavigation).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      