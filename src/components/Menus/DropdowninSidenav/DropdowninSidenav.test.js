
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./DropdowninSidenav.stories";
    
    it("renders a div with DryDropdowninSidenav", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryDropdowninSidenav = div.querySelector(
        '.dry-dropdowninSidenav:nth-child(1)'
      );
      expect(dryDropdowninSidenav).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      