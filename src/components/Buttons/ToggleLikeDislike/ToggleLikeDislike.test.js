
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ToggleLikeDislike.stories";
    
    it("renders a div with DryToggleLikeDislike", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryToggleLikeDislike = div.querySelector(
        '.dry-toggleLikeDislike:nth-child(1)'
      );
      expect(dryToggleLikeDislike).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      