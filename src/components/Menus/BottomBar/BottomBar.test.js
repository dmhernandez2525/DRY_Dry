
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./BottomBar.stories";
    
    it("renders a div with DryBottomBar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryBottomBar = div.querySelector(
        '.dry-bottomBar:nth-child(1)'
      );
      expect(dryBottomBar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      