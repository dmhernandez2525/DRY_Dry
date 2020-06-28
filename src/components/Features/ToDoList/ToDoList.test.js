
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./ToDoList.stories";
    
    it("renders a div with DryToDoList", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryToDoList = div.querySelector(
        '.dry-toDoList:nth-child(1)'
      );
      expect(dryToDoList).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      