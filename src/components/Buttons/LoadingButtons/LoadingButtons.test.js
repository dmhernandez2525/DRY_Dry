
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./LoadingButtons.stories";
    
    it("renders a div with DryLoadingButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryLoadingButtons = div.querySelector(
        '.dry-loadingButtons:nth-child(1)'
      );
      expect(dryLoadingButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      