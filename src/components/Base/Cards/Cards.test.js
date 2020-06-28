
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Cards.stories";
    
    it("renders a div with DryCards", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCards = div.querySelector(
        '.dry-cards:nth-child(1)'
      );
      expect(dryCards).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      