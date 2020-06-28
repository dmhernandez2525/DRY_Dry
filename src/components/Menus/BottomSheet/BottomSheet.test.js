
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./BottomSheet.stories";
    
    it("renders a div with DryBottomSheet", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryBottomSheet = div.querySelector(
        '.dry-bottomSheet:nth-child(1)'
      );
      expect(dryBottomSheet).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      