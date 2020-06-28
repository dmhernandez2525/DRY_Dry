
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SocialLoginForm.stories";
    
    it("renders a div with DrySocialLoginForm", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySocialLoginForm = div.querySelector(
        '.dry-socialLoginForm:nth-child(1)'
      );
      expect(drySocialLoginForm).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      