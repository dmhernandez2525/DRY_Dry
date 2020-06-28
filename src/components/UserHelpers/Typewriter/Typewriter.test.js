
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Typewriter.stories";
    
    it("renders a div with DryTypewriter", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTypewriter = div.querySelector(
        '.dry-typewriter:nth-child(1)'
      );
      expect(dryTypewriter).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      