
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./GradientBgScroll.stories";
    
    it("renders a div with DryGradientBgScroll", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryGradientBgScroll = div.querySelector(
        '.dry-gradientBgScroll:nth-child(1)'
      );
      expect(dryGradientBgScroll).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      