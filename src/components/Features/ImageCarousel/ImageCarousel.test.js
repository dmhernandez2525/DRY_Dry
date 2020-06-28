
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ImageCarousel.stories";
    
    it("renders a div with DryImageCarousel", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryImageCarousel = div.querySelector(
        '.dry-imageCarousel:nth-child(1)'
      );
      expect(dryImageCarousel).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      