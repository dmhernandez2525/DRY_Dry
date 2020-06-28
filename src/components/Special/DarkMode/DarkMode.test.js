
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./DarkMode.stories";
    
    it("renders a div with DryDarkMode", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryDarkMode = div.querySelector(
        '.dry-darkMode:nth-child(1)'
      );
      expect(dryDarkMode).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      