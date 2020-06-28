
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Testimonials.stories";
    
    it("renders a div with DryTestimonials", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryTestimonials = div.querySelector(
        '.dry-testimonials:nth-child(1)'
      );
      expect(dryTestimonials).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      