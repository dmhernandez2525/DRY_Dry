
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Loaders.stories";
    
    it("renders a div with DryLoaders", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryLoaders = div.querySelector(
        '.dry-loaders:nth-child(1)'
      );
      expect(dryLoaders).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      