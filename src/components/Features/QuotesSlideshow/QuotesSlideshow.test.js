
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./QuotesSlideshow.stories";
    
    it("renders a div with DryQuotesSlideshow", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryQuotesSlideshow = div.querySelector(
        '.dry-quotesSlideshow:nth-child(1)'
      );
      expect(dryQuotesSlideshow).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      