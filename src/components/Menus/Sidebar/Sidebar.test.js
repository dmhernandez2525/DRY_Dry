
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Sidebar.stories";
    
    it("renders a div with DrySidebar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySidebar = div.querySelector(
        '.dry-sidebar:nth-child(1)'
      );
      expect(drySidebar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      