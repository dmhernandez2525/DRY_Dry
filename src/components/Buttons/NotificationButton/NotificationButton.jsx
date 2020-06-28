
    import React from "react";
    
    import "./NotificationButton.scss";
    
    const NotificationButton = ({
      id,
      name,
      userTip,
      onClick,
      onChange,
      onBlur,
      onFocus,
      disable,
      className,
      errorMes,
      styles,
      passProps
    }) => {
    return (
        <div onClick={() => onClick("DryNotificationButton")}
          className="dry-notificationButton">
          DryNotificationButton

        </div>
    );
    };
    
    NotificationButton.defaultProps = {
        id: "",
        name: "",
        userTip: "",
        onClick: null,
        onChange: null,
        onBlur: null,
        disable: false,
        className: "",
        errorMes: "",
        styles: null,
        passProps: null
      };
      
    export default NotificationButton;
    