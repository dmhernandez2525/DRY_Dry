
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./DownloadButtons.stories";
    
    it("renders a div with DryDownloadButtons", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryDownloadButtons = div.querySelector(
        '.dry-downloadButtons:nth-child(1)'
      );
      expect(dryDownloadButtons).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      