
    import React from "react";
    
    import "./SocialMediaButtons.scss";
    
    const SocialMediaButtons = ({
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
        <div onClick={() => onClick("DrySocialMediaButtons")}
          className="dry-socialMediaButtons">
          DrySocialMediaButtons

        </div>
    );
    };
    
    SocialMediaButtons.defaultProps = {
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
      
    export default SocialMediaButtons;
    