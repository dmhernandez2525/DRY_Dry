const testComponent = input => {
  const displayTestComponent = `
    import React from "react";
    import ReactDOM from "react-dom";
    import { WithPinnedTasks } from "./TaskList.stories";
    
    it("renders a div with ${input}", () => {
      const div = document.createElement("div");
      ReactDOM.render(<WithPinnedTasks />, div);
    
      // We expect to display the base component with the name inside a div
      const dry${input} = div.querySelector(
        '.dry-${input}:nth-child(1)'
      );
      expect(dry${input}).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      `;

  return displayTestComponent;
};

export default testComponent;
