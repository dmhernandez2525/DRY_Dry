
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./StarRating.stories";
    
    it("renders a div with DryStarRating", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryStarRating = div.querySelector(
        '.dry-starRating:nth-child(1)'
      );
      expect(dryStarRating).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      