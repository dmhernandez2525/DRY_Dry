
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./SyntaxHighlighter.stories";
    
    it("renders a div with DrySyntaxHighlighter", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const drySyntaxHighlighter = div.querySelector(
        '.dry-syntaxHighlighter:nth-child(1)'
      );
      expect(drySyntaxHighlighter).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      