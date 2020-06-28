
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./RespNavbarDropdown.stories";
    
    it("renders a div with DryRespNavbarDropdown", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryRespNavbarDropdown = div.querySelector(
        '.dry-respNavbarDropdown:nth-child(1)'
      );
      expect(dryRespNavbarDropdown).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      