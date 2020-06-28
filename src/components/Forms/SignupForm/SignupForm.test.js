
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SignupForm.stories";
    
    it("renders a div with DrySignupForm", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySignupForm = div.querySelector(
        '.dry-signupForm:nth-child(1)'
      );
      expect(drySignupForm).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      