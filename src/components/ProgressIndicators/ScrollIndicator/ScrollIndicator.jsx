
    import React from "react";
    
    import "./ScrollIndicator.scss";
    
    const ScrollIndicator = ({
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
        <div onClick={() => onClick("DryScrollIndicator")}
          className="dry-scrollIndicator">
          DryScrollIndicator

        </div>
    );
    };
    
    ScrollIndicator.defaultProps = {
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
      
    export default ScrollIndicator;
    