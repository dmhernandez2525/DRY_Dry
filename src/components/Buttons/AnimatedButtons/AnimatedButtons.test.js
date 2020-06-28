
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./AnimatedButtons.stories";
    
    it("renders a div with DryAnimatedButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryAnimatedButtons = div.querySelector(
        '.dry-animatedButtons:nth-child(1)'
      );
      expect(dryAnimatedButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      