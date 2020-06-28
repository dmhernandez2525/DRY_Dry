
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./CountdownTimer.stories";
    
    it("renders a div with DryCountdownTimer", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCountdownTimer = div.querySelector(
        '.dry-countdownTimer:nth-child(1)'
      );
      expect(dryCountdownTimer).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      