
    import React from "react";
    
    import "./FullscreenNavigation.scss";
    
    const FullscreenNavigation = ({
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
        <div onClick={() => onClick("DryFullscreenNavigation")}
          className="dry-fullscreenNavigation">
          DryFullscreenNavigation

        </div>
    );
    };
    
    FullscreenNavigation.defaultProps = {
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
      
    export default FullscreenNavigation;
    