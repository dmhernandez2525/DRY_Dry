
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Coupon.stories";
    
    it("renders a div with DryCoupon", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCoupon = div.querySelector(
        '.dry-coupon:nth-child(1)'
      );
      expect(dryCoupon).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      