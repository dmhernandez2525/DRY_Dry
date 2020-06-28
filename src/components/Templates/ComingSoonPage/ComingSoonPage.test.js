
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ComingSoonPage.stories";
    
    it("renders a div with DryComingSoonPage", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryComingSoonPage = div.querySelector(
        '.dry-comingSoonPage:nth-child(1)'
      );
      expect(dryComingSoonPage).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      