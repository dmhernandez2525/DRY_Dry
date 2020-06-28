
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ECommerce.stories";
    
    it("renders a div with DryECommerce", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryECommerce = div.querySelector(
        '.dry-eCommerce:nth-child(1)'
      );
      expect(dryECommerce).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      