
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ProgressBars.stories";
    
    it("renders a div with DryProgressBars", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryProgressBars = div.querySelector(
        '.dry-progressBars:nth-child(1)'
      );
      expect(dryProgressBars).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      