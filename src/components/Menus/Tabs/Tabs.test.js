
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Tabs.stories";
    
    it("renders a div with DryTabs", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTabs = div.querySelector(
        '.dry-tabs:nth-child(1)'
      );
      expect(dryTabs).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      