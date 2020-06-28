
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SinglePage.stories";
    
    it("renders a div with DrySinglePage", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySinglePage = div.querySelector(
        '.dry-singlePage:nth-child(1)'
      );
      expect(drySinglePage).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      