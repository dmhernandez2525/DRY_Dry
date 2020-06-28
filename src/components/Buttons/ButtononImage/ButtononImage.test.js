
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ButtononImage.stories";
    
    it("renders a div with DryButtononImage", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryButtononImage = div.querySelector(
        '.dry-buttononImage:nth-child(1)'
      );
      expect(dryButtononImage).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      