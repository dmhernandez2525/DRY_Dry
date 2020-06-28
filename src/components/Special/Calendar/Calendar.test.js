
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./Calendar.stories";
    
    it("renders a div with DryCalendar", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryCalendar = div.querySelector(
        '.dry-calendar:nth-child(1)'
      );
      expect(dryCalendar).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      