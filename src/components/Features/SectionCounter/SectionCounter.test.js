
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SectionCounter.stories";
    
    it("renders a div with DrySectionCounter", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySectionCounter = div.querySelector(
        '.dry-sectionCounter:nth-child(1)'
      );
      expect(drySectionCounter).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      