
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SearchBar.stories";
    
    it("renders a div with DrySearchBar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySearchBar = div.querySelector(
        '.dry-searchBar:nth-child(1)'
      );
      expect(drySearchBar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      