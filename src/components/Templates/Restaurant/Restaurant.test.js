
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Restaurant.stories";
    
    it("renders a div with DryRestaurant", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryRestaurant = div.querySelector(
        '.dry-restaurant:nth-child(1)'
      );
      expect(dryRestaurant).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      