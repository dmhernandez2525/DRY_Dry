
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./NavbaronImage.stories";
    
    it("renders a div with DryNavbaronImage", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryNavbaronImage = div.querySelector(
        '.dry-navbaronImage:nth-child(1)'
      );
      expect(dryNavbaronImage).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      