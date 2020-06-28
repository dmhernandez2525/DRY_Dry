
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ScrollToTopButton.stories";
    
    it("renders a div with DryScrollToTopButton", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryScrollToTopButton = div.querySelector(
        '.dry-scrollToTopButton:nth-child(1)'
      );
      expect(dryScrollToTopButton).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      