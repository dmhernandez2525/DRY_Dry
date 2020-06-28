
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Pricing.stories";
    
    it("renders a div with DryPricing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryPricing = div.querySelector(
        '.dry-pricing:nth-child(1)'
      );
      expect(dryPricing).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      