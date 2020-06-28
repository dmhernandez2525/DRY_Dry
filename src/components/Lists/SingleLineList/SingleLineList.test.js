
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SingleLineList.stories";
    
    it("renders a div with DrySingleLineList", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySingleLineList = div.querySelector(
        '.dry-singleLineList:nth-child(1)'
      );
      expect(drySingleLineList).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      