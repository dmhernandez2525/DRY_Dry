
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ProductCard.stories";
    
    it("renders a div with DryProductCard", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryProductCard = div.querySelector(
        '.dry-productCard:nth-child(1)'
      );
      expect(dryProductCard).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      