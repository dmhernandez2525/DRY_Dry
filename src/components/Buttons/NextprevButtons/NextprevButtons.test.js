
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./NextprevButtons.stories";
    
    it("renders a div with DryNextprevButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryNextprevButtons = div.querySelector(
        '.dry-nextprevButtons:nth-child(1)'
      );
      expect(dryNextprevButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      