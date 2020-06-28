
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./CenteredMenuLink.stories";
    
    it("renders a div with DryCenteredMenuLink", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCenteredMenuLink = div.querySelector(
        '.dry-centeredMenuLink:nth-child(1)'
      );
      expect(dryCenteredMenuLink).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      