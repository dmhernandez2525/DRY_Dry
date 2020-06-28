
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./About.stories";
    
    it("renders a div with DryAbout", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryAbout = div.querySelector(
        '.dry-about:nth-child(1)'
      );
      expect(dryAbout).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      