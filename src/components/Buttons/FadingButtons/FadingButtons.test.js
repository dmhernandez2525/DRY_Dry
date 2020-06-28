
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./FadingButtons.stories";
    
    it("renders a div with DryFadingButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFadingButtons = div.querySelector(
        '.dry-fadingButtons:nth-child(1)'
      );
      expect(dryFadingButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      