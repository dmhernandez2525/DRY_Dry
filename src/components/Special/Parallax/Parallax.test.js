
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Parallax.stories";
    
    it("renders a div with DryParallax", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryParallax = div.querySelector(
        '.dry-parallax:nth-child(1)'
      );
      expect(dryParallax).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      