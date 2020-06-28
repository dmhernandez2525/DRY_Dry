
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Notes.stories";
    
    it("renders a div with DryNotes", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryNotes = div.querySelector(
        '.dry-notes:nth-child(1)'
      );
      expect(dryNotes).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      