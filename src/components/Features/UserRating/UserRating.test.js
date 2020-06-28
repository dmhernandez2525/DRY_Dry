
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./UserRating.stories";
    
    it("renders a div with DryUserRating", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryUserRating = div.querySelector(
        '.dry-userRating:nth-child(1)'
      );
      expect(dryUserRating).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      