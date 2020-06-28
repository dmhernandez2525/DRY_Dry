
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ThreeLineList.stories";
    
    it("renders a div with DryThreeLineList", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryThreeLineList = div.querySelector(
        '.dry-threeLineList:nth-child(1)'
      );
      expect(dryThreeLineList).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      