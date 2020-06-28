
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./CheckoutForm.stories";
    
    it("renders a div with DryCheckoutForm", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCheckoutForm = div.querySelector(
        '.dry-checkoutForm:nth-child(1)'
      );
      expect(dryCheckoutForm).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      