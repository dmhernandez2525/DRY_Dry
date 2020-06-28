
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./FlipBox.stories";
    
    it("renders a div with DryFlipBox", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFlipBox = div.querySelector(
        '.dry-flipBox:nth-child(1)'
      );
      expect(dryFlipBox).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      