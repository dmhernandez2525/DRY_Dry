
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SplitScreen.stories";
    
    it("renders a div with DrySplitScreen", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySplitScreen = div.querySelector(
        '.dry-splitScreen:nth-child(1)'
      );
      expect(drySplitScreen).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      