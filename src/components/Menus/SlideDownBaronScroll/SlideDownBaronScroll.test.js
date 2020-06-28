
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SlideDownBaronScroll.stories";
    
    it("renders a div with DrySlideDownBaronScroll", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySlideDownBaronScroll = div.querySelector(
        '.dry-slideDownBaronScroll:nth-child(1)'
      );
      expect(drySlideDownBaronScroll).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      