
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Flowershop.stories";
    
    it("renders a div with DryFlowershop", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryFlowershop = div.querySelector(
        '.dry-flowershop:nth-child(1)'
      );
      expect(dryFlowershop).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      