
    import React from "react";
    import ReactDOM from "react-dom";
    import { Default } from "./NotificationButton.stories";
    
    it("renders a div with DryNotificationButton", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Default />, div);
    
      // We expect to display the base component with the name inside a div
      const dryNotificationButton = div.querySelector(
        '.dry-notificationButton:nth-child(1)'
      );
      expect(dryNotificationButton).not.toBe(null);
    
      ReactDOM.unmountComponentAtNode(div);
    });
      