
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SkillBar.stories";
    
    it("renders a div with DrySkillBar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySkillBar = div.querySelector(
        '.dry-skillBar:nth-child(1)'
      );
      expect(drySkillBar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      