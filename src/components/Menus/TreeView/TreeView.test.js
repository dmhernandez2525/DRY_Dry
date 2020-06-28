
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./TreeView.stories";
    
    it("renders a div with DryTreeView", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTreeView = div.querySelector(
        '.dry-treeView:nth-child(1)'
      );
      expect(dryTreeView).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      