
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Alerts.stories";
    
    it("renders a div with DryAlerts", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryAlerts = div.querySelector(
        '.dry-alerts:nth-child(1)'
      );
      expect(dryAlerts).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      