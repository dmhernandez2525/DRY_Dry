
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Breadcrumbs.stories";
    
    it("renders a div with DryBreadcrumbs", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryBreadcrumbs = div.querySelector(
        '.dry-breadcrumbs:nth-child(1)'
      );
      expect(dryBreadcrumbs).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      