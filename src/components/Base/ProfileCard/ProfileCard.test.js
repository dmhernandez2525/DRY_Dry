
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ProfileCard.stories";
    
    it("renders a div with DryProfileCard", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryProfileCard = div.querySelector(
        '.dry-profileCard:nth-child(1)'
      );
      expect(dryProfileCard).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      