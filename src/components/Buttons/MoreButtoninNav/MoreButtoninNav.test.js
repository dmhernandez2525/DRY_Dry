
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./MoreButtoninNav.stories";
    
    it("renders a div with DryMoreButtoninNav", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryMoreButtoninNav = div.querySelector(
        '.dry-moreButtoninNav:nth-child(1)'
      );
      expect(dryMoreButtoninNav).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      