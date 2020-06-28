
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./WovenImageList.stories";
    
    it("renders a div with DryWovenImageList", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryWovenImageList = div.querySelector(
        '.dry-wovenImageList:nth-child(1)'
      );
      expect(dryWovenImageList).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      